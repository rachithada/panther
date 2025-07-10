import React from "react";
import products from "../Data/products.js";
import ProductCard from "./ProductCard";

const ProductList = ({ title, tag }) => {
  const filtered = products.filter(p => p.tags.includes(tag));

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
