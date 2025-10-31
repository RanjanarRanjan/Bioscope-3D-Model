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

📦 **Tech Stack**  
**Frontend:** React, Tailwind CSS, Vite, Three.js  
**Backend:** Express.js, MongoDB, Multer (for file upload)  
**3D Rendering:** @react-three/fiber, @react-three/drei  

---

⚙️ **Prerequisites**

Make sure you have these installed:

- Node.js (v18+)  
- npm  
- MongoDB (running locally or Atlas)  
- Git  

---

## 🚀 How to Run – Step by Step

1. **Clone the Repository**

   ```bash
   git clone git@github.com:RanjanarRanjan/Bioscope-3D-Models.git
   cd BioScope3D

2. Setup the Backend

    ```bash
    cd backend
    npm install

  ✏️ Create a .env file inside backend/:

    MONGODB_URI=mongodb://localhost:27017/bioscope3d
    PORT=5000


3. Setup the Frontend

    ```bash
    cd ../frontend
    npm install
    npm run dev



📽️ Demo Video

<a href="https://www.youtube.com/watch?v=iJrSgH-I9l8" target="_blank" rel="noopener noreferrer"> <img src="https://img.youtube.com/vi/iJrSgH-I9l8/0.jpg" width="400" alt="Watch the video on YouTube"> </a>



🌐 Live Demo

👉 <a href="https://bioscope-3-d-models.vercel.app/" target="_blank" rel="noopener noreferrer">
Click here to open the Live Demo
</a>

Enjoy exploring human anatomy in 3D with BioScope 3D 🧠🚀
