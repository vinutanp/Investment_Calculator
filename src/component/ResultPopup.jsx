import React,{forwardRef} from 'react'

const ResultPopup=forwardRef(function ResultPopup ({  targetTime, remainingTime ,onReset}, ref)  {
  const userLost= remainingTime<=0;
const formattedRemainig=(remainingTime / 1000).toFixed(2);
  const score=Math.round((1-remainingTime/(targetTime*1000))*100);

    return (
    <dialog className='result-modal' ref={ref}>
       {userLost && <h1>You Lost</h1> } 
       {!userLost && <h1>Your Score is {score}</h1> }
        <p>the target time was <strong>{targetTime} seconds</strong></p>
        <p>you stopped with {formattedRemainig} seconds left</p>
        <form method='dialog' onSubmit={onReset}>
            <button>Close</button>
        </form>
        </dialog>
  )
})

export default ResultPopup;
