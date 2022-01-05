import React from "react";
import DayListItem from "components/DayListItem.js";
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
              <li key= {x.id} className="interviewers__list__item">
                <InterviewerListItem
                  key={x.id}
                  name= {x.name}
                  avatar={x.avatar}
                  selected={x.id === props.value}
                  setInterviewer={()=> props.onChange(x.id)}
                />
              </li>
            )
          }
        )}
      </div>
    </section>
  )
}

export default InterviewerList;