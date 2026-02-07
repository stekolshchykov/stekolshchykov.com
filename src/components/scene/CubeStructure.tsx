import { Group, BoxGeometry, EdgesGeometry, LineBasicMaterial, LineSegments } from 'three';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { createRoot } from 'react-dom/client';
import { createElement, Suspense } from 'react';
import type { JSX } from 'react';
import type { Locale } from '../../content/stekolschikovContent';
import { AboutFace } from '../faces/AboutFace';
import { SkillsFace } from '../faces/SkillsFace';
import { ProjectsFace } from '../faces/ProjectsFace';
import { ExperienceFace } from '../faces/ExperienceFace';
import { ContactFace } from '../faces/ContactFace';
import { EducationFace } from '../faces/EducationFace';

export type CubeFaceComponent = (props: { locale: Locale }) => JSX.Element;

export interface CubeStructureConfig {
    locale: Locale;
    faceSize: number;
    facePadding: number;
    faceAlpha: number;
    faceDepth: number;
    cubeSize: number;
    isPhone: boolean;
    lowPowerMode: boolean;
}

export interface FaceActor {
    object: CSS3DObject;
    basePosition: [number, number, number];
    baseRotation: [number, number, number];
    normal: [number, number, number];
    phase: number;
}

export function createCubeStructure(config: CubeStructureConfig) {
    const {
        locale,
        faceSize,
        facePadding,
        faceAlpha,
        faceDepth,
        cubeSize,
        isPhone,
        lowPowerMode,
    } = config;

    const cubeGroup = new Group();
    const faceActors: FaceActor[] = [];
    const roots: ReturnType<typeof createRoot>[] = [];

    // Wireframe
    const cubeGeometry = new BoxGeometry(cubeSize, cubeSize, cubeSize);
    const edges = new EdgesGeometry(cubeGeometry);
    const lineMaterial = new LineBasicMaterial({
        color: 0x00ff41,
        transparent: true,
        opacity: 0,
    });
    const wireframe = new LineSegments(edges, lineMaterial);
    wireframe.visible = false; // Hide wireframe completely
    // Note: wireframe is returned separately so it can be added to WebGL scene if needed,
    // but typically logic puts it in the same group or parallel.
    // In original code, wireframe was added to webglScene, while cubeGroup (faces) to scene (CSS3D).

    const faces = [
        { component: AboutFace, color: '#8b5cf6', position: [0, 0, faceDepth], rotation: [0, 0, 0] },
        { component: SkillsFace, color: '#3b82f6', position: [0, 0, -faceDepth], rotation: [0, Math.PI, 0] },
        { component: ProjectsFace, color: '#10b981', position: [faceDepth, 0, 0], rotation: [0, Math.PI / 2, 0] },
        { component: ExperienceFace, color: '#ef4444', position: [-faceDepth, 0, 0], rotation: [0, -Math.PI / 2, 0] },
        { component: ContactFace, color: '#f97316', position: [0, faceDepth, 0], rotation: [-Math.PI / 2, 0, 0] },
        { component: EducationFace, color: '#06b6d4', position: [0, -faceDepth, 0], rotation: [Math.PI / 2, 0, 0] },
    ] as const;

    faces.forEach((face, index) => {
        const element = document.createElement('div');
        element.className = 'cube-face-shell';
        element.style.width = `${faceSize}px`;
        element.style.height = `${faceSize}px`;
        element.style.padding = `${facePadding}px`;
        // Removed inline styles to allow CSS classes in app.css to control the Glassmorphism look
        // background, border, boxShadow, backdropFilter are now handled by .cube-face-shell
        // background, border, boxShadow, backdropFilter are now handled by .cube-face-shell
        element.style.borderRadius = '0px';
        element.style.border = 'none';
        element.style.outline = 'none';
        element.style.overflow = 'hidden';
        element.style.contain = 'layout style paint';
        element.style.willChange = 'transform';

        const scrollHost = document.createElement('div');
        scrollHost.className = 'cube-face-scroll';
        element.appendChild(scrollHost);

        // Capture wheel events to allow internal terminal scrolling
        element.addEventListener('wheel', (e) => {
            e.stopPropagation();
        }, { passive: false });

        const root = createRoot(scrollHost);
        root.render(
            createElement(
                Suspense,
                { fallback: createElement('div', { style: { color: '#cbd5e1', padding: '1rem' } }, 'Loading...') },
                createElement(face.component, { locale })
            )
        );
        roots.push(root);

        const object = new CSS3DObject(element);
        object.position.set(face.position[0], face.position[1], face.position[2]);
        object.rotation.set(face.rotation[0], face.rotation[1], face.rotation[2]);

        cubeGroup.add(object);
        const length = Math.hypot(face.position[0], face.position[1], face.position[2]) || 1;
        faceActors.push({
            object,
            basePosition: [face.position[0], face.position[1], face.position[2]],
            baseRotation: [face.rotation[0], face.rotation[1], face.rotation[2]],
            normal: [face.position[0] / length, face.position[1] / length, face.position[2] / length],
            phase: index * 1.37,
        });
    });

    const dispose = () => {
        cubeGeometry.dispose();
        edges.dispose();
        lineMaterial.dispose();
        roots.forEach((root) => root.unmount());
    };

    const updateLocale = (newLocale: Locale) => {
        faces.forEach((face, index) => {
            roots[index].render(
                createElement(
                    Suspense,
                    { fallback: createElement('div', { style: { color: '#cbd5e1', padding: '1rem' } }, 'Loading...') },
                    createElement(face.component, { locale: newLocale })
                )
            );
        });
    };

    return { cubeGroup, wireframe, faceActors, dispose, updateLocale };
}
