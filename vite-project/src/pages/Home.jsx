import React, { useCallback } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingPage from "./LoadingPage";
import imgSrc from '../img/home.png';

const Home = () => {

  const [user, isLoading] = useAuthState(auth);

  if (isLoading) {
    return <LoadingPage />;
  }
  const handleSignOut = useCallback(() => {
    signOut(auth);
  }, []);


  return (
    <div className="text-center text-4xl">
      <div className="min-h-screen bg-purple-100">
        <div className="mx-32 py-6">

          <nav className="flex justify-between items-center color-purple-500">
            <h3 className="text-5xl color-purple font-cursive tracking-wide	font-semibold">
              DOPPY
            </h3>
            <ul className="flex gap-20 text-xl text-purple-950 font-medium">
              <li className="hover:underline hover:border-purple-500 transition-all duration-500 cursor-pointer">
                Home
              </li>
              <li className="hover:underline border-purple-500 transition-all duration-300 cursor-pointer">
                About
              </li>
              <li className="hover:underline border-purple-500 transition-all duration-300 cursor-pointer">
                Quiz
              </li>
            </ul>

            <div className="flex gap-2">
              <button
                className="py-1 px-1.5 text-sm font-semibold border-2 text-purple-900 cursor-pointer border-purple-900 rounded-full hover:bg-purple-900 hover:text-white hover:border-white transition-all duration-500 "
              >
                <span>{user.displayName}</span>
              </button>
              <button
                className="py-1.5 px-8 text-xl font-semibold border-2 text-purple-900 cursor-pointer border-purple-900 rounded-2xl hover:bg-purple-900 hover:text-white hover:border-white transition-all duration-500 "
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </nav>




          <div className="pt-32 flex flex-row ">

            <div className="flex flex-col justify-center text-left basis-1/2">
              <h3 className="text-4xl font-semibold mb-6 font-mono w-1/2">
                easy ways to work with a team
              </h3>
              <p
                className="text-lg font-light mb-10">
                this is my original illustration for the home page of kerjain.
                this platform for a team to work on their work remotely without
                having to meet.
              </p>

              <a className="text-center py-3 px-10 text-xl font-semibold border-2 rounded-2xl text-purple-900 cursor-pointer border-purple-900  hover:bg-purple-900 hover:text-white hover:border-white transition-all duration-500 w-56">
                get started
              </a>
            </div>



            <div className="basis-1/2">

              <div className="flex justify-center">
                <img
                  src={imgSrc}
                  alt="social media"
                  className="w-128 h-128 object-cover border-none"
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
