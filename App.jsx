import { useState } from "react";

export default function App() {
  const products = [
    { id: 1, name: "Everest Hing", price: 220, desc: "Strong aroma for dal." },
    { id: 2, name: "Kashmiri Lal Mirch", price: 180, desc: "Rich color & mild heat." },
    { id: 3, name: "Chaat Masala", price: 150, desc: "Tangy street flavor." },
    { id: 4, name: "Sambar Masala", price: 190, desc: "South Indian blend." }
  ];

  const phone = "8801XXXXXXXXX";

  const orderNow = (p) => {
    const msg = `Hello! I want to order:\n\n${p.name}\nPrice: ৳${p.price}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-2">Annapurna Masala 🌿</h1>
      <p className="text-center text-gray-600 mb-8">Simple WhatsApp Ordering Shop</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-5 rounded-xl shadow">
            <div className="text-4xl mb-2">🌶️</div>
            <h2 className="font-bold text-xl">{p.name}</h2>
            <p className="text-sm text-gray-500">{p.desc}</p>
            <p className="font-bold mt-2">৳{p.price}</p>

            <button
              onClick={() => orderNow(p)}
              className="bg-green-600 text-white w-full mt-3 py-2 rounded"
            >
              Order on WhatsApp
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
