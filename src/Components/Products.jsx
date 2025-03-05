import React, { useState } from "react";

// Sample product data
const products = [
  {
    id: 1,
    name: "Millet Cookies",
    image: "/src/assets/Product.jpeg",
    description: "Crunchy and healthy millet-based cookies.",
    price: "₹199",
    nutrition: "Calories: 120, Protein: 5g, Fiber: 3g",
  },
  {
    id: 2,
    name: "Ragi Chips",
    image: "/src/assets/Product.jpeg",
    description: "Delicious ragi chips packed with nutrients.",
    price: "₹149",
    nutrition: "Calories: 140, Protein: 4g, Fiber: 2g",
  },
  {
    id: 3,
    name: "Jowar Energy Bars",
    image: "/src/assets/Product.jpeg",
    description: "High-protein energy bars made from jowar.",
    price: "₹249",
    nutrition: "Calories: 180, Protein: 7g, Fiber: 5g",
  },
  {
    id: 4,
    name: "Bajra Puffs",
    image: "/src/assets/Product.jpeg",
    description: "Light and crispy millet puffs for guilt-free snacking.",
    price: "₹129",
    nutrition: "Calories: 100, Protein: 3g, Fiber: 2g",
  },
];

const Products = () => {
  const [showNutrition, setShowNutrition] = useState({});

  const toggleNutrition = (id) => {
    setShowNutrition((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="px-6 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8">Our Millet Products</h2>

      {/* Grid Layout */}
      <div className="grid p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 text-center flex flex-col items-center"
          >
            {/* Product Image */}
            <img src={product.image} alt={product.name} className="w-full rounded-lg" />

            {/* Product Details */}
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-lg font-bold text-green-600 mt-2">{product.price}</p>

            {/* Buttons */}
            <div className="mt-4 flex flex-col items-center gap-2 w-full">
              <button className="bg-yellow-500 w-full px-4 py-2 rounded-lg text-black font-semibold hover:bg-yellow-600 transition">
                Add to Cart
              </button>
              <button
                onClick={() => toggleNutrition(product.id)}
                className="bg-blue-500 w-full px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
              >
                {showNutrition[product.id] ? "Hide Info" : "Nutritional Info"}
              </button>
            </div>

            {/* Nutritional Info */}
            {showNutrition[product.id] && (
              <p className="mt-3 text-gray-700 font-medium">{product.nutrition}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
