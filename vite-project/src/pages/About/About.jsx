import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";




const About = () => {
  return (
    <div className="min-h-screen bg-purple-100 flex justify-center items-center font-poppins  text-purple-900">
      <div className="bg-white w-[750px] rounded-xl py-6 px-9 shadow-xl">
      <div className='mr-auto'>
          <Link to='/'>
            <IoArrowBackCircle className='text-4xl text-purple-500 font-bold' />
          </Link>
        </div>
        <h1 className="text-center text-2xl text-purple-700 font-semibold mb-2 ">
          Doppy Nasıl Kullanılır ?
        </h1>
        <hr className="mb-5" />
        <div className="flex flex-col gap-4" >
            <div className="my-3">
              <h3 className="text-2xl font-semibold  mb-1.5">Nedir Bu Doppy ?</h3>
              <p className="text-purple-900 font-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cum, illum officiis architecto ea esse nulla delectus? Voluptates, dolorum iure?</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold  mb-3">Peki Nasıl Kullanırız ?</h3>
              <h4 className="font-mono font-semibold text-lg mb-1">Adım 1</h4>
              <p className="mb-2.5 font-light">Bağımlılık derecesini ölçmek için hazırlanan testimizi çözmeliyiz.</p>
              <h4 className="font-mono font-semibold text-lg mb-1">Adım 2</h4>
              <p className="mb-2.5 font-light">Test sonucunuzun skoruna göre size yapmanınz gereken hedef listesi sunulucak. Hergün bu adımları tamamlamalısız.</p>
              <h4 className="font-mono font-semibold text-lg mb-1">Adım 3</h4>
              <p className="mb-2.5 font-light">Evet! Günlük hedeflerimizi tamamladık. Şimdi bunu kaydedelim. Profilimize girip Zinciri Kırma uygulamamızı açıp tamaladığımız günü işaretliyoruz.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
