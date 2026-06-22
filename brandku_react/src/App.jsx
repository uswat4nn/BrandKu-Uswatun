import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';
import {featuresData} from './data/feature'; 

const App = () => {
  
  const [feature] = useState(featuresData);

  return (
    <div className="bg-white min-h-screen">
      {/* navbar */}
      <Header />

      {/* hero section */}
      <Hero />
      <CardGrid feature={feature} />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-8 px-8 text-sm">
      <p>&copy; 2026 BrandKu. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;