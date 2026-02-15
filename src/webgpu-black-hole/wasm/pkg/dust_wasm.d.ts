/* tslint:disable */
/* eslint-disable */

export class CubeSimulation {
    free(): void;
    [Symbol.dispose](): void;
    get_face_matrices_ptr(): number;
    get_face_opacities_ptr(): number;
    constructor(normals: Float32Array, base_pos: Float32Array, base_rot: Float32Array, phases: Float32Array);
    update(dt: number, _is_dragging: boolean, _target_rx: number, _target_ry: number, _is_transitioning: boolean, quality_motion_scale: number, cube_size: number, _camera_pos: Float32Array, _cube_world_pos: Float32Array, rotation_burst_seed: number): void;
    burst: number;
    flight_envelope: number;
    flight_swirl: number;
    rotation_x: number;
    rotation_y: number;
    velocity_x: number;
    velocity_y: number;
}

export class DustSimulation {
    free(): void;
    [Symbol.dispose](): void;
    get_colors_ptr(): number;
    get_matrices_ptr(): number;
    get_particles_ptr(): number;
    constructor(count: number, bh_x: number, bh_y: number, bh_z: number, nx: number, ny: number, nz: number, rotation_sign: number, horizon_radius: number, disk_outer_radius: number, gravity_multiplier: number, inner_radius: number, outer_radius: number, min_speed: number, max_speed: number, spawn_jitter: number, thickness: number, size_min: number, size_max: number, density: number, bright_factor: number);
    update(dt: number, bh_x: number, bh_y: number, bh_z: number, normal_x: number, normal_y: number, normal_z: number, cam_x: number, cam_y: number, cam_z: number, rotation_sign: number, horizon_radius: number, disk_outer_radius: number, gravity_multiplier: number, plane_stiffness: number, inner_radius: number, outer_radius: number, min_speed: number, max_speed: number, drag: number, orbit_blend: number, swirl_val: number, radial_damping: number, thickness: number, lens_strength: number, bright_factor: number, redshift_scale: number, streak_scale: number, respawn_inner: number, spawn_jitter: number, size_min: number, size_max: number, density: number): void;
}

export class NoiseGenerator {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Fills internal buffer with noise values for a 2D/3D grid.
     * Used for generating noise textures on the fly.
     */
    fill_2d_noise(width: number, height: number, x_offset: number, y_offset: number, scale: number, octaves: number, persistence: number, lacunarity: number): void;
    fill_3d_noise(width: number, height: number, depth: number, x_offset: number, y_offset: number, z_offset: number, scale: number, octaves: number, persistence: number, lacunarity: number): void;
    get_buffer_len(): number;
    get_buffer_ptr(): number;
    constructor(seed: number);
}

export class StarSimulation {
    free(): void;
    [Symbol.dispose](): void;
    get_matrices_ptr(): number;
    get_positions_ptr(): number;
    constructor(count: number, bounds: number);
    update(dt: number, cam_speed: number, rotation_boost: number): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_dustsimulation_free: (a: number, b: number) => void;
    readonly __wbg_noisegenerator_free: (a: number, b: number) => void;
    readonly dustsimulation_get_colors_ptr: (a: number) => number;
    readonly dustsimulation_get_matrices_ptr: (a: number) => number;
    readonly dustsimulation_get_particles_ptr: (a: number) => number;
    readonly dustsimulation_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number, s: number, t: number, u: number) => number;
    readonly dustsimulation_update: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number, s: number, t: number, u: number, v: number, w: number, x: number, y: number, z: number, a1: number, b1: number, c1: number, d1: number, e1: number, f1: number, g1: number, h1: number) => void;
    readonly noisegenerator_fill_2d_noise: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
    readonly noisegenerator_fill_3d_noise: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => void;
    readonly noisegenerator_get_buffer_len: (a: number) => number;
    readonly noisegenerator_new: (a: number) => number;
    readonly noisegenerator_get_buffer_ptr: (a: number) => number;
    readonly __wbg_cubesimulation_free: (a: number, b: number) => void;
    readonly __wbg_get_cubesimulation_burst: (a: number) => number;
    readonly __wbg_get_cubesimulation_flight_envelope: (a: number) => number;
    readonly __wbg_get_cubesimulation_flight_swirl: (a: number) => number;
    readonly __wbg_get_cubesimulation_rotation_x: (a: number) => number;
    readonly __wbg_get_cubesimulation_rotation_y: (a: number) => number;
    readonly __wbg_get_cubesimulation_velocity_x: (a: number) => number;
    readonly __wbg_get_cubesimulation_velocity_y: (a: number) => number;
    readonly __wbg_set_cubesimulation_burst: (a: number, b: number) => void;
    readonly __wbg_set_cubesimulation_flight_envelope: (a: number, b: number) => void;
    readonly __wbg_set_cubesimulation_flight_swirl: (a: number, b: number) => void;
    readonly __wbg_set_cubesimulation_rotation_x: (a: number, b: number) => void;
    readonly __wbg_set_cubesimulation_rotation_y: (a: number, b: number) => void;
    readonly __wbg_set_cubesimulation_velocity_x: (a: number, b: number) => void;
    readonly __wbg_set_cubesimulation_velocity_y: (a: number, b: number) => void;
    readonly __wbg_starsimulation_free: (a: number, b: number) => void;
    readonly cubesimulation_get_face_matrices_ptr: (a: number) => number;
    readonly cubesimulation_get_face_opacities_ptr: (a: number) => number;
    readonly cubesimulation_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => number;
    readonly cubesimulation_update: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number) => void;
    readonly starsimulation_get_matrices_ptr: (a: number) => number;
    readonly starsimulation_new: (a: number, b: number) => number;
    readonly starsimulation_update: (a: number, b: number, c: number, d: number) => void;
    readonly starsimulation_get_positions_ptr: (a: number) => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
