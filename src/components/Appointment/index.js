import React, { useState } from 'react'
import "./styles.scss";
import Header from "./Header";
import Empty from "./Empty";
import Form from './Form';
import Show from "./Show";
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';
import useVisualMode from 'hooks/useVisualMode';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const EDIT = "EDIT";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const ERROR_EDIT = "ERROR_EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {

  const {mode, transition, back} = useVisualMode(props.interview ? SHOW : EMPTY);
  const [userInput, setUserInput] = useState({})
  

  function save(name, interviewer) {
    const interview = {student: name, interviewer};
    setUserInput(interview)
    transition(SAVING)
    props.bookInterview(props.id, interview)
    .then(()=>transition(SHOW))
    .catch((error) => {transition(ERROR_SAVE, true)})
  }


  function edit(name, interviewer) {
    const interview = {student: name, interviewer};
    setUserInput(interview)
    transition(SAVING)
    props.editInterview(props.id, interview)
    .then(()=>transition(SHOW))
    .catch((error) => {transition(ERROR_EDIT, true)})
  }

  
  function deleteInterview() {
    transition(DELETING, true)
    props.cancelInterview(props.id)
    .then(()=> transition(EMPTY))
    .catch((error)=>{
      transition(ERROR_DELETE, true);
    })
  }


  return(
    <article className="appointment">
      <Header
        time = {props.time}
      />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && (
        <Form 
        interviewers={props.interviewers}
        onSave={save} 
        onCancel={back}
        userInput= {userInput}

        />
      )}
      {mode === SAVING && <Status message = {"SAVING"} />}
      {mode === ERROR_SAVE && <Error onClose = {back} message = {"Could not save the appointment!"} />}
      {mode === ERROR_EDIT && <Error onClose={back} message = {"Could not edit the appointment!"} />}
      {mode === ERROR_DELETE && <Error onClose={back} message = {"Could not delete the appointment!"} />}

      {mode === SHOW && (
        <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            onDelete={()=> (transition(CONFIRM))}
            onEdit={()=> (transition(EDIT))}
        />
      )}
      {mode === EDIT && (
        <Form
        interviewers={props.interviewers}
        onSave={edit} 
        onCancel={back}
        student={props.interview.student}
        interviewer={props.interview.interviewer.id}
        userInput= {userInput}
        />
      )}
      {mode === CONFIRM && <Confirm
        message ={"Are you sure you want to delete this appointment ?"}
        onCancel = {back}
        onConfirm = {deleteInterview}
      />}
      {mode === DELETING && <Status message = {"DELETING"} />}

    </article>
  )
}