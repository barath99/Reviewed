import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { AvatarGenerator } from 'random-avatar-generator';


const Vote = () => {
  const location = useLocation();
  const pathnameValues = location.pathname.split('/');
  const deviceName = pathnameValues[2].toUpperCase();
  const generator = new AvatarGenerator();

  return (
    <>
    <section class="text-gray-600 body-font">
      
  <div class="px-10 mx-auto max-w-7xl">
    
    <div class="flex flex-col text-center w-full mb-10">
      
      <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Products</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">{deviceName}</h1>
    </div>
    
    <div class="overflow-x-auto relative mb-10">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-6">
                        Product name
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Color
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Category
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                    </th>
                    <td class="py-4 px-6">
                        Sliver
                    </td>
                    <td class="py-4 px-6">
                        Laptop
                    </td>
                    <td class="py-4 px-6">
                        $2999
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                    </th>
                    <td class="py-4 px-6">
                        White
                    </td>
                    
                    <td class="py-4 px-6">
                        $1999
                    </td>
                    <td class="py-4 px-6">
                        Laptop PC
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                    </th>
                    <td class="py-4 px-6">
                        Black
                    </td>
                    <td class="py-4 px-6">
                        Accessories
                    </td>
                    <td class="py-4 px-6">
                        $99
                    </td>
                </tr>
            </tbody>
      </table>
    </div>
    
    <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-3xl dark:text-white">The <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">fan-favorite</mark> faceoff: which product will you support?</h1>
    <p class="text-lg font-normal text-gray-500 lg:text-md dark:text-gray-400 mb-8">We're putting the top brands head to head in a competition to see 
    which one is the fan favorite. Whether you're a die-hard fan of one particular product or you're just 
    curious to see how they stack up against each other, this poll is for you. So cast your vote and let 
    your voice be heard - which product will come out on top in the end?</p>

    <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
        <li>
            <Link href="#" class="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src={generator.generateRandomAvatar()} alt=""/>
                <div class="text-gray-600 dark:text-gray-400">
                    <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                    <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        ✅ Highly Reputed Author
                    </span> 
                </div>
            </Link>
        </li>
        <li>
          <Link href="#" class="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src={generator.generateRandomAvatar()} alt=""/>
                <div class="text-gray-600 dark:text-gray-400">
                    <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                    <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        ✅ Highly Reputed Author
                    </span> 
                </div>
            </Link>
        </li>
        <li>
          <Link href="#" class="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src={generator.generateRandomAvatar()} alt=""/>
                <div class="text-gray-600 dark:text-gray-400">
                    <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                    <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        ✅ Highly Reputed Author
                    </span> 
                </div>
            </Link>
        </li>
        <li>
          <Link href="#" class="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src={generator.generateRandomAvatar()} alt=""/>
                <div class="text-gray-600 dark:text-gray-400">
                    <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                    <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        ✅ Highly Reputed Author
                    </span> 
                </div>
            </Link>
        </li>
        <ol class="relative border-l border-gray-200 dark:border-gray-700 mx-8 py-4">                  
            <li class="mb-10 ml-6">            
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <img class="rounded-full shadow-lg" src={generator.generateRandomAvatar()} alt="Bonnie image"/>
                </span>
                <div class="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                    <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>
                    <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span></div>
                </div>
            </li>
            <li class="mb-10 ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <img class="rounded-full shadow-lg" src={generator.generateRandomAvatar()} alt="Thomas Lean image"/>
                </span>
                <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                    <div class="justify-between items-center mb-3 sm:flex">
                        <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                        <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Thomas Lean commented on  <a href="#" class="font-semibold text-gray-900 dark:text-white hover:underline">Flowbite Pro</a></div>
                    </div>
                    <div class="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system! This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking about Measurement.</div>
                </div>
            </li>
            <li class="ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <img class="rounded-full shadow-lg" src={generator.generateRandomAvatar()} alt="Jese Leos image"/>
                </span>
                <div class="justify-between items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                    <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 day ago</time>
                    <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300">Jese Leos has changed <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Pricing page</a> task status to  <span class="font-semibold text-gray-900 dark:text-white">Finished</span></div>
                </div>
            </li>
        </ol>
        <li>
          <Link href="#" class="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src={generator.generateRandomAvatar()} alt=""/>
                <div class="text-gray-600 dark:text-gray-400">
                    <div class="text-base font-normal"><span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                    <div class="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        ✅ Highly Reputed Author
                    </span> 
                </div>
            </Link>
        </li>
    </ol>

    <div class="flex flex-wrap -m-4">      
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Shooting Stars</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">The Catalyzer</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 class="text-gray-900 text-lg title-font font-medium">Neptune</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
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

export default Vote;
