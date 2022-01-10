import React, { useState, useEffect } from "react";

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode)
    setHistory((prev)=> replace === false ? [...prev, newMode]: [...prev.slice(0,-1),newMode])
  }
  
  function back(){
    setHistory ((prev)=> prev.length > 1 ? prev.slice(0,-1): prev)
  }
  
  return { mode: history[history.length-1], transition, back };
}