"use client";
import { X } from "lucide-react";

export default function QuickView({ product, onClose }: { product: any; onClose: () => void }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full relative overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full z-10">
          <X className="w-6 h-6" />
        </button>

        {/* Image Section */}
        <div className="md:w-1/2 h-64 md:h-auto bg-gray-100">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Details Section */}
        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-blue-600 text-xl font-semibold mt-2">${product.price}</p>
          <p className="text-gray-500 mt-4 leading-relaxed">
            This is a high-quality product sourced through our headless Sanity CMS. Perfect for your modern lifestyle.
          </p>
          <button 
            onClick={() => { alert("Added!"); onClose(); }}
            className="mt-8 bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}