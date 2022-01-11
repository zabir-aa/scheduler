import { useState } from "react";

export default function useVisualMode(initial) {

  const [history, setHistory] = useState([initial]); // Keeps a history of view modes for the appointment component

  // function to transition from one mode to the next, Replace = true replaces the last mode in history with the new one
  function transition(newMode, replace = false) { 
    setHistory((prev)=> replace === false ? [...prev, newMode]: [...prev.slice(0,-1),newMode])
  }
  
  // function to return to the last mode in history
  function back(){ 
    setHistory ((prev)=> prev.length > 1 ? prev.slice(0,-1): prev)
  }

  return { mode: history[history.length-1], transition, back }; // mode is returned as an element from history
}