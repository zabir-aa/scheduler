import React, { useState } from 'react';
import Button from "../Button";
import InterviewerList from "../InterviewerList";


// The Form view to create / edit an appointment
// props: interviewers, onSave, onCancel, student, interviewer, userInput

export default function Form(props) {

  const [student, setStudent] = useState(props.userInput.student || props.student|| "");
  const [interviewer, setInterviewer] = useState(props.userInput.interviewer || props.interviewer || null);

  // const reset = () => {
  //   setStudent("");
  //   setInterviewer(null);
  // }

  return(
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event)=>{setStudent(event.target.value)}}
          />
        </form>
        <InterviewerList 
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button danger onClick={props.onCancel}>Cancel</Button>
        <Button confirm onClick={()=> {
          if (student.length > 0 && interviewer != null) {
          props.onSave(student,interviewer)}
          else {window.alert("Enter student name and select an interviewer please!")}}}
        >
          Save
        </Button>
      </section>
      </section>
    </main>
  )
}