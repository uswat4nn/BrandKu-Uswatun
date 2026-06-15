import React, { useState } from 'react';

const Hero = () => {
  // State untuk menghitung jumlah klik
  const [counter, setCounter] = useState(0);

  const handleStartClick = () => {
    // Menaikkan nilai counter setiap kali diklik
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <section className="bg-gradient-to-br from-violet-100 via-fuchsia-50 to-white py-16 md:py-20 text-center px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight max-w-3xl">
          Solusi Terbaik untuk Bisnismu
        </h1>

        <p className="text-base md:text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
          Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil.
        </p>

        {/* Tombol akan disembunyikan (tidak di-render) jika counter sudah mencapai 2 */}
        {counter < 2 && (
          <button
            onClick={handleStartClick}
            className="bg-violet-600 text-white font-semibold px-10 py-4 rounded-full hover:bg-violet-700 shadow-lg shadow-violet-600/20 hover:shadow-xl hover:shadow-violet-600/30 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Mulai Gratis
          </button>
        )}

        {/* Logika teks info berdasarkan status counter */}
        {counter === 1 && (
          <p className="text-sm text-slate-500 mt-4">Clicked</p>
        )}
        {counter >= 2 && (
          <p className="text-sm text-slate-500 mt-4">Off</p>
        )}
      </div>
    </section>
  );
};

export default Hero;