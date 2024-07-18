import React from 'react';
import { Link } from 'react-router-dom';

const TopBar: React.FC = () => {
  return (
    <div className="sticky top-0 w-full h-[90px] px-[120px] bg-blue-500 flex items-center justify-between shadow-md">
      <div className="text-white text-2xl font-bold">My Portfolio</div>
      <nav className="flex space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
      </nav>
    </div>
  );
};

export default TopBar;
