import React from 'react';
import Card from './Card';

const CardGrid = ({ feature }) => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">
        Mengapa BrandKu?
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        
        {/* Menggunakan 'item' agar tidak bertabrakan dengan nama parameter 'feature' */}
        {feature.map((item) => (
          <Card 
            key={item.id}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}

      </div>
    </section>
  );
};

export default CardGrid;