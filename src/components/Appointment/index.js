import React, { Fragment } from 'react'
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";



export default function Appointment(props) {
  return(
    <article className="appointment">
      <Header
        time = {props.time}
      />
      {props.interview ? 
      <Show {...props.interview} /> : <Empty />}
      {/* {props.time? "" : "No"} Appointment{props.time? " at":"s"} {props.time} */}
    </article>
  )
}