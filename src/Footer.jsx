import React from "react";
import logo from './assets/logo.jpg'
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-gray-400 text-center text-sm text-gray-600 py-4 mt-6 shadow-inner">
       <div className="flex">
        <div className=" w-[40%]">
        <Link to="/"><img src={logo} className="rounded-full w-20 h-20 ml-6 "/></Link>
       <div className=" w-100 h-45 mt-4 ml-4">
        <p className="font-semibold text-[16px] text-black"> At TravelSite, we connect you to 
          unforgettable adventures worldwide. Contact us at support@TravelSite.com | 
          +1-800-TRAVEL. Follow us on Facebook, Instagram, Twitter for the latest deals.
           Your journey is our passion—let’s explore the world together! Book with 
           confidence, flexible cancellations, 24/7 support. Find inspiration now.</p>
       </div>
       </div>
       <div className=" ml-60 w-40  ">
        <h1 className="mr-4 ml-4 font-semibold text-xl text-black">Quick link</h1>
        <ul className="font-bold text-[18px] mt-4 text-black tracking-wide">
          <li><Link to="/Blog" className="hover:underline hover:text-pink-300 ">Blogs</Link></li>
          <li><Link to="/hotel" className="hover:underline hover:text-pink-300 ">Hotels</Link></li>
          <li><Link to="/about" className="hover:underline hover:text-pink-300 ">About</Link></li>
        </ul>
       </div>
       <div className=" ml-60">
        <div className=" "><h1 className="font-bold text-black text-3xl">SUSCRIBE TO NEWLETTER</h1></div>
        <input placeholder="ENTER EMAIL" className="bg-white mt-10 ml-44"/>
          <div className="flex justify-end m-4">
            <FaFacebook size={50}  className="mr-3 ml-4 cursor-pointer" />
            <RiInstagramLine size={50} className="mr-3 ml-4  cursor-pointer"/>
            <FaYoutube size={50} className="mr-3 ml-4 cursor-pointer"/>
          </div>

       </div>

       </div>
      <p>© {new Date().getFullYear()} TravelSite. All rights reserved.</p>
    </footer>
  );
};

export default Footer;