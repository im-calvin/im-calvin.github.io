import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import React, { useRef, useState, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import three from './js/three';
import { Canvas, useFrame } from 'react-three-fiber';

import Header from './js/header';
import Home from './js/home';
import Projects from './js/projects';

function App() {
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    // setLoading(true);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    ref.current.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  });
  return (
    <>
      <Header />
      <div classNames='main-body'>
      <AnimatePresence mode='wait'>
        <div ref={ref} />
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>

      </AnimatePresence>
      </div>
    </>
  )
}

export default App;