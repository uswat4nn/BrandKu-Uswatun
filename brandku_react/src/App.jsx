import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';
import {featuresData} from './data/feature'; 

const App = () => {
  
  const [feature] = useState(featuresData);

  return (
    <div className="bg-white min-h-screen">
      {/* Memanggil Navbar */}
      <Header />

      {/* Memanggil Hero Section */}
      <Hero />

      {/* Parsing data state ke komponen CardGrid lewat props bernama 'feature' */}
      <CardGrid feature={feature} />

      {/* Footer Utama */}
      <footer className="bg-gray-900 text-gray-400 text-center py-8 px-8 text-sm">
      <p>&copy; 2026 BrandKu. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;