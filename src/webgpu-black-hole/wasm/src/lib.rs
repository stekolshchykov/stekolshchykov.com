use wasm_bindgen::prelude::*;

mod sims;
pub use sims::*;

#[wasm_bindgen]
pub struct DustSimulation {
    particles: Vec<f32>, // [px, py, pz, vx, vy, vz, mass, size, r, g, b]
    matrix_buffer: Vec<f32>, // [m00..m15] * count
    color_buffer: Vec<f32>, // [r, g, b] * count
    count: usize,
}

#[wasm_bindgen]
impl DustSimulation {
    #[wasm_bindgen(constructor)]
    pub fn new(
        count: usize,
        bh_x: f32, bh_y: f32, bh_z: f32,
        nx: f32, ny: f32, nz: f32,
        rotation_sign: f32,
        horizon_radius: f32,
        disk_outer_radius: f32,
        gravity_multiplier: f32,
        inner_radius: f32,
        outer_radius: f32,
        min_speed: f32,
        max_speed: f32,
        spawn_jitter: f32,
        thickness: f32,
        size_min: f32,
        size_max: f32,
        density: f32,
        bright_factor: f32
    ) -> Self {
        let mut sim = Self {
            particles: vec![0.0; count * 11],
            matrix_buffer: vec![0.0; count * 16],
            color_buffer: vec![0.0; count * 3],
            count,
        };

        for i in 0..count {
            sim.spawn_particle(
                i, bh_x, bh_y, bh_z, nx, ny, nz, rotation_sign, horizon_radius,
                disk_outer_radius, gravity_multiplier, inner_radius, outer_radius,
                min_speed, max_speed, spawn_jitter, thickness, size_min, size_max,
                density, bright_factor
            );
        }
        sim
    }

