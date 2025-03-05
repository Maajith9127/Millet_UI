import React from 'react'

const Home = () => {
  return (
    <section className="flex   items-center justify-center flex-col md:flex-row mt-20   px-6">
   
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-7xl font-bold text-gray-800">
          Healthy & Tasty <span className="text-yellow-500">Millet Snacks</span>
        </h1>
        <p className="text-lg text-gray-600">
          Discover the goodness of organic millet-based snacks. No preservatives, just pure nutrition.
          Discover the goodness of organic millet-based snacks. No preservatives, just pure nutrition.
          Discover the goodness of organic millet-based snacks. No preservatives, just pure nutrition.
          Discover the goodness of organic millet-based snacks. No preservatives, just pure nutrition.
        </p>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
          Explore Products
        </button>
      </div>

      {/* Right Side - Image Placeholder */}
      <div className=' '>

      <div className="md:w-1/2 ml-40  max-h-[400px]  max-w-[400px]  flex justify-center items-center mt-8 md:mt-0">
        <img 
          src="src/assets/logo.jpeg" 
          alt="Millet Snacks" 
          className=" rounded-[30px]  shadow-lg"
        />
      </div>
      </div>
    </section>
  )
}

export default Home