import React, { useState, useEffect } from "react";
import "./App.css";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const Timer = ({ label, minutes, seconds, onReset }) => (
  <div>
    <h2 className="text-2xl my-8">{label}</h2>
    <div>
      <span className="text-4xl font-semibold">
        {String(minutes).padStart(2, "0")}:
      </span>
      <span className="text-4xl font-semibold">
        {String(seconds).padStart(2, "0")}
      </span>
    </div>
    <button
      className="py-3 px-5 m-5 border-none bg-purple-500 rounded-xl text-white"
      onClick={onReset}
    >
      Reset
    </button>
  </div>
);

const Pomo = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [cycles, setCycles] = useState(0);
  const [isBreak, setIsBreak] = useState(false);

  const workEndSound = new Audio("/afterWork.mp3");
  const breakEndSound = new Audio("/afterWork.mp3");

  // Load saved state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem("pomodoroState");
    if (savedState) {
      const {
        isRunning,
        minutes,
        seconds,
        workDuration,
        breakDuration,
        cycles,
        isBreak,
      } = JSON.parse(savedState);
      setIsRunning(isRunning);
      setMinutes(minutes);
      setSeconds(seconds);
      setWorkDuration(workDuration);
      setBreakDuration(breakDuration);
      setCycles(cycles);
      setIsBreak(isBreak);
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "pomodoroState",
      JSON.stringify({
        isRunning,
        minutes,
        seconds,
        workDuration,
        breakDuration,
        cycles,
        isBreak,
      })
    );
  }, [
    isRunning,
    minutes,
    seconds,
    workDuration,
    breakDuration,
    cycles,
    isBreak,
  ]);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (!isBreak) {
            workEndSound.play();
            setMinutes(breakDuration);
            setSeconds(0);
            setIsBreak(true);
            setCycles(cycles + 1);
          } else {
            breakEndSound.play();
            setMinutes(workDuration);
            setSeconds(0);
            setIsBreak(false);
          }
          if (cycles === 3 && isBreak) {
            setIsRunning(false);
          }
        }
      }, 1000);
    } else if (!isRunning && minutes === 0 && seconds === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [
    isRunning,
    minutes,
    seconds,
    isBreak,
    cycles,
    workDuration,
    breakDuration,
  ]);

  const startTimer = (work, brk) => {
    setWorkDuration(work);
    setBreakDuration(brk);
    setMinutes(work);
    setSeconds(0);
    setIsRunning(true);
    setIsBreak(false);
    setCycles(0);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(workDuration);
    setSeconds(0);
    setIsBreak(false);
    setCycles(0);
    localStorage.removeItem("pomodoroState");
  };

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center font-mono">
      <div className="bg-white w-[700px] rounded-2xl shadow-xl p-10">
        

        <div className="flex items-center flex-col">
        <div className="mr-auto">
          <Link to="/">
            <IoArrowBackCircle className="text-4xl text-purple-400 font-bold" />
          </Link>
        </div>

          <h1 className="text-3xl mb-10">Pomodoro Timer</h1>
          <div>
            <button
              className="bg-purple-500 py-2 px-7 rounded-xl text-white m-1"
              onClick={() => startTimer(1, 1)}
            >
              25 min Work / 5 min Break
            </button>
            <button
              className="bg-purple-500 py-2 px-7 rounded-xl text-white m-1"
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
