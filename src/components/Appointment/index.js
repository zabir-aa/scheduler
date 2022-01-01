import React from "react";
import "./styles.scss";

export default function Appointment(props) {
  return(
    <article className="appointment">
      {props.time? "" : "No"} Appointment{props.time? " at":"s"} {props.time}
    </article>
  )
}