import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-400 text-transparent bg-clip-text">
          BrandKu
        </h1>

        <nav className="space-x-6">
          <a href="#" class="text-gray-700 hover:text-violet-500">Beranda ⌵</a>
          <a href="#" class="text-gray-700 hover:text-violet-500">Fitur ⌵</a>
          <a href="#" class="text-gray-700 hover:text-violet-500">Harga ⌵</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;