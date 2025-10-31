import React, { useState } from "react";
import Headers from './Header'

const UploadModel = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [modelFile, setModelFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setModelFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !modelFile) {
      setMessage("Title and model file are required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("model", modelFile);

    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(" Model uploaded successfully!");
        setTitle("");
        setDescription("");
        setModelFile(null);
      } else {
        setMessage(" Upload failed: " + data.error);
      }
    } catch (err) {
      setMessage(" Network error: " + err.message);
    }
  };

  return (
    <div>
        <Headers />
    
    <div className="max-w-xl mx-auto mt-12 bg-white shadow p-6 rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">
        Upload 3D Model (.glb)
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Description</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Model File (.glb)</label>
          <input
            type="file"
            accept=".glb"
            onChange={handleFileChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </form>

      {message && <p className="mt-4 text-center text-red-600">{message}</p>}
    </div>
    </div>
  );
};

export default UploadModel;
