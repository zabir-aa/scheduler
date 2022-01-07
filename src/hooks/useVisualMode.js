import React, { useState, useEffect } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  // let modeHistory = {modes:[initial], counter: 0} //my attempt

  function transition(newMode, replace = false) {
    // modeHistory.modes.push(newMode) && modeHistory.counter ++ ; // my attempt
    setMode(newMode)
    setHistory((prev)=> replace === false ? [...prev, newMode]: [...prev.slice(0,-1),newMode])
  }
  function back(){
    // setMode(modeHistory.modes[(modeHistory.counter)-1]) // my attempt
    setHistory ((prev)=> prev.length >1 ? prev.slice(0,-1): prev)
    // setMode(history[-0])
  }

  return { mode: history[history.length-1], transition, back };
}