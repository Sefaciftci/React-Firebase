import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

const About = () => {
  return (
    <div className="min-h-screen bg-purple-100 flex justify-center items-center">
      <div className="bg-white w-[700px] rounded-xl py-7 px-9 shadow-xl font-cursive">
      <div className='mr-auto'>
          <Link to='/'>
            <IoArrowBackCircle className='text-4xl text-purple-500 font-bold' />
          </Link>
      </div>
        <h1 className="text-center text-3xl text-purple-500 font-semibold mb-2  font-poppins">
          Doppy Nasıl Kullanılır ?
        </h1>
        <hr className="mb-5" />

        <div className="flex flex-col gap-4 text-lg text-purple-500">
            <div className="my-4">
              <h3 className="text-2xl font-bold mb-1.5">Nedir Bu Doppy ?</h3>
              <p className="text-purple-900 font-light ">Doppy kullanıcılarına sosyal medya bağımlılığından kurtarmayı amaçlayan bir web uygulamasıdır. Bunu <span className="font-bold text-purple-600">21 gün alışkanlık kuralı</span> ile elde etmeyi hedeflemektedir. Kullanıcıdan istenen adımlar aşağıda belirtilmiştir.</p>
            </div>

            <div className="mt-2">
              <h3 className="text-2xl font-bold  mb-5">Peki Nasıl Kullanırız ?</h3>
              <h4 className="font-cursive font-bold text-lg mb-1"> Adım 1</h4>
              <p className="mb-2.5 text-purple-950  font-light ">Bağımlılık derecesini ölçmek için hazırladığımız testimizi çözmeliyiz.</p>
              <h4 className="font-bold text-lg mb-1">Adım 2</h4>
              <p className="mb-2.5 text-purple-950  font-light">Test sonucunuza göre bağımlılık seviyeniz belirlenicek. Belirlenen seviyeye özel  yapmanınz gereken hedef listesi sunulucak. Bu hedefleri <span className="font-bold text-purple-600">günlük</span> olarak tamamlamalısınız.</p>
              <h4 className="font-bold text-lg mb-1">Adım 3</h4>
              <p className="mb-2.5 text-purple-950  font-light">Evet! Günlük hedeflerimizi tamamladık. Şimdi bunu kaydedelim. Zinciri Kırma uygulamamızı açıp tamaladığımız günü işaretliyoruz. Ve bunu <span className="text-purple-600 font-bold">21 gün boyunca</span> sürdürmelisin!</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
