import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Auth, useAuth } from "@arcana/auth-react";


const Navbar = ({auth}) => {
  console.log("Loggedin? ",auth.isLoggedIn)
  const [SignInClicked, setSignInClicked] = useState(false);
  const [AccountId, setAccountId] = useState("");
  const [showModal, setShowModal] = useState(false);
  
  const handleSignInClick = async() => {
    setShowModal(true);
  };
  
  const handleModalClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    
  }, []);

  useEffect(() => {
 
  }, [SignInClicked]); // specify the state variable here

  return (
    <section class="relative w-full px-8 text-gray-700 bg-white body-font">
    <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <Link to="/">
        <div class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">Reviewed.</div>
        </Link>

        <div class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
            <Link to="/products">
            <div class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" data-rounded="rounded-md">
                View products ➡️
            </div>
            </Link>

            <span className="inline-flex rounded-md shadow-sm">
            <button
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleSignInClick}
            >
              {(!auth.isLoggedIn && "Sign in") || "Log out"}
            </button>
            </span>

            {showModal && (
              <div
                id="defaultModal"
                className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
              >
                <div className="bg-indigo-700 rounded-lg shadow-md pt-10 pb-8 m-auto w-96 relative">
                  <button className="absolute top-4 right-4 mb-2 text-sm font-medium text-gray-200 " onClick={handleModalClose}>X</button>
                  <Auth externalWallet={true} theme={"dark"} />
                </div>
              </div>
            )}
        </div>
        </div>
    </section>
  );
};

export default Navbar;
