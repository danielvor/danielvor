import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li><a href="#home" className="text-white hover:text-gray-400">Home</a></li>
        <li><a href="#about" className="text-white hover:text-gray-400">About</a></li>
        <li><a href="#projects" className="text-white hover:text-gray-400">Projects</a></li>
        <li><a href="#contacts" className="text-white hover:text-gray-400">Contacts</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;