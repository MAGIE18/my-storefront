"use client";
import { useState } from "react";
import { useCart } from "../store/useCart";
import QuickView from "./QuickView"; // Import the new modal

export default function ProductCard({ product }: { product: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const addItem = useCart((s) => s.addItem);

  return (
    <>
      <div className="border rounded-lg p-4 shadow-sm bg-white group">
        <div className="relative overflow-hidden rounded">
          <img src={product.imageUrl} alt={product.name} className="h-48 w-full object-cover transition duration-300 group-hover:scale-110" />
          {/* Quick View Overlay Button */}
          <button 
            onClick={() => setIsOpen(true)}
            className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-medium"
          >
            Quick View
          </button>
        </div>
        
        <h2 className="mt-2 font-bold">{product.name}</h2>
        <p className="text-blue-600">${product.price}</p>
        
        <button 
          onClick={() => addItem(product)}
          className="w-full mt-3 bg-black text-white py-2 rounded hover:opacity-80 transition"
        >
          Add to Cart
        </button>
      </div>

      {/* Show Modal if isOpen is true */}
      {isOpen && <QuickView product={product} onClose={() => setIsOpen(false)} />}
    </>
  );
}