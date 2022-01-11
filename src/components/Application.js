import React from "react";
import "components/Application.scss"; // Style
import DayList from "./DayList"; // Component carries the list of Days
import Appointment from "components/Appointment/index"; // Imports the Appointment component
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";

export default function Application(props) {

  const {
    state, // The state object of the application, contains states for "day", "days", "appointments" & "interviews"
    setDay, // Updates state whaen a new day is selected
    bookInterview, //function executes saving of a new appointment
    editInterview, // function executes update on an existing appointment
    cancelInterview // function executes removal on an existing appointment
  } = useApplicationData(); // Custom hook: contains data management functions
  

  const dailyAppointments = getAppointmentsForDay(state, state.day); // Returns the array of appointment objects from state for the selected day
  const interviewers = getInterviewersForDay(state, state.day); // Returns the array of interviewer objects from state, available on the selected day
  
  const schedule = dailyAppointments.map((appointment) => {     // Maps all appointment objects in an array
    
    const interview = getInterview(state, appointment.interview); // With an input of the brief interview object from an appointment, returns a detailed interview object from state
    
    return (
      <Appointment
        key={appointment.id}
        {...appointment}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        editInterview={editInterview}
        cancelInterview={cancelInterview}
      />
    );
  })


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
        {schedule}
        <Appointment 
          key= "last"
          time= "5pm"
        />
      </section>
    </main>
  );
}
  
