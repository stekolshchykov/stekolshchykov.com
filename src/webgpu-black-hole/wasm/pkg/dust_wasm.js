/* @ts-self-types="./dust_wasm.d.ts" */

export class CubeSimulation {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CubeSimulationFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_cubesimulation_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get_face_matrices_ptr() {
        const ret = wasm.cubesimulation_get_face_matrices_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get_face_opacities_ptr() {
        const ret = wasm.cubesimulation_get_face_opacities_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {Float32Array} normals
     * @param {Float32Array} base_pos
     * @param {Float32Array} base_rot
     * @param {Float32Array} phases
     */
    constructor(normals, base_pos, base_rot, phases) {
        const ptr0 = passArrayF32ToWasm0(normals, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArrayF32ToWasm0(base_pos, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passArrayF32ToWasm0(base_rot, wasm.__wbindgen_malloc);
        const len2 = WASM_VECTOR_LEN;
        const ptr3 = passArrayF32ToWasm0(phases, wasm.__wbindgen_malloc);
        const len3 = WASM_VECTOR_LEN;
        const ret = wasm.cubesimulation_new(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
        this.__wbg_ptr = ret >>> 0;
        CubeSimulationFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {number} dt
     * @param {boolean} _is_dragging
     * @param {number} _target_rx
     * @param {number} _target_ry
     * @param {boolean} _is_transitioning
     * @param {number} quality_motion_scale
     * @param {number} cube_size
     * @param {Float32Array} _camera_pos
     * @param {Float32Array} _cube_world_pos
     * @param {number} rotation_burst_seed
     */
    update(dt, _is_dragging, _target_rx, _target_ry, _is_transitioning, quality_motion_scale, cube_size, _camera_pos, _cube_world_pos, rotation_burst_seed) {
        const ptr0 = passArrayF32ToWasm0(_camera_pos, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArrayF32ToWasm0(_cube_world_pos, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.cubesimulation_update(this.__wbg_ptr, dt, _is_dragging, _target_rx, _target_ry, _is_transitioning, quality_motion_scale, cube_size, ptr0, len0, ptr1, len1, rotation_burst_seed);
    }
    /**
     * @returns {number}
     */
    get burst() {
        const ret = wasm.__wbg_get_cubesimulation_burst(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get flight_envelope() {
        const ret = wasm.__wbg_get_cubesimulation_flight_envelope(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get flight_swirl() {
        const ret = wasm.__wbg_get_cubesimulation_flight_swirl(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get rotation_x() {
        const ret = wasm.__wbg_get_cubesimulation_rotation_x(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get rotation_y() {
        const ret = wasm.__wbg_get_cubesimulation_rotation_y(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get velocity_x() {
        const ret = wasm.__wbg_get_cubesimulation_velocity_x(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get velocity_y() {
        const ret = wasm.__wbg_get_cubesimulation_velocity_y(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} arg0
     */
    set burst(arg0) {
        wasm.__wbg_set_cubesimulation_burst(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set flight_envelope(arg0) {
        wasm.__wbg_set_cubesimulation_flight_envelope(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set flight_swirl(arg0) {
        wasm.__wbg_set_cubesimulation_flight_swirl(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set rotation_x(arg0) {
        wasm.__wbg_set_cubesimulation_rotation_x(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set rotation_y(arg0) {
        wasm.__wbg_set_cubesimulation_rotation_y(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set velocity_x(arg0) {
        wasm.__wbg_set_cubesimulation_velocity_x(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set velocity_y(arg0) {
        wasm.__wbg_set_cubesimulation_velocity_y(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) CubeSimulation.prototype[Symbol.dispose] = CubeSimulation.prototype.free;

export class DustSimulation {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DustSimulationFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_dustsimulation_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get_colors_ptr() {
        const ret = wasm.dustsimulation_get_colors_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get_matrices_ptr() {
        const ret = wasm.dustsimulation_get_matrices_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get_particles_ptr() {
        const ret = wasm.dustsimulation_get_particles_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} count
     * @param {number} bh_x
     * @param {number} bh_y
     * @param {number} bh_z
     * @param {number} nx
     * @param {number} ny
     * @param {number} nz
     * @param {number} rotation_sign
     * @param {number} horizon_radius
     * @param {number} disk_outer_radius
     * @param {number} gravity_multiplier
     * @param {number} inner_radius
     * @param {number} outer_radius
     * @param {number} min_speed
     * @param {number} max_speed
     * @param {number} spawn_jitter
     * @param {number} thickness
     * @param {number} size_min
     * @param {number} size_max
     * @param {number} density
     * @param {number} bright_factor
     */
    constructor(count, bh_x, bh_y, bh_z, nx, ny, nz, rotation_sign, horizon_radius, disk_outer_radius, gravity_multiplier, inner_radius, outer_radius, min_speed, max_speed, spawn_jitter, thickness, size_min, size_max, density, bright_factor) {
        const ret = wasm.dustsimulation_new(count, bh_x, bh_y, bh_z, nx, ny, nz, rotation_sign, horizon_radius, disk_outer_radius, gravity_multiplier, inner_radius, outer_radius, min_speed, max_speed, spawn_jitter, thickness, size_min, size_max, density, bright_factor);
        this.__wbg_ptr = ret >>> 0;
        DustSimulationFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {number} dt
     * @param {number} bh_x
     * @param {number} bh_y
     * @param {number} bh_z
     * @param {number} normal_x
     * @param {number} normal_y
     * @param {number} normal_z
     * @param {number} cam_x
     * @param {number} cam_y
     * @param {number} cam_z
     * @param {number} rotation_sign
     * @param {number} horizon_radius
     * @param {number} disk_outer_radius
     * @param {number} gravity_multiplier
     * @param {number} plane_stiffness
     * @param {number} inner_radius
     * @param {number} outer_radius
     * @param {number} min_speed
     * @param {number} max_speed
     * @param {number} drag
     * @param {number} orbit_blend
     * @param {number} swirl_val
     * @param {number} radial_damping
     * @param {number} thickness
     * @param {number} lens_strength
     * @param {number} bright_factor
     * @param {number} redshift_scale
     * @param {number} streak_scale
     * @param {number} respawn_inner
     * @param {number} spawn_jitter
     * @param {number} size_min
     * @param {number} size_max
     * @param {number} density
     */
    update(dt, bh_x, bh_y, bh_z, normal_x, normal_y, normal_z, cam_x, cam_y, cam_z, rotation_sign, horizon_radius, disk_outer_radius, gravity_multiplier, plane_stiffness, inner_radius, outer_radius, min_speed, max_speed, drag, orbit_blend, swirl_val, radial_damping, thickness, lens_strength, bright_factor, redshift_scale, streak_scale, respawn_inner, spawn_jitter, size_min, size_max, density) {
        wasm.dustsimulation_update(this.__wbg_ptr, dt, bh_x, bh_y, bh_z, normal_x, normal_y, normal_z, cam_x, cam_y, cam_z, rotation_sign, horizon_radius, disk_outer_radius, gravity_multiplier, plane_stiffness, inner_radius, outer_radius, min_speed, max_speed, drag, orbit_blend, swirl_val, radial_damping, thickness, lens_strength, bright_factor, redshift_scale, streak_scale, respawn_inner, spawn_jitter, size_min, size_max, density);
    }
}
if (Symbol.dispose) DustSimulation.prototype[Symbol.dispose] = DustSimulation.prototype.free;

export class NoiseGenerator {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        NoiseGeneratorFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_noisegenerator_free(ptr, 0);
    }
    /**
     * Fills internal buffer with noise values for a 2D/3D grid.
     * Used for generating noise textures on the fly.
     * @param {number} width
     * @param {number} height
     * @param {number} x_offset
     * @param {number} y_offset
     * @param {number} scale
     * @param {number} octaves
     * @param {number} persistence
     * @param {number} lacunarity
     */
    fill_2d_noise(width, height, x_offset, y_offset, scale, octaves, persistence, lacunarity) {
        wasm.noisegenerator_fill_2d_noise(this.__wbg_ptr, width, height, x_offset, y_offset, scale, octaves, persistence, lacunarity);
    }
    /**
     * @param {number} width
     * @param {number} height
     * @param {number} depth
     * @param {number} x_offset
     * @param {number} y_offset
     * @param {number} z_offset
     * @param {number} scale
     * @param {number} octaves
     * @param {number} persistence
     * @param {number} lacunarity
     */
    fill_3d_noise(width, height, depth, x_offset, y_offset, z_offset, scale, octaves, persistence, lacunarity) {
        wasm.noisegenerator_fill_3d_noise(this.__wbg_ptr, width, height, depth, x_offset, y_offset, z_offset, scale, octaves, persistence, lacunarity);
    }
    /**
     * @returns {number}
     */
    get_buffer_len() {
        const ret = wasm.noisegenerator_get_buffer_len(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get_buffer_ptr() {
        const ret = wasm.dustsimulation_get_particles_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} seed
     */
    constructor(seed) {
        const ret = wasm.noisegenerator_new(seed);
        this.__wbg_ptr = ret >>> 0;
        NoiseGeneratorFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
}
if (Symbol.dispose) NoiseGenerator.prototype[Symbol.dispose] = NoiseGenerator.prototype.free;

export class StarSimulation {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        StarSimulationFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_starsimulation_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get_matrices_ptr() {
        const ret = wasm.starsimulation_get_matrices_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get_positions_ptr() {
        const ret = wasm.cubesimulation_get_face_opacities_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} count
     * @param {number} bounds
     */
    constructor(count, bounds) {
        const ret = wasm.starsimulation_new(count, bounds);
        this.__wbg_ptr = ret >>> 0;
        StarSimulationFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {number} dt
     * @param {number} cam_speed
     * @param {number} rotation_boost
     */
    update(dt, cam_speed, rotation_boost) {
        wasm.starsimulation_update(this.__wbg_ptr, dt, cam_speed, rotation_boost);
    }
}
if (Symbol.dispose) StarSimulation.prototype[Symbol.dispose] = StarSimulation.prototype.free;

function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_throw_be289d5034ed271b: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg_random_912284dbf636f269: function() {
            const ret = Math.random();
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./dust_wasm_bg.js": import0,
    };
}

const CubeSimulationFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_cubesimulation_free(ptr >>> 0, 1));
const DustSimulationFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_dustsimulation_free(ptr >>> 0, 1));
const NoiseGeneratorFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_noisegenerator_free(ptr >>> 0, 1));
const StarSimulationFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_starsimulation_free(ptr >>> 0, 1));

let cachedFloat32ArrayMemory0 = null;
function getFloat32ArrayMemory0() {
    if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
        cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function passArrayF32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4, 4) >>> 0;
    getFloat32ArrayMemory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasm;
function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    wasmModule = module;
    cachedFloat32ArrayMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('dust_wasm_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
