/**
 * ULTRA PREMIUM VIBES — Alex Rivers Aesthetic
 * Distorted Grids, Neon Waves, Floating Glass
 */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const compactDevice = window.matchMedia('(max-width: 52rem), (pointer: coarse)').matches;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 100;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, compactDevice ? 1.5 : 2));
document.getElementById('nebula-container').appendChild(renderer.domElement);

// --- 1. Distorted 3D Grid Lines ---
const gridGroup = new THREE.Group();
const gridSize = 400;
const step = compactDevice ? 40 : 20;

const lineMat = new THREE.LineBasicMaterial({
    color: 0x60a5fa,
    transparent: true,
    opacity: 0.15,
    blending: THREE.AdditiveBlending
});

for (let i = -gridSize; i <= gridSize; i += step) {
    // Horizontal Lines
    const pointsH = [];
    for (let j = -gridSize; j <= gridSize; j += compactDevice ? 20 : 10) {
        pointsH.push(new THREE.Vector3(j, i, 0));
    }
    const geoH = new THREE.BufferGeometry().setFromPoints(pointsH);
    const lineH = new THREE.Line(geoH, lineMat);
    gridGroup.add(lineH);

    // Vertical Lines
    const pointsV = [];
    for (let j = -gridSize; j <= gridSize; j += compactDevice ? 20 : 10) {
        pointsV.push(new THREE.Vector3(i, j, 0));
    }
    const geoV = new THREE.BufferGeometry().setFromPoints(pointsV);
    const lineV = new THREE.Line(geoV, lineMat);
    gridGroup.add(lineV);
}

gridGroup.rotation.x = -Math.PI / 3;
gridGroup.position.z = -120;
scene.add(gridGroup);

// --- 2. Floating Glass Elements with Internal Glow ---
const icons = [];
function createAlexIcon(color, x, y, rotSpeed) {
    const group = new THREE.Group();

    // Glass Shell
    const shellGeo = new THREE.BoxGeometry(16, 16, 3);
    const shellMat = new THREE.MeshPhysicalMaterial({
        roughness: 0.1,
        transmission: 1,
        ior: 1.5,
        transparent: true,
        opacity: 0.2,
        color: 0xffffff
    });
    const shell = new THREE.Mesh(shellGeo, shellMat);
    group.add(shell);

    // Glowing Core
    const coreGeo = new THREE.BoxGeometry(10, 10, 0.5);
    const coreMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.z = 0.5;
    group.add(core);

    // Subtle Outer Glow
    const glowGeo = new THREE.PlaneGeometry(25, 25);
    const glowMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.1,
        blending: THREE.AdditiveBlending,
        map: generateGlowTexture()
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.z = -2;
    group.add(glow);

    group.position.set(x, y, 0);
    group.userData = { baseY: y, rotX: (Math.random() - 0.5) * 0.01, rotY: (Math.random() - 0.5) * 0.01 };

    scene.add(group);
    icons.push(group);
}

function generateGlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
}

/* 
createAlexIcon(0xc084fc, -85, 45);  // Purple
createAlexIcon(0x60a5fa, 90, 65);   // Blue
createAlexIcon(0xf472b6, -110, -40); // Pink
createAlexIcon(0x22d3ee, 120, -60);  // Cyan
*/

// --- 3. Neon Flowing Curves ---
function createNeonCurve(color, pathPoints) {
    const curve = new THREE.CatmullRomCurve3(pathPoints);
    const geo = new THREE.TubeGeometry(curve, 100, 0.4, 8, false);
    const mat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });
    const tube = new THREE.Mesh(geo, mat);
    scene.add(tube);
    return tube;
}

const nCurve1 = createNeonCurve(0x22d3ee, [
    new THREE.Vector3(-300, -50, -100),
    new THREE.Vector3(-100, 20, -50),
    new THREE.Vector3(100, -30, -80),
    new THREE.Vector3(300, 40, -100)
]);

// Particles
const pCount = compactDevice ? 80 : 150;
const pGeo = new THREE.BufferGeometry();
const pPos = new Float32Array(pCount * 3);
for (let i = 0; i < pCount; i++) {
    pPos[i * 3] = (Math.random() - 0.5) * 500;
    pPos[i * 3 + 1] = (Math.random() - 0.5) * 500;
    pPos[i * 3 + 2] = (Math.random() - 0.5) * 300;
}
pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
const pMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, transparent: true, opacity: 0.3 });
scene.add(new THREE.Points(pGeo, pMat));

