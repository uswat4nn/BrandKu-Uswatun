import {useState, useEffect} from 'react';

const Card = ({ id, icon, title, subtitle }) => {

  const [jumlahSuka, setJumlahSuka] = useState(()=> {
    const saved = localStorage.getItem(`suka-${id}`)
    return saved ? parseInt(saved) : 0;
  });
   useEffect(() => {
    localStorage.setItem(`suka-${id}`, jumlahSuka)
   }, [jumlahSuka, id]);

  return (
    <div className="bg-white p-6 rounded-xl shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2 text-slate-900">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>

       <button
        class="mt-4 px-4 py-2 bg-pink-100 text-pink-500 rounded-lg hover:bg-pink-200"
        onClick={ () => setJumlahSuka(abc => abc+1) } 
        >
          ❤️ Suka ({jumlahSuka})
      </button>
    </div>
  ); 
};

export default Card;