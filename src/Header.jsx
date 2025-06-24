import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa"; 
import logo from './assets/logo.jpg'

const Header = () => {
   <Link to="/detail" className="hover:underline"></Link>
    return (
      <header className="bg-blue-400 text-white p-4 shadow w-full">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold ">
            <Link to="/"><img src={logo} className="rounded-full w-10 h-10 ml-6 "/></Link>
          </h1>
          <nav className="space-x-6 flex items-center">
            <Link to="/Blog" className="hover:underline">Blogs</Link>
            <Link to="/hotel" className="hover:underline">Hotels</Link>
            
            {/* Wishlist link with heart icon */}
            <Link to="/wishlist" className="flex items-center gap-1 hover:underline ">
              <FaHeart className="text-red-400" />
              Wishlist
            </Link>
            <Link to="/about" className="hover:underline mr-2">About</Link>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;