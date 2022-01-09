import React, { useState, useEffect } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  // let modeHistory = {modes:[initial], counter: 0} //first attempt

  function transition(newMode, replace = false) {
    // modeHistory.modes.push(newMode) && modeHistory.counter ++ ; // first attempt
    setMode(newMode)
    setHistory((prev)=> replace === false ? [...prev, newMode]: [...prev.slice(0,-1),newMode])
  }
  function back(){
    // setMode(modeHistory.modes[(modeHistory.counter)-1]) // first attempt
    setHistory ((prev)=> prev.length > 1 ? prev.slice(0,-1): prev)
    // setMode(history[-0])
  }
console.log (history);
  return { mode: history[history.length-1], transition, back };
}