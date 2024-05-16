import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
const About = () => {
  return (
    <div className="min-h-screen bg-purple-100 flex justify-center items-center ">
      <div className="bg-white w-[640px] rounded-xl py-6 px-9 shadow-2xl">
      <div className='mr-auto'>
          <Link to='/'>
            <IoArrowBackCircle className='text-4xl text-purple-500 font-bold' />
          </Link>
        </div>
        <h1 className="text-center text-2xl text-purple-600 font-semibold mb-2 ">
          Doppy Nasıl Kullanılır ?
        </h1>
        <hr className="mb-5" />
        <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere voluptas, totam, omnis, tempore aperiam odio laborum ratione veniam eum error quo magnam laboriosam debitis deserunt dicta placeat. Alias iusto, asperiores hic debitis esse nemo eveniet officia quia quam voluptate, vel necessitatibus. Et excepturi expedita, praesentium consectetur eligendi atque iste reiciendis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat doloremque mollitia. Laboriosam tempora a consectetur voluptatem sit voluptates animi natus eaque vel nesciunt quo, aut reprehenderit fugiat minus assumenda.
        </div>
        <button className="bg-purple-500 text-white py-2 px-5 rounded-2xl font-semibold mt-8 hover:bg-purple-300 transition-all duration-500">Başla</button>
      </div>
    </div>
  );
};

export default About;