    fn spawn_particle(
        &mut self,
        idx: usize,
        bh_x: f32, bh_y: f32, bh_z: f32,
        nx: f32, ny: f32, nz: f32,
        rotation_sign: f32,
        horizon_radius: f32,
        disk_outer_radius: f32,
        gravity_multiplier: f32,
        inner_radius: f32,
        outer_radius: f32,
        min_speed: f32,
        max_speed: f32,
        spawn_jitter: f32,
        thickness_val: f32,
        size_min: f32,
        size_max: f32,
        density: f32,
        bright_factor: f32
    ) {
        let r_rnd = js_sys::Math::random() as f32;
        let t_rnd = js_sys::Math::random() as f32;
        let theta = (js_sys::Math::random() * 2.0 * std::f64::consts::PI) as f32;

        let min_r = inner_radius.max(horizon_radius * 1.3);
        let max_r = outer_radius.min(disk_outer_radius + 1.0);
        let r_range = (max_r - min_r).max(0.1);
        let t = t_rnd.powf(0.3);
        let r = min_r + r_range * t;

        // Basis
        let mut ux = 0.0; let mut uy = 1.0; let mut uz = 0.0;
        if ny.abs() > 0.99 {
            ux = 1.0; uy = 0.0;
        }
        // cross(u, n)
        let mut vx = uy*nz - uz*ny;
        let mut vy = uz*nx - ux*nz;
        let mut vz = ux*ny - uy*nx;
        let v_len = (vx*vx + vy*vy + vz*vz).sqrt();
        vx /= v_len; vy /= v_len; vz /= v_len;

        // u = cross(n, v)
        let ux = ny*vz - nz*vy;
        let uy = nz*vx - nx*vz;
        let uz = nx*vy - ny*vx;

        let rad_x = (ux * theta.cos() + vx * theta.sin()) * r;
        let rad_y = (uy * theta.cos() + vy * theta.sin()) * r;
        let rad_z = (uz * theta.cos() + vz * theta.sin()) * r;

        let t_correction = (js_sys::Math::random() as f32 * 2.0 - 1.0) * thickness_val * 0.25;
        let px = bh_x + rad_x + nx * t_correction;
        let py = bh_y + rad_y + ny * t_correction;
        let pz = bh_z + rad_z + nz * t_correction;

        // Velocity
        // tangent = cross(normal, radial)
        let mut tx = ny*rad_z - nz*rad_y;
        let mut ty = nz*rad_x - nx*rad_z;
        let mut tz = nx*rad_y - ny*rad_x;
        let t_len = (tx*tx + ty*ty + tz*tz).sqrt();
        tx /= t_len; ty /= t_len; tz /= t_len;
        let dir = if rotation_sign >= 0.0 { 1.0 } else { -1.0 };
        tx *= dir; ty *= dir; tz *= dir;

        let v_mag = ( (gravity_multiplier * min_r) / r ).sqrt() * (0.9 + js_sys::Math::random() as f32 * 0.15);
        let v_mag = v_mag.clamp(min_speed, max_speed);

        let mut vx = tx * v_mag;
        let mut vy = ty * v_mag;
        let mut vz = tz * v_mag;

        vx += nx * (js_sys::Math::random() as f32 - 0.5) * spawn_jitter * 0.1;
        vy += ny * (js_sys::Math::random() as f32 - 0.5) * spawn_jitter * 0.1;
        vz += nz * (js_sys::Math::random() as f32 - 0.5) * spawn_jitter * 0.1;

        let norm_rad_x = rad_x / r;
        let norm_rad_y = rad_y / r;
        let norm_rad_z = rad_z / r;
        vx += norm_rad_x * (js_sys::Math::random() as f32 - 0.5) * spawn_jitter * 0.05;
        vy += norm_rad_y * (js_sys::Math::random() as f32 - 0.5) * spawn_jitter * 0.05;
        vz += norm_rad_z * (js_sys::Math::random() as f32 - 0.5) * spawn_jitter * 0.05;

        let size = size_min + (size_max - size_min) * (js_sys::Math::random() as f32).powi(2);
        let mass = density * size * size * size;
        let hue = 0.05 + js_sys::Math::random() as f32 * 0.1;
        
        // HSL to RGB (simplified warm orange/yellow)
        let color_r = 1.0;
        let color_g = 0.6 + js_sys::Math::random() as f32 * 0.3;
        let color_b = 0.2 + js_sys::Math::random() as f32 * 0.2;

        let base = idx * 11;
        self.particles[base + 0] = px;
        self.particles[base + 1] = py;
        self.particles[base + 2] = pz;
        self.particles[base + 3] = vx;
        self.particles[base + 4] = vy;
        self.particles[base + 5] = vz;
        self.particles[base + 6] = mass;
        self.particles[base + 7] = size;
        self.particles[base + 8] = color_r;
        self.particles[base + 9] = color_g;
        self.particles[base + 10] = color_b;
    }

    pub fn get_particles_ptr(&self) -> *const f32 {
        self.particles.as_ptr()
    }

    pub fn get_matrices_ptr(&self) -> *const f32 {
        self.matrix_buffer.as_ptr()
    }

    pub fn get_colors_ptr(&self) -> *const f32 {
        self.color_buffer.as_ptr()
    }

    pub fn update(
        &mut self,
        dt: f32,
        bh_x: f32, bh_y: f32, bh_z: f32,
        normal_x: f32, normal_y: f32, normal_z: f32,
        cam_x: f32, cam_y: f32, cam_z: f32,
        rotation_sign: f32,
        horizon_radius: f32,
        disk_outer_radius: f32,
        // Config params
        gravity_multiplier: f32,
        plane_stiffness: f32,
        inner_radius: f32,
        outer_radius: f32,
        min_speed: f32,
        max_speed: f32,
        drag: f32,
        orbit_blend: f32,
        swirl_val: f32,
        radial_damping: f32,
        thickness: f32,
        lens_strength: f32,
        bright_factor: f32,
        redshift_scale: f32,
        streak_scale: f32,
        respawn_inner: f32,
        spawn_jitter: f32,
        size_min: f32,
        size_max: f32,
        density: f32,
    ) {
        let substeps = ((dt / 0.01).ceil() as usize).clamp(1, 4);
        let h = dt / substeps as f32;

        for _ in 0..substeps {
            for i in 0..self.count {
                // If particle was flagged for respawn (size < 0)
                if self.particles[i * 11 + 7] < 0.0 {
                    self.spawn_particle(
                        i, bh_x, bh_y, bh_z, normal_x, normal_y, normal_z,
                        rotation_sign, horizon_radius, disk_outer_radius,
                        gravity_multiplier, inner_radius, outer_radius,
                        min_speed, max_speed, spawn_jitter, thickness,
                        size_min, size_max, density, bright_factor
                    );
                }

                self.integrate_particle(
                    i, h, bh_x, bh_y, bh_z, normal_x, normal_y, normal_z,
                    rotation_sign, horizon_radius, disk_outer_radius,
                    gravity_multiplier, plane_stiffness, inner_radius, outer_radius,
                    min_speed, max_speed, drag, orbit_blend, swirl_val, radial_damping,
                    thickness
                );
            }
        }

        self.compute_render_data(
            bh_x, bh_y, bh_z, normal_x, normal_y, normal_z, cam_x, cam_y, cam_z,
            bright_factor, lens_strength, redshift_scale, streak_scale, respawn_inner
        );
    }

