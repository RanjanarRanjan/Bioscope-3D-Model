import React from "react";
import { logo } from '../assets/images.jsx'         
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header bg-gray-900 shadow-md py-4 px-6 flex items-center justify-between">
      
      <div className="logo flex items-center gap-2">
        <img src={logo} alt="Bioscope 3D Logo" className="h-10 w-10" />
        <h1 className="text-2xl font-bold text-blue-700">Bioscope 3D</h1>
      </div>

      
      <nav className="flex gap-6 text-white font-medium">
    
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/models" className="hover:text-blue-600">3D Model View</Link>
        <Link to="/upload" className="hover:text-blue-600">Upload</Link>
      </nav>

      
    </div>
  );
};

export default Header;
