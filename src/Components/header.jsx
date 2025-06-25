import React from 'react';
import { Link } from 'react-router-dom';
import nicLogo from '../assets/nic.png';

const Header = () => (
  <header className="bg-blue-950  text-white py-2 px-4 shadow-md border-b-2 border-blue-300">
    <nav className="container mx-auto flex  justify-between items-center gap-6 font-semibold text-xl">
      {/* NIC Logo on the Left */}
      <img src={nicLogo} alt="NIC Logo" className="h-12 w-[100px] object-contain  mr-6" />

      {/* Navigation Links */}
      <div className="flex gap-4">
        <Link to="/" className="hover:text-yellow-300 p-4 border-blue-200">Home</Link>
        <Link to="/about-us" className="hover:text-yellow-300 p-4 border-blue-100">About Us</Link>
        <Link to="/contact-us" className="hover:text-yellow-300 p-4 border-blue-100">Contact Us</Link>
        <Link to="/faqs" className="hover:text-yellow-300 p-4 border-blue-100">FAQs</Link>
        <Link to="/login" className="hover:text-yellow-300 p-4 border-blue-100">Login</Link>
        <Link to="/register" className="hover:text-yellow-300 p-4 border-blue-100">Register</Link>
        <Link to="/terms" className="hover:text-yellow-300 p-4 border-blue-100">Terms</Link>
      </div>
    </nav>
  </header>
);

export default Header;
