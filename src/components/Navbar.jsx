import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { connectToCeramic } from '../services/connectToCeramic';



const Navbar = () => {

  const [SignInClicked, setSignInClicked] = useState(false);
  const [user, setUser] = useState();
  const [shortText, setShortText] = useState("");

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    const connect = async () => {
      let res = await connectToCeramic();
      /** Check if connection is successful or not */
      if(res.status == 200) {
        setUser(res.did);
        console.log(res)
        setShortText(res.did.substring(0, 3) + "..." + res.did.substring(res.did.length - 5));
      } else {
        console.log("Error connecting to Ceramic: ", res);
        alert("Error connecting to Ceramic.");
      }
    }
    connect();
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

            {!user &&
            <span class="inline-flex rounded-md shadow-sm">
                <button onClick={() => setSignInClicked(true)} class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600">
                    Sign in
                </button>
            </span>
            }
            {user &&
            <span class="inline-flex rounded-md shadow-sm">
                <div class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-overflow-ellipsis overflow-hidden w-auto text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600">
                    Welcome {shortText}
                </div>
            </span>
            }
        </div>
        </div>
    </section>
  );
};

export default Navbar;