// Lights
const pl1 = new THREE.PointLight(0xc084fc, 1, 300); pl1.position.set(-100, 100, 50); scene.add(pl1);
const pl2 = new THREE.PointLight(0x60a5fa, 1, 300); pl2.position.set(100, -100, 50); scene.add(pl2);
scene.add(new THREE.AmbientLight(0xffffff, 0.4));

let mx = 0, my = 0;
if (finePointer.matches && !prefersReducedMotion.matches) {
    document.addEventListener('mousemove', e => {
        mx = (e.clientX / window.innerWidth - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
}

function animate(t) {
    if (prefersReducedMotion.matches) {
        renderer.render(scene, camera);
        return;
    }

    requestAnimationFrame(animate);

    // Wave/Grid distortion
    gridGroup.children.forEach(line => {
        const pos = line.geometry.attributes.position.array;
        for (let i = 0; i < pos.length; i += 3) {
            const x = pos[i]; const y = pos[i + 1];
            pos[i + 2] = Math.sin(x * 0.02 + t * 0.001) * 4 + Math.cos(y * 0.02 + t * 0.001) * 4;
        }
        line.geometry.attributes.position.needsUpdate = true;
    });

    icons.forEach(ic => {
        ic.position.y = ic.userData.baseY + Math.sin(t * 0.001) * 4;
        ic.rotation.x += ic.userData.rotX;
        ic.rotation.y += ic.userData.rotY;
        ic.position.x += (mx * 20 - ic.position.x) * 0.01;
    });

    camera.position.x += (mx * 15 - camera.position.x) * 0.05;
    camera.position.y += (-my * 15 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, -50);

    renderer.render(scene, camera);
}

function resizeRenderer() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, compactDevice ? 1.5 : 2));
}

window.addEventListener('resize', resizeRenderer, { passive: true });
window.addEventListener('orientationchange', resizeRenderer, { passive: true });

animate(0);


// --- Theme Handling ---

function updateThemeColors() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    
    if (isLight) {
        lineMat.blending = THREE.NormalBlending;
        lineMat.opacity = 0.4;
        lineMat.color.setHex(0x3b82f6);

        icons.forEach(ic => {
            const core = ic.children[1];
            const glow = ic.children[2];
            core.material.blending = THREE.NormalBlending;
            core.material.opacity = 0.8;
            glow.material.blending = THREE.NormalBlending;
            glow.material.opacity = 0.15;
            glow.material.color.setHex(0x94a3b8);
        });

        if (typeof nCurve1 !== 'undefined') {
            nCurve1.material.blending = THREE.NormalBlending;
            nCurve1.material.opacity = 0.8;
            nCurve1.material.color.setHex(0x0ea5e9);
        }

        if (typeof pMat !== 'undefined') {
            pMat.color.setHex(0x94a3b8);
            pMat.opacity = 0.6;
            pMat.blending = THREE.NormalBlending;
        }

    } else {
        lineMat.blending = THREE.AdditiveBlending;
        lineMat.opacity = 0.15;
        lineMat.color.setHex(0x60a5fa);

        icons.forEach(ic => {
            const core = ic.children[1];
            const glow = ic.children[2];
            core.material.blending = THREE.AdditiveBlending;
            core.material.opacity = 0.8;
            glow.material.blending = THREE.AdditiveBlending;
            glow.material.opacity = 0.1;
            glow.material.color.setHex(0xffffff);
        });

        if (typeof nCurve1 !== 'undefined') {
            nCurve1.material.blending = THREE.AdditiveBlending;
            nCurve1.material.opacity = 0.6;
            nCurve1.material.color.setHex(0x22d3ee);
        }

        if (typeof pMat !== 'undefined') {
            pMat.color.setHex(0xffffff);
            pMat.opacity = 0.3;
            pMat.blending = THREE.AdditiveBlending;
        }
    }
}

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
            updateThemeColors();
        }
    });
});

observer.observe(document.documentElement, { attributes: true });
updateThemeColors();
