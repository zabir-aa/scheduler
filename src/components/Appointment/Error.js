import React from "react";

// The Error view to transition to in case server returns an error during saving, editing or deleting an appointment
// props: message

export default function Error(props) {
  return(
    <main className="appointment__card appointment__card--error">
      <section className="appointment__error-message">
        <h1 className="text--semi-bold">Error</h1>
        <h3 className="text--light">{props.message}</h3>
      </section>
      <img
        className="appointment__error-close"
        src="images/close.png"
        alt="Close"
        onClick= {props.onClose}
      />
    </main>
  )
}