"use client";
import { useCart } from "../../store/useCart";
import Link from "next/link";
import { Trash2, ArrowLeft } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCart();

  // Calculate the total price
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/" className="hover:text-blue-600 transition">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl shadow-sm border">
          <p className="text-gray-500 mb-6">Your cart is empty.</p>
          <Link href="/" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* List of Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white border rounded-xl shadow-sm">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-blue-600">${item.price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeItem(item._id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-white p-6 border rounded-xl shadow-sm h-fit sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-4 text-lg">
              <span>Total:</span>
              <span className="font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
            </div>
            <button 
              onClick={() => alert("Checkout integration coming soon!")}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Checkout Now
            </button>
            <button 
              onClick={clearCart}
              className="w-full mt-4 text-gray-500 text-sm hover:underline"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </main>
  );
}