"use client";
import Link from 'next/link';
import { ShoppingCart, Search } from 'lucide-react';
import { useCart } from '../store/useCart';

export default function Navbar() {
  const items = useCart((s) => s.items);

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6 bg-white border-b sticky top-0 z-50 gap-4">
      <Link href="/" className="text-2xl font-bold text-blue-600">MyStore</Link>
      
      {/* Search Bar - Perfect for your portfolio! */}
      <div className="relative w-full md:w-96">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>

      <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition">
        <ShoppingCart className="w-6 h-6 text-gray-700" />
        {items.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
            {items.length}
          </span>
        )}
      </Link>
    </nav>
  );
}