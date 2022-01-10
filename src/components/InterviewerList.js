import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "./InterviewerList.scss";


const InterviewerList = function (props) {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <div className="interviewers__list">
        {props.interviewers.map (
          x => {
            return(
              <ul key= {x.id} className="interviewers__list__item">
                <InterviewerListItem
                  key={x.id}
                  name= {x.name}
                  avatar={x.avatar}
                  selected={x.id === props.value}
                  setInterviewer={()=> props.onChange(x.id)}
                />
              </ul>
            )
          }
        )}
      </div>
    </section>
  )
}

export default InterviewerList;