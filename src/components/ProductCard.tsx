"use client";
import { useState } from "react";
import { useCart } from "../store/useCart";
import { Plus, Eye } from "lucide-react";
import QuickView from "./QuickView";

export default function ProductCard({ product }: { product: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const addItem = useCart((s) => s.addItem);

  return (
    <>
      <div className="group relative bg-white rounded-3xl border border-slate-200 p-3 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
             <button 
               onClick={() => setIsOpen(true)}
               className="bg-white p-3 rounded-full shadow-xl hover:scale-110 transition active:scale-95"
             >
               <Eye className="w-5 h-5 text-slate-700" />
             </button>
          </div>
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-600">
            New Arrival
          </span>
        </div>
        
        <div className="mt-4 px-2 pb-2">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-bold text-slate-800 text-lg leading-tight">{product.name}</h2>
              <p className="text-slate-400 text-xs mt-1">Premium Collection</p>
            </div>
            <p className="font-black text-blue-600 text-lg">${product.price}</p>
          </div>
          
          <button 
            onClick={() => addItem(product)}
            className="w-full mt-5 bg-slate-900 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors duration-300"
          >
            <Plus className="w-4 h-4" />
            Add to Bag
          </button>
        </div>
      </div>

      {isOpen && <QuickView product={product} onClose={() => setIsOpen(false)} />}
    </>
  );
}