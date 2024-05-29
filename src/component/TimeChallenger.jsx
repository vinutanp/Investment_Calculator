import React, { useState, useRef } from 'react';
import ResultPopup from './ResultPopup';


const TimeChallenger = ({title, targetTime}) => {

 let timer=useRef();
 let dialog=useRef();


 const [timeRemainig, setTimeRemainig]=useState(targetTime * 1000);
 const timerActive= timeRemainig > 0 && timeRemainig < (targetTime * 1000);

 if(timeRemainig<=0){
  clearInterval(timer.current);
  
  dialog.current.showModal();
 }

 function handleReset(){
  setTimeRemainig(targetTime*1000);
 }
 function handleStart(){

   timer.current= setInterval(()=>{
      // setTimerExpired(true);
      // dialog.current.showModal();
      setTimeRemainig(prevtimeRemainig=> prevtimeRemainig-10)
    },10);
   
  }

function handleStop(){
  dialog.current.showModal();
clearInterval(timer.current);
}
  return (
 < > 
  <ResultPopup targetTime={targetTime} ref={dialog} remainingTime={timeRemainig} onReset={handleReset}/>
  <section className='challenge'>
        <h2>
            {title} 
        </h2>
       
        <p className='challenge-time'>
            {targetTime} second{targetTime >1 ? 's' : ''}
        </p>
        <p><button onClick={timerActive ?handleStop : handleStart }>{timerActive ? 'Stop':'Start'} Challenge</button></p>
        <p className={timerActive ?'active':undefined}>{timerActive ?'Time is Running...':'Timer inactive'}  </p>
        </section></>
  )
}

export default TimeChallenger
