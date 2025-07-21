import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // icons for toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-400 border-b border-gray-300">
      {/* Top bar */}
      <div className="h-16 px-6 flex items-center justify-between md:justify-evenly">
        {/* Logo or app name */}
        <div className="text-lg font-semibold">NoteFlow</div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-4">
          <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
          <NavLink to="/notes" className="hover:text-blue-600">Notes</NavLink>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile links dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-2">
          <NavLink to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/notes" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Notes</NavLink>
        </div>
      )}
    </div>
  )
}

export default Navbar