import React from 'react';

const CardGrid = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Mengapa BrandKu?
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="font-bold text-lg mb-2">⚡ Mudah Digunakan</h3>
          <p className="text-gray-600">Tidak perlu keahlian teknis. Setup dalam 5 menit.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="font-bold text-lg mb-2">🤖 Serba Otomatis</h3>
          <p className="text-gray-600">Otomatiskan tugas berulang dan fokus pada hal penting.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="font-bold text-lg mb-2">📊 Laporan Real-time</h3>
          <p className="text-gray-600">Pantau performa bisnis kapan saja dan di mana saja.</p>
        </div>
      </div>
    </section>
  );
};

export default CardGrid;