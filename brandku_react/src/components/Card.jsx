import React from 'react';

const Card = ({ icon, title, subtitle }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2 text-slate-900">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
};

export default Card;