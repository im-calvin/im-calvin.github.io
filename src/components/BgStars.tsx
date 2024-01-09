import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function BgStars() {
  const STAR_DENSITY = 0.2;
  const CAMERA_FOV = 60;
  const CAMERA_NEAR_LIMIT = 1;
  const CAMERA_FAR_LIMIT = 1000;
  const STAR_Z_MIN = 500;
  const STAR_Z_MAX = 1000;
  const LIGHT_STAR_COLOR = 0xbdace3; // using moona-purple
  const DARK_STAR_COLOR = 0xffffff;

  const camera = new THREE.PerspectiveCamera(
    CAMERA_FOV,
    window.innerWidth / window.innerHeight,
    CAMERA_NEAR_LIMIT,
    CAMERA_FAR_LIMIT
  );
  // camera.rotateX(Math.PI / 2);
  camera.lookAt(0, 0, CAMERA_FAR_LIMIT);
  const getStarCount = () => {
    return Math.floor(
      window.innerWidth * window.innerHeight * STAR_DENSITY * 1e-3
    );
  };

  const threeContainer = useRef<null | HTMLDivElement>(null);
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  const setElement = () => {
    if (!threeContainer.current) return;
    console.log("Setting element");
    threeContainer.current.replaceChildren(renderer.domElement);
  };
  const setCamera = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  const starColor = useRef<THREE.Color>(new THREE.Color(LIGHT_STAR_COLOR));
  const geometry = new THREE.BufferGeometry();
  const setSpheres = () => {
    // const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    scene.clear();
    geometry.deleteAttribute("position");
    geometry.deleteAttribute("color");
    const starCount = getStarCount();
    console.log("Star count", starCount);
    const vertices: THREE.Vector3[] = [];
    // const positions: number[] = [];
    for (let i = 0; i < starCount; i++) {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * window.innerWidth,
        (Math.random() - 0.5) * window.innerWidth,
        Math.random() * (STAR_Z_MAX - STAR_Z_MIN) + STAR_Z_MIN
      );
      vertices.push(position);
      // positions.push(position.x, position.y, position.z);
    }
    geometry.setFromPoints(vertices);
    applyStarColor();
    // geometry.value = geometry.value.setAttribute(
    //   "position",
    //   new THREE.BufferAttribute(new Float32Array(positions), 3)
    // );
    const points = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        size: 4,
        transparent: true,
        vertexColors: true,
        opacity: 0.7,
      })
    );
    scene.add(points);
  };
  const applyStarColor = () => {
    const numVertices = geometry.attributes.position.count;

    // Create a Float32Array to store the color values for each vertex
    const colors = new Float32Array(numVertices * 3);

    // Set the color values for each vertex
    for (let i = 0; i < numVertices; i++) {
      colors[i * 3] = starColor.current.r; // red component
      colors[i * 3 + 1] = starColor.current.g; // green component
      colors[i * 3 + 2] = starColor.current.b; // blue component
    }

    // Set the color attribute of the geometry
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  };

  const animateStars = () => {
    const Y_THRESHOLD = window.innerHeight / 2;
    const vertices = geometry.attributes.position.array;
    for (let i = 1; i < vertices.length; i += 3) {
      if (vertices[i] > Y_THRESHOLD) {
        vertices[i] = -Y_THRESHOLD;
        continue;
      }
      vertices[i] = vertices[i] + 0.2;
    }
    geometry.attributes.position.needsUpdate = true;
  };
  const render = () => {
    animateStars();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };

  const onBodyAttributeChange = (e: MutationRecord[]) => {
    // if (!e.find((f) => f.target === document.documentElement)) return;
    if (!geometry.attributes.position) return;
    const isDark = document.documentElement.classList.contains("dark");
    starColor.current = isDark
      ? new THREE.Color(DARK_STAR_COLOR)
      : new THREE.Color(LIGHT_STAR_COLOR);
    applyStarColor();
  };

  useEffect(() => {
    setElement();
    setCamera();
    setSpheres();

    const resizeObserver = new ResizeObserver(() => {
      setCamera();
      setSpheres();
    });
    resizeObserver.observe(document.documentElement);

    const darkModeObserver = new MutationObserver((e) => {
      onBodyAttributeChange(e);
    });
    darkModeObserver.observe(document.documentElement, {
      attributes: true,
    });

    let isRenderStarted = false;
    if (!isRenderStarted) {
      isRenderStarted = true;
      render();
    }

    return () => {
      resizeObserver.disconnect();
      darkModeObserver.disconnect();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0">
      <div className="fixed inset-0" />
      <div ref={threeContainer} />
    </div>
  );
}
