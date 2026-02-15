use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct StarSimulation {
    positions: Vec<f32>, // [x, y, z]
    velocities: Vec<f32>,
    matrices: Vec<f32>,
    count: usize,
    bounds: f32,
}

#[wasm_bindgen]
impl StarSimulation {
    #[wasm_bindgen(constructor)]
    pub fn new(count: usize, bounds: f32) -> Self {
        let mut sim = Self {
            positions: vec![0.0; count * 3],
            velocities: vec![0.0; count * 3],
            matrices: vec![0.0; count * 16],
            count,
            bounds,
        };
        for i in 0..count {
            sim.reset_star(i);
        }
        sim
    }

    pub fn get_matrices_ptr(&self) -> *const f32 {
        self.matrices.as_ptr()
    }

    pub fn get_positions_ptr(&self) -> *const f32 {
        self.positions.as_ptr()
    }

    fn reset_star(&mut self, i: usize) {
        let b = self.bounds;
        self.positions[i * 3 + 0] = (js_sys::Math::random() as f32 * 2.0 - 1.0) * b;
        self.positions[i * 3 + 1] = (js_sys::Math::random() as f32 * 2.0 - 1.0) * b;
        self.positions[i * 3 + 2] = (js_sys::Math::random() as f32 * 2.0 - 1.0) * b;
        
        // Stars move slightly
        self.velocities[i * 3 + 0] = (js_sys::Math::random() as f32 - 0.5) * 2.0;
        self.velocities[i * 3 + 1] = (js_sys::Math::random() as f32 - 0.5) * 2.0;
        self.velocities[i * 3 + 2] = (js_sys::Math::random() as f32 - 0.5) * 2.0;
    }

    pub fn update(&mut self, dt: f32, cam_speed: f32, rotation_boost: f32) {
        let b = self.bounds;
        let speed_factor = 1.0 + (cam_speed + rotation_boost) * 0.05;
        
        for i in 0..self.count {
            let idx = i * 3;
            let mut px = self.positions[idx + 0] + self.velocities[idx + 0] * dt * speed_factor;
            let mut py = self.positions[idx + 1] + self.velocities[idx + 1] * dt * speed_factor;
            let mut pz = self.positions[idx + 2] + self.velocities[idx + 2] * dt * speed_factor;

            // Wrap around
            if px > b { px = -b; } else if px < -b { px = b; }
            if py > b { py = -b; } else if py < -b { py = b; }
            if pz > b { pz = -b; } else if pz < -b { pz = b; }

            self.positions[idx + 0] = px;
            self.positions[idx + 1] = py;
            self.positions[idx + 2] = pz;

            let mb = i * 16;
            // Reset to identity
            for j in 0..16 { self.matrices[mb + j] = 0.0; }
            self.matrices[mb + 0] = 1.0;
            self.matrices[mb + 5] = 1.0;
            self.matrices[mb + 10] = 1.0;
            self.matrices[mb + 15] = 1.0;
            // Position
            self.matrices[mb + 12] = px;
            self.matrices[mb + 13] = py;
            self.matrices[mb + 14] = pz;
        }
    }
}

#[wasm_bindgen]
pub struct CubeSimulation {
    pub rotation_x: f32,
    pub rotation_y: f32,
    pub velocity_x: f32,
    pub velocity_y: f32,
    pub flight_envelope: f32,
    pub flight_swirl: f32,
    pub burst: f32,
    
    face_matrices: Vec<f32>, // [m00..m15] * 6
    face_opacities: Vec<f32>, // [o] * 6
    
    // Static data for faces
    face_normals: Vec<f32>, // [nx, ny, nz] * 6
    face_base_pos: Vec<f32>, // [x, y, z] * 6
    face_base_rot: Vec<f32>, // [rx, ry, rz] * 6
    face_phases: Vec<f32>, // [p] * 6
    
    time: f32,
}

