import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';


const App = () => {
  return (
    <div className="bg-white-100 min-h-screen">
      {/* Memanggil Navbar */}
      <Header />

      {/* Memanggil Hero Section dengan Logika State */}
      <Hero />

      {/* Memanggil Section Fitur */}
      <CardGrid />

      {/* Footer Utama */}
      <footer className="bg-slate-900 text-white text-center py-4">
        © {new Date().getFullYear()} BrandKu. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;