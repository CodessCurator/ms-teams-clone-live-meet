import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPauseCircle,
    faPlayCircle,
    faRedo
  } from "@fortawesome/free-solid-svg-icons";

function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });


  return (
    <div style={{textAlign: 'center'}}>
      
      <div style={{fontSize: '20px'}}>
       <span style={{color:'red'}}> <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></span>
        <p style={{fontSize: '17px', marginBottom: 3}}>{isRunning ? 'Running' : 'Not running'}</p>
        
        <FontAwesomeIcon onClick={start} className="icon" icon={ faPlayCircle} />&nbsp;
        <FontAwesomeIcon onClick={pause} className="icon" icon={ faPauseCircle} />&nbsp;
        <FontAwesomeIcon onClick={reset} className="icon" icon={ faRedo} />
        
      </div>
    </div>
  );
}

export function StopWatch() {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
}