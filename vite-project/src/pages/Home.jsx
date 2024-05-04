import React from "react"
import {Link} from "react-router-dom";


const Home =  () => {
    return(
        <div className="text-center text-4xl text-color-">
            <h1>Home Page</h1>

            <div className="mt-20">
                <Link to="/" className="py-2 px-5 bg-black text-white text-2xl rounded-xl m-2">Home</Link>
                <Link to="/signUp" className="py-2 px-5 bg-black text-white text-2xl rounded-xl m-2">Sign Up</Link>
                <Link to="/signIn" className="py-2 px-5 bg-black text-white text-2xl rounded-xl m-2">Sign In</Link>
            </div>
        </div>
    )
}

export default Home;
