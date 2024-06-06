import React, { useState, useEffect } from "react";
import "./App.css";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";


//zamanı gösteren component
const Timer = ({ label, minutes, seconds, onReset }) => (
  <div className="flex flex-col  text-center font-mono">
    <h2 className="text-xl font-semibold rounded-xl mt-12 mb-3 bg-purple-500 text-white">{label}</h2>
    <div className="text-purple-500  rounded-full text-center mb-9">
      <span className="text-8xl font-semibold">
        {String(minutes).padStart(2, "0")}:
      </span>
      <span className="text-8xl font-semibold">
        {String(seconds).padStart(2, "0")}
      </span>
    </div>
    <button
      className="py-3 px-5 m-5 border border-purple-500 rounded-xl text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-500"
      onClick={onReset}
    >
      Reset
    </button>
  </div>
);

const Pomo = () => {
  const [isRunning, setIsRunning] = useState(false);//zamanlayıcı çalısıyor mu ? 
  const [minutes, setMinutes] = useState(25); // dakika değeri
  const [seconds, setSeconds] = useState(0); //saniye değeri
  const [workDuration, setWorkDuration] = useState(25); //çalışma süresi
  const [breakDuration, setBreakDuration] = useState(5); //mola süresi
  const [cycles, setCycles] = useState(0); //döngü sayısı
  const [isBreak, setIsBreak] = useState(false); //mola mı çalışma mı ? 

  //ses dosyalarım
  const workEndSound = new Audio("/afterWork.mp3");
  const breakEndSound = new Audio("/afterWork.mp3");


  
//useEffect  zamanlayıcıyı kontrol eder.
  useEffect(() => {
    let timer;//timer: Zamanlayıcıyı tutar.
    if (isRunning) {//isRunning: Zamanlayıcının çalışıp çalışmadığını kontrol eder.if (isRunning): Zamanlayıcı çalışıyorsa, her saniye (1000 ms) bir geri sayım başlatılır.
      timer = setInterval(() => {
        if (seconds > 0) {//if (seconds > 0): Eğer saniye 0'dan büyükse, saniyeyi 1 azaltır.
          setSeconds(seconds - 1);
        } else if (minutes > 0) {//else if (minutes > 0): Eğer saniye 0'a ulaşmış ve dakika 0'dan büyükse, dakikayı 1 azaltır ve saniyeyi 59'a ayarlar.
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {// Hem dakika hem de saniye 0'a ulaştığında
          if (!isBreak) {//Çalışma süresi bitmişse
            workEndSound.play();//Çalışma süresi bitiş sesi çalar.
            setMinutes(breakDuration);//Mola süresini ayarlar.
            setSeconds(0);//Saniyeyi 0'a ayarlar.
            setIsBreak(true);//Mola süresine geçildiğini işaretler.
            setCycles(cycles + 1);//Tamamlanan döngü sayısını artırır.
          } else {//Mola süresi bitmişse
            breakEndSound.play();//Mola süresi bitiş sesi çalar.
            setMinutes(workDuration);//Çalışma süresini ayarla
            setSeconds(0);//Saniyeyi 0'a ayarlar.
            setIsBreak(false);//Çalışma süresine geçildiğini işaretle
          }
          if (cycles === 3 && isBreak) {//Üç döngü tamamlanmışsa ve mola süresindeyse, zamanlayıcı durdurulur.
            setIsRunning(false);
          }
        }
      }, 1000);
    } else if (!isRunning && minutes === 0 && seconds === 0) {//Zamanlayıcı çalışmıyorsa ve süre dolmuşsa, zamanlayıcı temizlenir.
      clearInterval(timer);
    }
    return () => clearInterval(timer);//Zamanlayıcı bileşen temizlenirken veya yeniden render edilirken temizlenir.
  }, [
    isRunning,
    minutes,
    seconds,
    isBreak,
    cycles,
    workDuration,
    breakDuration,
  ]);

  //Verilen çalışma ve mola süreleriyle zamanlayıcıyı başlatır.
  const startTimer = (work, brk) => {
    setWorkDuration(work);
    setBreakDuration(brk);
    setMinutes(work);
    setSeconds(0);
    setIsRunning(true);
    setIsBreak(false);
    setCycles(0);
  };

  //Zamanlayıcıyı sıfırlar.
  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(workDuration);
    setSeconds(0);
    setIsBreak(false);
    setCycles(0);
  };

  //info 
  const handleInfocClick = () => {
    alert('Pomodoro nedir ? ')
  }

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center font-mono">
      <div className="bg-white w-[730px] rounded-2xl shadow-xl p-10">
        <div className="flex items-center flex-col">

        <div className="flex justify-between w-full items-center">
          <Link to="/">
            <IoArrowBackCircle className="text-3xl text-purple-500 font-bold" />
          </Link>
          <button className="text-2xl text-purple-500" onClick={handleInfocClick}><FaInfoCircle /></button>
        </div>

          <h1 className="text-3xl mb-10 text-purple-500 font-bold">Pomodoro Timer</h1>
          <div className="flex flex-row">
            <button
              className="text-purple-500 border border-purple-500 hover:bg-purple-500 hover:text-white py-2 px-7 rounded-xl  m-1 transition-all duration-500"
              onClick={() => startTimer(25, 5)}
            >
              25 min Work / 5 min Break
            </button>
            <button
              className="text-purple-500 border border-purple-500 hover:bg-purple-500 hover:text-white py-2 px-7 rounded-xl  m-1 transition-all duration-500"
              onClick={() => startTimer(30, 5)}
            >
              30 min Work / 5 min Break
            </button>
          </div>
          <Timer
            label={isBreak ? "Break Time" : "Work Time"}
            minutes={minutes}
            seconds={seconds}
            onReset={resetTimer}
          />
        </div>
      </div>
    </div>
  );
};

export default Pomo;
