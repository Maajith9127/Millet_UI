import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white  shadow-md py-6 px-8 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-5xl font-bold text-yellow-600">Millet Snacks</h1>

      {/* Menu Items */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium text-2xl">
        <li className="hover:text-yellow-500 cursor-pointer">Home</li>
        <li className="hover:text-yellow-500 cursor-pointer">Products</li>
        <li className="hover:text-yellow-500 cursor-pointer">About</li>
        <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
      </ul>

      {/* Call to Action Button */}
      <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
        Order Now
      </button>
    </nav>
  );
};

export default Navbar;
