import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
 function NavBar() {
  return (
     <header className="bg-blue-600">
   <div className="container mx-auto flex justify-between">
   <nav className="flex">
   <NavLink to="/" exact 
   activeClassName="text-white"
   className="inline-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-yellow-300 text-4xl font-bold .sans-serif tracking-widest" >
    Home
   </NavLink>
    <NavLink to="/post"
    activeClassName="text-red-100 bg-blue-700"
    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-yellow-300"
    >
     Blog post
   </NavLink>
     <NavLink to="/project"
     activeClassName="text-red-100 bg-blue-700"
     className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-yellow-300"
     >
    Projects
   </NavLink>
     <NavLink to="/about"
     activeClassName="text-red-100 bg-blue-700"
     className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-yellow-300"
     >
    About Me!
   </NavLink>
   </nav>
   <div className="inline-flex py-3 my-6">
   <SocialIcon url="https://www.facebook.com/GreenArrowSpectre/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
   <SocialIcon url="https://www.instagram.com/necka96/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
   <SocialIcon url="https://www.youtube.com/channel/UCMhokMd1CaR7kLzGrsgTYxQ" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
   </div>
   </div>
   </header>
  )
 }
 
 export default NavBar