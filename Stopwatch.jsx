import React, { useState, useRef, useEffect } from 'react';
import './Stopwatch.css';

function Stopwatch() {
  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(false);
  const [timeClass, setTimeClass] = useState('');
  const mainRef = useRef(null);
  const timerRef = useRef(null);

  const start = () => {
    setTimer(true);
    setTimeClass('time-start');
    mainRef.current.innerHTML = 'You Start The Program';
    mainRef.current.style.color = 'green';

    if (!timerRef.current) {
      timerRef.current = setInterval(updateTime, 10);
    }
  };

  const stop = () => {
    setTimer(false);
    setTimeClass('time-stop');
    mainRef.current.innerHTML = 'You Stop The Program';
    mainRef.current.style.color = 'yellow';

    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const reset = () => {
    setTimer(false);
    setSec(0);
    setMin(0);
    setHr(0);
    setCount(0);
    setTimeClass('time-reset');
    mainRef.current.innerHTML = 'You Reset The Program';
    mainRef.current.style.color = 'red';

    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const updateTime = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;

      const hours = Math.floor(newCount / 360000);
      const minutes = Math.floor((newCount % 360000) / 6000);
      const seconds = Math.floor((newCount % 6000) / 100);

      setHr(hours);
      setMin(minutes);
      setSec(seconds);

      if (newCount === 3600000) {
        return 0;
      }

      return newCount;
    });
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div id="main2">
      <div id="time">
        <span className={`digit ${timeClass}`} id="hr">{hr < 10 ? '0' + hr : hr}</span>
        <span className="txt">Hr</span>
        <span className={`digit ${timeClass}`} id="min">{min < 10 ? '0' + min : min}</span>
        <span className="txt">Min</span>
        <span className={`digit ${timeClass}`} id="sec">{sec < 10 ? '0' + sec : sec}</span>
        <span className="txt">Sec</span>
        {/* <span className={`digit ${timeClass}`} id=" count">{count < 10 ? '0' + count : count}</span> */}
      </div>
      <div id="btn-container">
        <button id="Start" onClick={start}>Start</button>
        <button id="Stop" onClick={stop}>Stop</button>
        <button id="Reset" onClick={reset}>Reset</button>
      </div>
      <h3 ref={mainRef} id="main"></h3>
    </div>
  );
}

export default Stopwatch;