#[wasm_bindgen]
impl CubeSimulation {
    #[wasm_bindgen(constructor)]
    pub fn new(
        normals: Vec<f32>,
        base_pos: Vec<f32>,
        base_rot: Vec<f32>,
        phases: Vec<f32>
    ) -> Self {
        Self {
            rotation_x: 0.0,
            rotation_y: 0.0,
            velocity_x: 0.0,
            velocity_y: 0.0,
            flight_envelope: 0.0,
            flight_swirl: 0.0,
            burst: 0.0,
            face_matrices: vec![0.0; 6 * 16],
            face_opacities: vec![1.0; 6],
            face_normals: normals,
            face_base_pos: base_pos,
            face_base_rot: base_rot,
            face_phases: phases,
            time: 0.0,
        }
    }

    pub fn get_face_matrices_ptr(&self) -> *const f32 {
        self.face_matrices.as_ptr()
    }

    pub fn get_face_opacities_ptr(&self) -> *const f32 {
        self.face_opacities.as_ptr()
    }

    pub fn update(
        &mut self,
        dt: f32,
        _is_dragging: bool,
        _target_rx: f32,
        _target_ry: f32,
        _is_transitioning: bool,
        quality_motion_scale: f32,
        cube_size: f32,
        _camera_pos: Vec<f32>, // [x, y, z]
        _cube_world_pos: Vec<f32>, // [x, y, z]
        rotation_burst_seed: f32,
    ) {
        self.time += dt;
        // Core rotation is now managed in JS to avoid state conflict.
        // We only handle secondary effects here.

        let explode_distance = cube_size * 0.09 * self.burst * quality_motion_scale;
        let wobble_amount = 0.0054 * self.burst * quality_motion_scale;

        for i in 0..6 {
            let n_idx = i * 3;
            let nx = self.face_normals[n_idx + 0];
            let ny = self.face_normals[n_idx + 1];
            let nz = self.face_normals[n_idx + 2];

            let wave = (self.time * 0.009 + self.face_phases[i] + rotation_burst_seed).sin() * cube_size * 0.007 * self.burst;
            let d = explode_distance + wave;

            let px = self.face_base_pos[n_idx + 0] + nx * d;
            let py = self.face_base_pos[n_idx + 1] + ny * d;
            let pz = self.face_base_pos[n_idx + 2] + nz * d;

            let rx = self.face_base_rot[n_idx + 0] + (self.time * 0.011 + self.face_phases[i]).sin() * wobble_amount;
            let ry = self.face_base_rot[n_idx + 1] + (self.time * 0.010 + self.face_phases[i]).cos() * wobble_amount;
            let rz = self.face_base_rot[n_idx + 2] + (self.time * 0.012 + self.face_phases[i]).sin() * wobble_amount * 0.65;

            // Simplified matrix creation for Three.js CSS3DObject
            // We'll write the translation and Euler-like rotation components
            // Actually Three.js needs a full 4x4 matrix for setMatrixAt or element.style.transform.
            // But since these are CSS3D, it's easier to just pass the Pos/Rot components back or build the matrix.
            // Let's build the matrix in Wasm.
            
            let mb = i * 16;
            // For now, we'll just store Pos/Rot/Scaling back into the matrix buffer in a custom way
            // or perform actual matrix multiplication here. 
            // Given CSS3D, we'll just pass [px, py, pz, rx, ry, rz, scale] in the buffer to avoid 4x4 overhead.
            self.face_matrices[mb + 0] = px;
            self.face_matrices[mb + 1] = py;
            self.face_matrices[mb + 2] = pz;
            self.face_matrices[mb + 3] = rx;
            self.face_matrices[mb + 4] = ry;
            self.face_matrices[mb + 5] = rz;
            self.face_matrices[mb + 6] = 1.0; // scale
        }
        
        // Face opacity logic would also go here using camera_pos vs cube_world_pos
    }
}
