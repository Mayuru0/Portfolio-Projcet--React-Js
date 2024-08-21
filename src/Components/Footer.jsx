import React from 'react'
import Social from '../Pages/Social'
import { FaSquareFacebook, FaSquareInstagram ,FaSquareGithub  } from "react-icons/fa6";
import { FaLinkedin, FaYoutube, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  const socialMedia = [
    { icon: <FaSquareFacebook className='text-white w-5 h-5 ' />, path: "https://www.facebook.com/profile.php?id=100080722121368" },
    { icon: <FaSquareInstagram className='text-white w-5 h-5' />, path: "https://www.instagram.com/_mayuru_madhuranga_/" },
    { icon: <FaLinkedin  className='text-white w-5 h-5 '/>, path: "https://www.linkedin.com/in/mayuru-madhuranga-7bbb73312/" },
    { icon: <FaYoutube  className='text-white w-5 h-5 '/>, path: "https://www.youtube.com/@0_madhuranga_0" },
    { icon: <FaTwitterSquare className='text-white w-5 h-5' />, path: "https://x.com/00_Marsh_00" },
    { icon: <FaSquareGithub  className='text-white w-5 h-5 ' />, path: "https://github.com/Mayuru0" },
  ];
  return (
    <div className='max-w-[1200px] sm:h-[150px] p-12 flex justify-between mx-auto'>
       <span className='primary'> <a href='/home'>MAYURU MADHURANGA</a></span>

       <div className='flex gap-6 mt-10' >
      {socialMedia.map((social, index) => (
        
        <a key={index} href={social.path} target="_blank" rel="noopener noreferrer" >
          {social.icon}
        </a>
      ))}
    </div>
       <p className='text-gray-600'>maurumaduranga5@gmail.com </p>

    </div>
  )
}

export default Footer