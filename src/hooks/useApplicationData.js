import { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = function(){

  const [state,setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })
  
  const setDay = (day) => {setState(prev => ({ ...prev, day }))};
  
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const DAYS = []
    for (const DAY of state.days) {
      if(DAY.appointments.includes(id)) {
        DAYS.push({...DAY, spots: DAY.spots-1}) 
      } else {
        DAYS.push({...DAY})
      }
    }

  
    return axios.put(`http://localhost:8001/api/appointments/${id}`, {interview})
    .then(()=> {
      setState({
        ...state,
        appointments, 
        days: DAYS  
      })
    })
  }
  
  function cancelInterview (id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const DAYS = []
    for (const DAY of state.days) {
      if(DAY.appointments.includes(id)) {
        DAYS.push({...DAY, spots: DAY.spots+1})
      } else {
        DAYS.push({...DAY})
      }
    }
  
    return axios.delete(`http://localhost:8001/api/appointments/${id}`, {interview: null})
    .then(()=> {
      setState({
        ...state,
        appointments, 
        days: DAYS
        })
    })
  }

  useEffect(()=>{
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    })
  },[])
  return {state, setDay, bookInterview, cancelInterview}
}

export default useApplicationData;