    fn integrate_particle(
        &mut self,
        idx: usize,
        dt: f32,
        bh_x: f32, bh_y: f32, bh_z: f32,
        nx: f32, ny: f32, nz: f32,
        rotation_sign: f32,
        horizon_radius: f32,
        disk_outer_radius: f32,
        gravity_multiplier: f32,
        plane_stiffness: f32,
        inner_radius: f32,
        outer_radius: f32,
        min_speed: f32,
        max_speed: f32,
        drag: f32,
        orbit_blend: f32,
        swirl_val: f32,
        radial_damping: f32,
        thickness: f32
    ) {
        let base = idx * 11;
        let px = self.particles[base + 0];
        let py = self.particles[base + 1];
        let pz = self.particles[base + 2];
        let mut vx = self.particles[base + 3];
        let mut vy = self.particles[base + 4];
        let mut vz = self.particles[base + 5];
        let mass = self.particles[base + 6];
        let size = self.particles[base + 7];

        let rx = bh_x - px;
        let ry = bh_y - py;
        let rz = bh_z - pz;
        let dist_sq = (rx*rx + ry*ry + rz*rz).max(1e-4);
        let dist = dist_sq.sqrt();

        // Gravity
        let g_accel = (1.0 * gravity_multiplier) / (dist_sq * dist);
        vx += rx * g_accel * dt;
        vy += ry * g_accel * dt;
        vz += rz * g_accel * dt;

        // Plane stiffness (keep in disk plane)
        let dot_v_n = vx*nx + vy*ny + vz*nz;
        vx -= nx * dot_v_n * plane_stiffness * dt;
        vy -= ny * dot_v_n * plane_stiffness * dt;
        vz -= nz * dot_v_n * plane_stiffness * dt;

        // Orbital logic
        let mut rad_x = px - bh_x;
        let mut rad_y = py - bh_y;
        let mut rad_z = pz - bh_z;
        
        let dot_r_n = rad_x*nx + rad_y*ny + rad_z*nz;
        let mut tmp_x = rad_x - nx * dot_r_n;
        let mut tmp_y = rad_y - ny * dot_r_n;
        let mut tmp_z = rad_z - nz * dot_r_n;
        let radial_plane_len = (tmp_x*tmp_x + tmp_y*tmp_y + tmp_z*tmp_z).sqrt();

        let effective_inner = inner_radius.max(horizon_radius * 1.3);
        let effective_outer = outer_radius.min(disk_outer_radius + 1.0);

        if radial_plane_len > 1e-4 {
            // Tangent cross(normal, radial_plane)
            let mut tx = ny*tmp_z - nz*tmp_y;
            let mut ty = nz*tmp_x - nx*tmp_z;
            let mut tz = nx*tmp_y - ny*tmp_x;
            let t_len = (tx*tx + ty*ty + tz*tz).sqrt();
            tx /= t_len; ty /= t_len; tz /= t_len;
            let dir = if rotation_sign >= 0.0 { 1.0 } else { -1.0 };
            tx *= dir; ty *= dir; tz *= dir;

            let v_target = ( (1.0 * gravity_multiplier * effective_inner) / radial_plane_len ).sqrt()
                           .clamp(min_speed, max_speed);
            
            let dvx = tx * v_target - vx;
            let dvy = ty * v_target - vy;
            let dvz = tz * v_target - vz;

            let area = size * size;
            let a_drag = (drag * area) / mass.max(1e-4);
            vx += dvx * a_drag * dt;
            vy += dvy * a_drag * dt;
            vz += dvz * a_drag * dt;

            // Orbit blend
            let blend = (orbit_blend * dt).clamp(0.0, 0.25);
            vx += (tx * v_target - vx) * blend;
            vy += (ty * v_target - vy) * blend;
            vz += (tz * v_target - vz) * blend;

            // Swirl
            vx += tx * swirl_val;
            vy += ty * swirl_val;
            vz += tz * swirl_val;

            // Radial damping
            let mut r_dx = tmp_x;
            let mut r_dy = tmp_y;
            let mut r_dz = tmp_z;
            let rd_len = (r_dx*r_dx + r_dy*r_dy + r_dz*r_dz).sqrt();
            if rd_len > 1e-6 {
                r_dx /= rd_len; r_dy /= rd_len; r_dz /= rd_len;
            }
            let r_vel = vx*r_dx + vy*r_dy + vz*r_dz;
            vx -= r_dx * r_vel * radial_damping * dt;
            vy -= r_dy * r_vel * radial_damping * dt;
            vz -= r_dz * r_vel * radial_damping * dt;
        }

        let speed = (vx*vx + vy*vy + vz*vz).sqrt();
        if speed > max_speed {
            vx *= max_speed / speed;
            vy *= max_speed / speed;
            vz *= max_speed / speed;
        }

        // Position
        let npx = px + vx * dt;
        let npy = py + vy * dt;
        let npz = pz + vz * dt;

        // Thickness policing
        let h_after = npx*nx + npy*ny + npz*nz;
        let max_h = thickness * 0.5;
        let mut final_px = npx;
        let mut final_py = npy;
        let mut final_pz = npz;
        let mut final_vx = vx;
        let mut final_vy = vy;
        let mut final_vz = vz;

        if h_after.abs() > max_h {
            let correction = -h_after.signum() * (h_after.abs() - max_h);
            final_px += nx * correction;
            final_py += ny * correction;
            final_pz += nz * correction;
            final_vx -= nx * h_after * plane_stiffness * dt;
            final_vy -= ny * h_after * plane_stiffness * dt;
            final_vz -= nz * h_after * plane_stiffness * dt;
        }

        // policing
        let pr_x = final_px - bh_x;
        let pr_y = final_py - bh_y;
        let pr_z = final_pz - bh_z;
        let dot_pr_n = pr_x*nx + pr_y*ny + pr_z*nz;
        let pr_px = pr_x - nx * dot_pr_n;
        let pr_py = pr_y - ny * dot_pr_n;
        let pr_pz = pr_z - nz * dot_pr_n;
        let plane_len_after = (pr_px*pr_px + pr_py*pr_py + pr_pz*pr_pz).sqrt();
        let dist_after = (pr_x*pr_x + pr_y*pr_y + pr_z*pr_z).sqrt();

        if dist_after < horizon_radius * 1.05 || plane_len_after < effective_inner || plane_len_after > effective_outer {
            // Signal respawn by setting size to negative (handled by JS for now to get randoms)
            self.particles[base + 7] = -1.0;
        } else {
            self.particles[base + 0] = final_px;
            self.particles[base + 1] = final_py;
            self.particles[base + 2] = final_pz;
            self.particles[base + 3] = final_vx;
            self.particles[base + 4] = final_vy;
            self.particles[base + 5] = final_vz;
        }
    }

