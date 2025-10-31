import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Bounds } from "@react-three/drei";
import Header from "./Header";
const GLBViewer = ({ url }) => {
  const { scene } = useGLTF(url);
  return (
    <Bounds fit clip margin={1.2}>
      <Center>
        <primitive object={scene} />
      </Center>
    </Bounds>
  );
};

const ModelDetails = () => {
  const { id } = useParams();
  const [model, setModel] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/models`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((m) => m._id === id);
        if (!found) setError("Model not found.");
        else setModel(found);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load model.");
      });
  }, [id]);

  if (error) return <div className="text-red-600 text-center mt-10">{error}</div>;
  if (!model) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div>
        <Header />
    
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">{model.title}</h1>
      <p className="text-center text-gray-600 mb-6">{model.description}</p>
      <div className="h-[400px] bg-black rounded-lg overflow-hidden">
        <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <GLBViewer url={`/upload/${model.fileData}`} />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
    </div>
  );
};

export default ModelDetails;
