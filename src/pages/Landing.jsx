import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
  'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80',
  'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  'https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80',
  'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
  'https://images.unsplash.com/photo-1577979749830-f1d742b96791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
]


const Landing = () => {
  return (
    <>
    <section class="h-auto bg-white">
        <div class="px-10 py-24 mx-auto max-w-7xl">
            <div class="w-full mx-auto text-left md:text-center">
                <h1 class="mb-6 text-4xl font-extrabold leading-normal max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-6xl md:tracking-tight"> The 
                <span class="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline tails-selected-element"> Next-Gen </span>
                 Technology Review <br class="lg:block hidden"/> Platform for all your gadgets. </h1>
            </div>
        </div>
        <div class="flex justify-center  ">
          <div class="flex flex-col items-center justify-center">
            <div class="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
                <div class="flex flex-col lg:flex-row space-x-3 space-y-3 md:space-x-6   w-full items-center justify-center ">
                  <div class="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                      <img src={images[0]} alt="" class="" />
                  </div>
                  <div class="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                    <div class="w-32 lg:w-40 h-32 overflow-hidden rounded-xl ">
                        <img src={images[1]} alt="" class="h-full" />
                    </div>
                    <div class="w-32 lg:w-40 h-48 overflow-hidden rounded-xl ">
                        <img src={images[2]} alt="" class="" />
                    </div>
                  </div>
                  <div class="lg:w-60 w-64 h-96 overflow-hidden rounded-xl ">
                    <img src={images[3]} alt="" class="h-full" />
                  </div>
                  <div class="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                    <div class="w-32 lg:w-40 h-48 overflow-hidden rounded-xl ">
                        <img src={images[4]} alt="" class="" />
                    </div>
                    <div class="w-32 lg:w-40 h-32 overflow-hidden rounded-xl ">
                        <img src={images[5]} alt="" class="h-full" />
                    </div>
                  </div>
                  <div class="lg:w-40 w-64 h-40 overflow-hidden rounded-xl ">
                    <img src={images[6]} alt="" class="w-full" />
                  </div>
              </div>
          </div>
        </div>
      </div> 
    </section>
    </>
  );
};

export default Landing;
