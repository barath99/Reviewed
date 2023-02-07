import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ imageUrl, category, title, description }) => (
    <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
    <Link to={`/products/${title}`}>
      <div className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
      <div className="relative z-20 w-full h-auto py-8 text-white bg-indigo-500 border-t-0 border-yellow-200 px-7">
        <div className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white">{category}</div>
          <h2 className="mb-5 text-5xl font-bold">{title}</h2>
        <p className="mb-2 text-lg font-normal text-purple-100 opacity-100">{description}</p>
      </div>
    </Link>
    </div>
  );

const Products = () => {
  return (
    <>
    <section class="relative w-full bg-white tails-selected-element">
    <div class="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white"></div>
    <div class="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
    <div class="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
    <ProductCard 
        category="Devices"
        title="Tablets"
        description="Quench satisfying designs to help you stir up emotion and tell a story."
        imageUrl="https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    />
    <ProductCard 
        category="Audio"
        title="Speakers"
        description="A sonic wave, a sound so clear, Emanating from this little sphere."
        imageUrl="https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80"
    />
    <ProductCard 
        category="Devices"
        title="Laptops"
        description="A digital canvas, a world in my lap, An endless possibility, an endless map."
        imageUrl="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    />
    </div>
    </div>
    </section>
  </>
  );
};

export default Products;
