# Bioscope-3D

# 🧠 BioScope 3D – Anatomy Model Viewer Dashboard

BioScope 3D is a full-stack MERN application that allows users to upload, manage, and view 3D `.glb` anatomy models in a clean dashboard interface.

---

## 🚀 Features

- Upload and store `.glb` 3D anatomy models
- View all uploaded models in a responsive grid
- Click a model to preview it in an interactive 3D viewer
- Built using:
  - MongoDB, Express.js, Node.js
  - React.js + Vite
  - Three.js + @react-three/fiber + @react-three/drei

---

📦 Tech Stack
Frontend: React, Tailwind CSS, Vite, Three.js

Backend: Express.js, MongoDB, Multer (for file upload)

3D Rendering: @react-three/fiber, @react-three/drei

---
⚙️ Prerequisites
Make sure you have these installed:

Node.js (v18+)
npm
MongoDB (running locally or Atlas)
Git

---

🚀 How to Run – Step by Step

1. Clone the Repository 
   
     git clone git@github.com:RanjanarRanjan/Bioscope-3D-Models.git
   
     cd BioScope3D

2. Setup the Backend 

     cd backend
   
     npm install

  ✏️ Create a .env file in backend/:env

      MONGODB_URI=mongodb://localhost:27017/bioscope3d
      PORT=5000
    
3. Setup the Frontend

    cd ../frontend
   
    npm install
  
  ▶️ Start the Frontend

    npm run dev
    
---

### 📽️ Demo Video  
[![Watch the video](https://img.youtube.com/vi/iJrSgH-I9l8/0.jpg)](https://www.youtube.com/watch?v=iJrSgH-I9l8)

---



Live Demo : https://bioscope-3-d-models.vercel.app/



Enjoy exploring human anatomy in 3D with BioScope! 🧠🚀
