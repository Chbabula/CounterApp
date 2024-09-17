import { useState } from "react";
import './App.css'


function App() {
const [count, setCounter]=useState(0);


const addVal = ()=>{
  setCounter(count+1)
}
const remVal=()=>{
   return setCounter(count-1)
}

  return (
    <div className="mainConatiner">
      <h1 >This is counter app!</h1>
      <h2>This is the counter: <span>{count}</span></h2>
      <button onClick={addVal}>Add Value</button>{" "}
      <button onClick={remVal}>Remove Value</button>
    </div>
  )
}

export default App
