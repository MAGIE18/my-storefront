import { client } from "../sanity/client";
import ProductCard from "../components/ProductCard";

export default async function Home() {
  const products = await client.fetch(`*[_type == "product"]{
    _id, name, price, "imageUrl": image.asset->url
  }`);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">
          Curated <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-4">Essentials</span>
        </h1>
        <p className="mt-4 text-slate-500 text-lg max-w-2xl">
          Explore our handpicked collection of premium goods designed for modern living. 
          Powered by Headless Sanity CMS.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((p: any) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </main>
  );
}