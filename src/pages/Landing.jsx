import React from 'react';
import Navbar from '../components/Navbar';

const Landing = () => {
  return (
    <>
    <Navbar/>
    <section class="h-auto bg-white tails-selected-element">
        <div class="px-10 py-24 mx-auto max-w-7xl">
            <div class="w-full mx-auto text-left md:text-center">
                <h1 class="mb-6 text-4xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight"> The 
                <span class="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline tails-selected-element"> Next-Gen Election System</span>
                <br class="lg:block hidden"/> for all your elections. </h1>
            </div>
        </div>
    </section>
    </>
  );
};

export default Landing;
