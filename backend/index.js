import express, { json } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { userauth } from './Routes/userauth.js';
import cors from 'cors';
import path from 'path'; 
import { fileURLToPath } from 'url'; // Import for ES modules

dotenv.config({ silent: true });

const app = express();

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
    origin:'*',
    credentials:true
}));

app.use(json());

app.use("/",userauth);

// Serve static files from the 'upload' directory

app.use('/upload', express.static(path.join(__dirname, 'upload'))); // Use path.join here

app.get("/",function(req,res) {
    res.send("hello Everyone");
});

mongoose.connect('mongodb://localhost:27017/Bioscope3d').then(()=>{
    console.log("MongoDB connected successfully to the Bioscope3D");
})
.catch((error)=>{
    console.error("MongoDB connction failed",error);
});

app.listen(process.env.PORT,function(){
    console.log(`Server is listening at ${process.env.PORT}`);
});








