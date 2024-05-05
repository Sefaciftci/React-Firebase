import React, { useCallback } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingPage from "./LoadingPage";
import imgSrc from '../img/home.png';
import { FaUser } from "react-icons/fa";


const Home = () => {

  const [user, isLoading] = useAuthState(auth);

  if (isLoading) {
    return <LoadingPage />;
  }
  const handleSignOut = useCallback(() => {
    signOut(auth);
  }, []);


  return (
    <div >
      <div className="min-h-screen bg-purple-100">

        <div className="px-8 md:mx-32 py-3 md:py-6">

          <nav className="flex justify-between items-center color-purple-500">
            <h3 className="text-3xl md:text-5xl color-purple font-cursive tracking-wide	font-semibold">
              DOPPY
            </h3>
            <ul className="flex gap-8 md:gap-20 text-lg md:text-xl text-purple-950 font-medium">
              <li className="hover:border-purple-500 hover:text-purple-500  transition-all duration-500 cursor-pointer">
                Home
              </li>
              <li className="border-purple-500 hover:text-purple-500 transition-all duration-300 cursor-pointer">
                About
              </li>
              <li className="border-purple-500 hover:text-purple-500 transition-all duration-300 cursor-pointer">
                Quiz
              </li>
            </ul>

            <div className="flex gap-2 md:gap-3">
              <button
                className="text-xl md:text-xl font-bold text-purple-900 cursor-pointer   hover:text-purple-500  transition-all duration-500 "
              >
                <span><FaUser /></span>
              </button>
              <button
                className=" py-1 md:py-1.5 px-5 md:px-8 text-xl font-semibold border-2 text-purple-900 cursor-pointer border-purple-900 rounded-2xl hover:bg-purple-900 hover:text-white hover:border-white transition-all duration-500 "
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </nav>


          <div className="pt-14 md:pt-24 flex flex-col-reverse md:flex-row px-3 md:px-5">

            <div className="flex flex-col justify-center text-left md:basis-1/2">
              <h3 className="text-3xl md:text-4xl font-semibold mb-6 font-mono md:w-1/2">
                easy ways to work with a team
              </h3>
              <p
                className=" text-base md:text-lg font-light mb-6 md:mb-10">
                this is my original illustration for the home page of kerjain.
                this platform for a team to work on their work remotely without
                having to meet.
              </p>

              <a className="text-center py-2 md:py-3 md:px-10 w-56 text-xl font-semibold border-2 rounded-2xl text-purple-900 cursor-pointer border-purple-900  hover:bg-purple-900 hover:text-white hover:border-white transition-all duration-500 ">
                get started
              </a>
            </div>



            <div className="md:basis-1/2">

              <div className="flex justify-center items-center">
                <img
                  src={imgSrc}
                  alt="social media"
                  className="w-96 h-96 md:w-128 md:h-128  object-cover border-none"
                />
              </div>

            </div>
          </div>


        </div>
      </div>
    </div>
  );
};


export default Home;
