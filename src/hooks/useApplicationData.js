import { useState, useEffect } from "react";
import axios from "axios";

const useApplicationData = function(){ // Wrapper function to carry data management functions and state

  const [state,setState] = useState({ // initial declaration of state with default values
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })
  
  const setDay = (day) => {setState(prev => ({ ...prev, day }))}; // Updates state whaen a new day is selected
  
  function bookInterview(id, interview) {  //function executes saving of a new appointment
    const appointment = { // creates an appointment object with new interview data
      ...state.appointments[id],
      interview: { ...interview }
    };
  
    const appointments = { // creates an appointments object adding the new appointment
      ...state.appointments,
      [id]: appointment
    };

    const DAYS = []

    for (const DAY of state.days) { // creates a new days Array with updated spots
      if(DAY.appointments.includes(id)) {
        DAYS.push({...DAY, spots: DAY.spots-1}) 
      } else {
        DAYS.push({...DAY})
      }
    }

    return axios.put(`http://localhost:8001/api/appointments/${id}`, {interview}) // async put request to database server
    .then(()=> {
      setState({
        ...state,
        appointments, 
        days: DAYS  
      })
    })
  }

  function editInterview(id, interview) {  // function executes update on an existing appointment
    const appointment = {  // creates an appointment object with updated interview data
      ...state.appointments[id],
      interview: { ...interview }
    };
  
    const appointments = {  // creates an appointments object with updated appointment
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`http://localhost:8001/api/appointments/${id}`, {interview})  // async put request to database server
    .then(()=> {
      setState({
        ...state,
        appointments,
      })
    })
  }
  
  function cancelInterview (id) {  // function executes removal on an existing appointment
    const appointment = {  // creates an appointment object with null interview data
      ...state.appointments[id],
      interview: null
    };
    
    const appointments = {  // creates an appointments object with updated appointment
      ...state.appointments,
      [id]: appointment
    };

    const DAYS = []
    for (const DAY of state.days) {  // creates a new days Array with updated spots
      if(DAY.appointments.includes(id)) {
        DAYS.push({...DAY, spots: DAY.spots+1})
      } else {
        DAYS.push({...DAY})
      }
    }
  
    return axios.delete(`http://localhost:8001/api/appointments/${id}`, {interview: null})  // async delete request to database server
    .then(()=> {
      setState({
        ...state,
        appointments, 
        days: DAYS
        })
    })
  }

  useEffect(()=>{  // makes 3 async get requests, and updates the state with all received data at once via primise.all
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    })
  },[])

  return {state, setDay, bookInterview, editInterview, cancelInterview}
}

export default useApplicationData;
