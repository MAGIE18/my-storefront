import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  _id: string;
  name: string;
  price: number;
  image?: string;
}

interface CartState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  clearCart: () => void; // --- ADDED THIS LINE ---
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (p) => set((s) => ({ items: [...s.items, p] })),
      removeItem: (id) => set((s) => ({ items: s.items.filter(i => i._id !== id) })),
      clearCart: () => set({ items: [] }), // --- ADDED THIS LINE ---
    }),
    { name: 'cart-storage' }
  )
);