"use client";
import Link from 'next/link';
import { ShoppingBag, Search } from 'lucide-react';
import { useCart } from '../store/useCart';

export default function Navbar() {
  const items = useCart((s) => s.items);

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white/70 backdrop-blur-xl border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    <Link href="/" className="text-2xl font-black tracking-tighter text-blue-600 hover:opacity-80 transition">
      MODERN<span className="text-gray-900">SHOP</span>
    </Link>
    
    <div className="hidden md:flex flex-1 max-w-md mx-10 relative">
      <input 
        type="text" 
        placeholder="Search unique products..." 
        className="w-full bg-gray-100/50 border-none rounded-2xl py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-blue-500/20 transition"
      />
    </div>

        <Link href="/cart" className="relative p-3 bg-slate-100 hover:bg-slate-200 rounded-2xl transition-all group">
          <ShoppingBag className="w-5 h-5 text-slate-700 group-hover:text-blue-600 transition" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
              {items.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}