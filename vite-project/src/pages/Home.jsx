import React, { useCallback } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingPage from "./LoadingPage";
import imgSrc from '../img/home.png';
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


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
        <div className="px-8 md:mx-32 py-5 md:py-8">

          <nav className="flex justify-between items-center color-purple-500">
            <h3 className="text-3xl md:text-5xl color-purple font-cursive tracking-wide	font-semibold text-purple-900">
              DOPPY
            </h3>
            <ul className="flex gap-8 md:gap-20 text-lg md:text-xl text-purple-900 font-medium">
              <li className="hover:text-purple-600  transition-all duration-500 cursor-pointer">
                Home
              </li>
              <Link to='/pomodoro'>
                <li className="border-purple-500 hover:text-purple-600 transition-all duration-300 cursor-pointer">
                  Pomo
                </li>
              </Link>
              
              <Link to='/quiz2'>
                <li className="border-purple-500 hover:text-purple-600 transition-all duration-300 cursor-pointer">
                  Quiz
                </li>
              </Link>
              
            </ul>

            <div className="flex gap-2 md:gap-3 items-center">

              <Link to='/profile'>
                <button
                  className="text-xl md:text-xl font-bold text-purple-900 cursor-pointer   hover:text-purple-600  transition-all duration-500 "
                >
                  <FaUser />
                </button>
              </Link>

              <button
                className="py-1 md:py-1.5 px-5 md:px-8 text-xl font-semibold border-2 text-purple-900 cursor-pointer border-purple-900 rounded-2xl hover:bg-purple-600 hover:text-white hover:border-white transition-all duration-500 "
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </nav>


          <div className="pt-16 md:pt-24 lg:pt-28 flex flex-col-reverse md:flex-row px-3 md:px-5">

            <div className="flex flex-col justify-center text-left md:basis-1/2 mt-5 text-purple-900">
              <h3 className="text-3xl  md:text-4xl font-semibold mb-6 font-mono md:w-1/2">
              sosyal medya molası, ruhun için yenilenme
              </h3>
              <p
                className="text-base md:text-lg font-light mb-6 md:mb-10">
                Doppy, sosyal medya kullanımınızı azaltarak, kendinize ve sevdiklerinize daha fazla zaman ayırmanızı hedefler. Dijital dünyadan bir adım geri atın ve yaşamın gerçek anlarının tadını çıkarın.
              </p>

              <Link className="text-center py-2 md:py-3 md:px-10 w-56 text-xl font-semibold border-2 rounded-2xl text-purple-900 cursor-pointer border-purple-900  hover:bg-purple-600 hover:text-white hover:border-white transition-all duration-500 " to='/about'>
                başla!
              </Link>
            </div>



            <div className="md:basis-1/2">

              <div className="flex justify-center items-center">
                <img
                  src={imgSrc}
                  alt="social media"
                  className="w-96 h-96 md:w-[520px] md:h-[520px]  object-cover border-none"
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
