import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Bounds, Center } from '@react-three/drei';
import { arrow, file } from '../assets/images.jsx';
import { useNavigate } from "react-router-dom";

// GLB Model Component
function Model() {
  const gltf = useGLTF('/models/male_base_muscular_anatomy.glb'); // double-check path
  return <primitive object={gltf.scene} />;
}

const Spotlight = () => {
  const navigate = useNavigate();

  
  return (
    <div className="bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Explore the Human Body in <span className="text-teal-400">3D</span>
          </h1>
          <p className="text-lg text-gray-300">
            Dive deep into anatomical structures with our interactive 3D model viewer.
            <br /> Ideal for students, educators, and medical professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
          
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md flex items-center gap-2"
            >
              Learn More
              <img src={arrow} alt="arrow" className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate("/models")}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md flex items-center gap-2"
            >
              <img src={file} alt="model" className="w-4 h-4" />
              View 3D Models
            </button>
            
          </div>
        </div>

        {/* Right Side - 3D Canvas */}
        <div className="md:w-1/2 h-[500px] w-full bg-black rounded-xl shadow-lg">
          <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} />
            <OrbitControls />
            <Bounds fit clip observe margin={1.2}>
              <Center>
                <Model />
              </Center>
            </Bounds>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;


