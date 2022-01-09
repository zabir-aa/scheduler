import React, { Fragment } from 'react'
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from './Form';
import useVisualMode from 'hooks/useVisualMode';
import Status from './Status';
import Confirm from './Confirm';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const EDIT = "EDIT";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";


export default function Appointment(props) {
  console.log(props)
  const {mode, transition, back} = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
    .then(()=>transition(SHOW));
  }

  function deleteInterview() {
    transition(DELETING, true)
    props.cancelInterview(props.id)
    .then(()=> transition(EMPTY))
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

        />
      )}
      {mode === SAVING && <Status message = {"SAVING"} />}
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
        onSave={save} 
        onCancel={back}
        student={props.interview.student}
        interviewer={props.interview.interviewer.id}
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