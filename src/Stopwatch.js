import React, { useState } from "react";

function StopWatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false)
    const intervalRef = useRef(null)

    const start=()=>{
        setIsRunning(true);
        intervalRef.current=setInterval(()=>{
            setTime((prevTime)=>prevTime+1)
        },1000);

    }
    const stop=()=>{
        setIsRunning(false)
        clearInterval(intervalRef.current)
    }
    const reset=()=>{
        setTime(0)
        clearInterval(intervalRef.current)
        setIsRunning(false)
    }
    const formatTime=(time)=>{
        const minutes=Math.floor(time/60).toString()
        const seconds=(time%60).toString()
        return `${minutes}:${seconds}`;
    
}
return (
    <div>
        <div>{formatTime(time)}</div>
        <button onClick={start} disabled={isRunning}>
            start
        </button>
        <button onClick={stop} disabled={isRunning}>
            stop
        </button>
        <button onClick={reset} disabled={isRunning}>
            reset
        </button>
    </div>
)
}
export default StopWatch;