import React, { useState, useEffect } from "react";
import axios from "axios";
import "components/Application.scss";
import "components/Appointment"
import DayList from "./DayList";
import Appointment from "components/Appointment/index";
import { getAppointmentsForDay, getInterview } from "helpers/selectors";



export default function Application(props) {

  const [state,setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  const setDay = (day) => {setState(prev => ({ ...prev, day }))};

  useEffect(()=>{
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    })
  },[])

  const dailyAppointments = getAppointmentsForDay(state, state.day)

  const schedule = state.appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    return (
      <main className="layout">
        <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList
          days={state.days}
          value={state.day}
          onChange={setDay}
        />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
        </section>
        <section className="schedule">
          {dailyAppointments.map(appointment => { 
            return (
              <Appointment
                key={appointment.id} 
                {...appointment}
                interview={interview}
                />
              )
            }) 
          }
          <Appointment 
            key= "last"
            time= "5pm" />
        </section>
      </main>
    );
  });
}
  
