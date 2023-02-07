import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Products = () => {
  return (
    <>
    {/* <Navbar/> */}
    <section class="relative w-full bg-white tails-selected-element">
    <div class="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white"></div>
    <div class="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
    <div class="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
            <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-full hover:scale-110" style={{backgroundImage: `url('https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')`}}></a>
                <div class="relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
                    <a href="#_" class="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white">Devices</a>
                    <Link to={'/products/Tablets'}>
                    <h2 class="mb-5 text-5xl font-bold">iPad / Tabs</h2>
                    </Link>
                    <p class="mb-2 text-lg font-normal text-purple-100 opacity-100">Quench satisfying designs to help you stir up emotion and tell a story.</p>

                </div>
            </div>

            <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
                <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-full hover:scale-110" style={{backgroundImage: `url('https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80`}}></a>
                <div class="relative z-20 w-full h-auto py-8 text-white bg-blue-400 border-t-0 border-yellow-200 px-7">
                    <a href="#_" class="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-blue-500 bg-white">Audio</a>
                    <h2 class="mb-5 text-5xl font-bold"><a href="#_" class="">Speakers</a></h2>
                    <p class="mb-2 text-lg font-normal text-blue-100 opacity-100">A sonic wave, a sound so clear, Emanating from this little sphere.</p>

                </div>
            </div>

            <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
                <a href="#_" class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110" style={{backgroundImage: `url('https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80')`}}></a>
                <div class="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-yellow-400 border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7">
                    <a href="#_" class="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-yellow-400 bg-white">Devices</a>
                    <h2 class="mb-5 text-5xl font-bold"><a href="#_" class="">Laptops</a></h2>
                    <p class="mb-2 text-lg font-normal opacity-100 text-yellow-50">A digital canvas, a world in my lap, An endless possibility, an endless map.</p>

                </div>
            </div>

            <div class="grid grid-cols-12 col-span-12 gap-7">
                <div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                    <a href="#_" class="block transition duration-200 ease-out transform hover:scale-110">
                        <img class="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/workstation.jpg"/>
                    </a>
                    <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                        <div class="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                            <span>Inspiration</span>
                        </div>
                        <h2 class="text-base font-bold sm:text-lg md:text-xl"><a href="#_">Best Workstations of the Year</a></h2>
                        <p class="mt-2 text-sm text-gray-500">Check out these inspiring workstations to get ideas on how to level-up your workstation.</p>
                    </div>
                </div>

                <div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                    <a href="#_" class="block transition duration-200 ease-out transform hover:scale-110">
                        <img class="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/snacks.jpg"/>
                    </a>
                    <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                        <div class="bg-red-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                            <span>Food</span>
                        </div>
                        <h2 class="text-base font-bold sm:text-lg md:text-xl"><a href="#_">Eating for Productivity</a></h2>
                        <p class="mt-2 text-sm text-gray-500">Learn how to be more disciplined in your diet and how you can eat to maximize productivity.</p>
                    </div>
                </div>

                <div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                    <a href="#_" class="block transition duration-200 ease-out transform hover:scale-110">
                        <img class="object-cover w-full shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/book-design.jpg"/>
                    </a>
                    <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                        <div class="bg-purple-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white">
                            <span>Resources</span>
                        </div>
                        <h2 class="text-base font-bold sm:text-lg md:text-xl"><a href="#_" class="">A Design Mind-set</a></h2>
                        <p class="mt-2 text-sm text-gray-500">What does it mean to have a design mind-set? Learn how to improve your eye for design.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    <Footer/>
  </>
  );
};

export default Products;
