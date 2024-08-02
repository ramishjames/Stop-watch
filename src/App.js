
import './App.css';
import { useEffect, useState, UseState  } from "react"

function App() {

 const [time,setTime] = useState(0);
   const [runnig,setRunning] =useState(false);

    useEffect(()=> {
      let interval;
      if(runnig) {
        interval = setInterval(()=> {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!runnig) {
       clearInterval(interval);
      }
       return () => clearInterval(interval);
       
    }, [runnig]);

  return (
    <div className='app'>
<h1 className='text-2xl font-semibold'>01-stopwatch</h1>
<div className='text-xl font-semibold p-4'>
<span>{("0" + Math.floor((time / 60000) %60)).slice(-2)}:</span>
<span>{("0" + Math.floor((time / 1000) %60)).slice(-2)}:</span>
<span>{("0" + ((time/10) %100)).slice(-2)}</span>
</div>
<div className='w-1/3 max-w-sm  flex flex-row justify-evenly'>
  {runnig ? (
    <button  className='border  rounded-lg py-1 px-2.5'
      onClick={()=> {setRunning(false)}}
      >
        Stop
        </button>
  ) : (
<button

className='Border  rounded-lg py-1 px-3.5'
 onClick={()=> {setRunning(true)}}
 >
  Start
 </button>
  )
  }
 <button
 className='border rounded-lg py-1 px-3'
  onClick={()=> {setRunning(0)}}
  >Reset
  </button>
</div>
    </div>
  )
}

export default App