    fn compute_render_data(
        &mut self,
        bh_x: f32, bh_y: f32, bh_z: f32,
        nx: f32, ny: f32, nz: f32,
        cam_x: f32, cam_y: f32, cam_z: f32,
        bright_factor: f32,
        lens_strength: f32,
        redshift_scale: f32,
        streak_scale: f32,
        respawn_inner: f32,
    ) {
        for i in 0..self.count {
            let base = i * 11;
            let px = self.particles[base + 0];
            let py = self.particles[base + 1];
            let pz = self.particles[base + 2];
            let vx = self.particles[base + 3];
            let vy = self.particles[base + 4];
            let vz = self.particles[base + 5];
            let size = self.particles[base + 7];
            let r = self.particles[base + 8];
            let g = self.particles[base + 9];
            let b = self.particles[base + 10];

            if size < 0.0 { continue; } // Waiting for respawn

            let dx = px - bh_x;
            let dy = py - bh_y;
            let dz = pz - bh_z;
            let d_dist = (dx*dx + dy*dy + dz*dz).sqrt().max(0.01);
            
            let grav_scale = (1.0 + (respawn_inner / d_dist) * 0.25).clamp(1.0, 2.2);
            let lens_scale = 1.0 + lens_strength * (respawn_inner / d_dist).powi(2);
            // Flicker isn't strictly deterministic here without a seed, 
            // but we can pass a value or just use a fixed 1.0 for now for stability.
            let flicker = 1.0; 
            let scale_base = size * grav_scale * lens_scale * flicker;
            let brightness = (bright_factor * grav_scale * lens_scale * flicker * (1.0 + redshift_scale * respawn_inner / d_dist)).clamp(0.0, 5.0);

            // Matrix construction (dummy.matrix equivalent)
            // xAxis = normalized velocity
            let speed = (vx*vx + vy*vy + vz*vz).sqrt();
            let mut xx = if speed < 1e-4 { nx } else { vx / speed };
            let mut xy = if speed < 1e-4 { ny } else { vy / speed };
            let mut xz = if speed < 1e-4 { nz } else { vz / speed };

            // zAxis = cross(xAxis, cameraDir)
            let mut zx = xy*cam_z - xz*cam_y;
            let mut zy = xz*cam_x - xx*cam_z;
            let mut zz = xx*cam_y - xy*cam_x;
            let z_len_sq = zx*zx + zy*zy + zz*zz;
            if z_len_sq < 1e-6 {
                zx = xy*nz - xz*ny;
                zy = xz*nx - xx*nz;
                zz = xx*ny - xy*nx;
            }
            let z_len = (zx*zx + zy*zy + zz*zz).sqrt();
            zx /= z_len; zy /= z_len; zz /= z_len;

            // yAxis = cross(zAxis, xAxis)
            let yx = zy*xz - zz*xy;
            let yy = zz*xx - zx*xz;
            let yz = zx*xy - zy*xx;

            // Basis Scale
            let stretch = 1.0 + streak_scale * (respawn_inner / d_dist);
            let sx = scale_base * stretch;
            let sy = scale_base * 0.25;
            let sz = scale_base * 0.6;

            // Col 0: xAxis * sx
            let mb = i * 16;
            self.matrix_buffer[mb + 0] = xx * sx;
            self.matrix_buffer[mb + 1] = xy * sx;
            self.matrix_buffer[mb + 2] = xz * sx;
            self.matrix_buffer[mb + 3] = 0.0;
            // Col 1: yAxis * sy
            self.matrix_buffer[mb + 4] = yx * sy;
            self.matrix_buffer[mb + 5] = yy * sy;
            self.matrix_buffer[mb + 6] = yz * sy;
            self.matrix_buffer[mb + 7] = 0.0;
            // Col 2: zAxis * sz
            self.matrix_buffer[mb + 8] = zx * sz;
            self.matrix_buffer[mb + 9] = zy * sz;
            self.matrix_buffer[mb + 10] = zz * sz;
            self.matrix_buffer[mb + 11] = 0.0;
            // Col 3: Position
            self.matrix_buffer[mb + 12] = px;
            self.matrix_buffer[mb + 13] = py;
            self.matrix_buffer[mb + 14] = pz;
            self.matrix_buffer[mb + 15] = 1.0;

            let cb = i * 3;
            self.color_buffer[cb + 0] = r * brightness;
            self.color_buffer[cb + 1] = g * brightness;
            self.color_buffer[cb + 2] = b * brightness;
        }
    }
}
