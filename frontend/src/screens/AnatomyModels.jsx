import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Bounds } from "@react-three/drei";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Headers from "./Header";

const GLBViewer = ({ url }) => {
  if (!url) {
    console.warn("GLBViewer received an undefined URL.");
    return null;
  }

  const { scene } = useGLTF(url);
  return (
    <Bounds fit clip margin={1.2}>
      <Center>
        <primitive object={scene} />
      </Center>
    </Bounds>
  );
};

const AnatomyModels = () => {
  const [models, setModels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/models")
      .then((res) => setModels(res.data))
      .catch((err) => console.error("Failed to fetch models:", err));
  }, []);

  return (
    <div>
      <Headers />
      <div className="bg-white px-6 py-12 md:px-12 lg:px-24">
        <section className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-1">AnatomyScope</h2>
          <h1 className="text-4xl font-bold text-gray-800">Human Anatomy Explorer</h1>
        </section>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2">
          {models.map((model) => (
            <div
              key={model._id}
              onClick={() => navigate(`/model/${model._id}`)}
              className="cursor-pointer border bg-white border-gray-200 rounded-2xl shadow-md p-4 hover:shadow-lg transition"
            >
              <div className="w-full h-[300px] bg-black rounded-lg overflow-hidden">
                <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
                  <ambientLight intensity={1} />
                  <directionalLight position={[5, 5, 5]} />
                  <GLBViewer url={`/upload/${model.fileData}`} />
                  <OrbitControls />
                </Canvas>
              </div>
              <p className="mt-4 text-center font-medium text-gray-700">
                {model.name || model.title || "Unnamed Model"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnatomyModels;

