import React from 'react'
import { NavLink } from 'react-router'

const Navigation = () => {
  return (
    <div className="flex nav w-full h-[100px] fixed bg-[#1a1a1a] bottom-0">
        <NavLink 
            to="/" 
            className={({isActive}) => `flex flex-1 h-full text-white text-center justify-center items-center font-semibold ${isActive ? 'bg-[#ed143d]' : ''}`}
        >
            Home
        </NavLink>
        <NavLink 
            to="/projects" 
            className={({isActive}) => `flex flex-1 h-full text-white text-center justify-center items-center font-semibold ${isActive ? 'bg-[#ed143d]' : ''}`}
        >
            Projects
        </NavLink>
    </div>
  )
}

export default Navigation