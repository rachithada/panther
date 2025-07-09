import React, { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-amber-500 px-4 sm:px-6 py-4 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <a href="/" className="text-xl sm:text-2xl font-bold tracking-wider hover:text-[#FA812F] transition-colors duration-300">
        PantherFit
      </a>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-medium text-sm">
        <li className='hover:scale-[1.2] hover:text-[#FFB22C] transition-all duration-300'>
          <a href="/">Home</a>
        </li>
        <li className='hover:scale-[1.2] hover:text-[#FFB22C] transition-all duration-300'>
          <a href="/Shop">Shop</a>
        </li>
        <li className='hover:scale-[1.2] hover:text-[#FFB22C] transition-all duration-300'>
          <a href="/About">About</a>
        </li>
        <li className='hover:scale-[1.2] hover:text-[#FFB22C] transition-all duration-300'>
          <a href="/Login">Login</a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center items-center"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-6 bg-amber-500 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block h-0.5 w-6 bg-amber-500 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block h-0.5 w-6 bg-amber-500 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <div className={`
    md:hidden absolute top-full left-70 w-full bg-black rounded-b-lg border border-red-500/20 overflow-hidden transform origin-top transition-all duration-300
    ${isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}
  `}>
        <ul className="flex flex-col py-4">
          <li className='hover:bg-amber-500/10 transition-all duration-300'>
            <a 
              href="/" 
              className="block px-6 py-3 text-amber-500 hover:text-[#FFB22C] hover:translate-x-2 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li className='hover:bg-amber-500/10 transition-all duration-300'>
            <a 
              href="/Shop" 
              className="block px-6 py-3 text-amber-500 hover:text-[#FFB22C] hover:translate-x-2 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
          </li>
          <li className='hover:bg-amber-500/10 transition-all duration-300'>
            <a 
              href="/About" 
              className="block px-6 py-3 text-amber-500 hover:text-[#FFB22C] hover:translate-x-2 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li className='hover:bg-amber-500/10 transition-all duration-300'>
            <a 
              href="/Login" 
              className="block px-6 py-3 text-amber-500 hover:text-[#FFB22C] hover:translate-x-2 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}