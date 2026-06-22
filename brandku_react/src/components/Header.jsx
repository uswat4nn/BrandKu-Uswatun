import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-400 text-transparent bg-clip-text">
          BrandKu
        </h1>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-violet-500">Beranda ⌵</a>
          <a href="#" className="text-gray-700 hover:text-violet-500">Fitur ⌵</a>
          <a href="#" className="text-gray-700 hover:text-violet-500">Harga ⌵</a>
        </nav>

        <button 
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(prev => !prev)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg py-4 px-6 flex flex-col space-y-4">
          <a href="#" className="text-gray-700 hover:text-violet-500">Beranda</a>
          <a href="#" className="text-gray-700 hover:text-violet-500">Fitur</a>
          <a href="#" className="text-gray-700 hover:text-violet-500">Harga</a>
        </div>
      )}
    </header>
  );
};

export default Header;