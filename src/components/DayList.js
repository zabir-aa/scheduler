import React from "react";
import DayListItem from "components/DayListItem.js";


export default function DayList(props) {
  const DAYS = props.days.map (
    x => {
      return(
      <ul key= {x.id}>
        <DayListItem
        name= {x.name}
        spots={x.spots}
        selected={x.name === props.value}
        setDay={props.onChange} />
      </ul>
      )
    }
  )
  return DAYS
}