import { client } from "../sanity/client";
import ProductCard from "../components/ProductCard";

// This tells Next.js to refresh the data every 60 seconds
export const revalidate = 60; 

export default async function Home() {
  // 1. Fetch data with a try/catch mindset
  const products = await client.fetch(`*[_type == "product"]{
    _id, 
    name, 
    price, 
    "imageUrl": image.asset->url
  }`);

  // 2. Safety Check: If no products, show a message instead of a blank screen
  if (!products || products.length === 0) {
    return (
      <main className="p-8 text-center">
        <h1 className="text-2xl font-bold">No products found.</h1>
        <p className="text-gray-500">Check your Sanity dataset and Project ID.</p>
      </main>
    );
  }

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-900">Featured Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p: any) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </main>
  );
}