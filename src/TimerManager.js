import { useState, useEffect } from "react";
import Timer from "./Timer";
import './TimerManager.css'
import sound from './test.mp3'

function TimerManager({timers}) {
  const [currentTimerIndex, setCurrentTimerIndex] = useState(0)
  const [currentTimerTitle, setCurrentTimerTitle] = useState("")
  const [isTimersDone, setIsTimersDone] = useState(false)
  const {seconds} = Timer(timers[currentTimerIndex].length)
  const [isUpdating, setIsUpdating] = useState(false)
  const [isAudioActive, setIsAudioActive] = useState(false)
  const [stringTime, setStringTime] = useState("")

  if (seconds === 0 && !isUpdating) {
    setIsUpdating(true)
    if (currentTimerIndex === timers.length - 1) {
      setIsTimersDone(true)
    } else {
      setCurrentTimerIndex(currentTimerIndex + 1)
    }
  }

  useEffect(() => {
    var minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    var modSeconds = String(Math.floor(seconds % 60)).padStart(2, "0");
    setStringTime(minutes + ":" + modSeconds)
  }, [seconds])

  useEffect(() => {
    if (isTimersDone) {
      repeatedAudio(5)
    }
  }, [isTimersDone])

  useEffect(() => {
    setIsUpdating(false)
    setCurrentTimerTitle(timers[currentTimerIndex].title)

    if (currentTimerIndex > 0) {
      repeatedAudio(3)
    }

  }, [currentTimerIndex])

  useEffect(() => {
    
  }, [])

  function repeatedAudio(n) {
    new Audio(sound).play();
    var i = 0, 
    interval = setInterval(function() {
        new Audio(sound).play();
        i++;
        if(i >= n-1) clearInterval(interval); // stop it
    }, 1000);
  }

  var percentageComplete = (723 - ((seconds / (timers[currentTimerIndex].length * 60)) * 723))

  return (
    <div onClick={() => {setIsAudioActive(true)}}>
      {!isAudioActive && <div className="timerInfo">Click timer to Activate Audio</div>}
      {isTimersDone && <div>Timers are Complete</div>}
      
      {!isTimersDone && <div>
        <div className="skill">
          <div className="outer">
            <div className="inner">
              <div className="time">{stringTime}</div>
              <div className="title">{currentTimerTitle}</div>
            </div>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50vw" height="50vh">
          <circle cx="25vw" cy="25vh" r="115" style={{strokeDashoffset: percentageComplete}}/>
        </svg>
      </div>}

    </div>
  );
}

export default TimerManager;
