// const state = {
//   days: [
//     {
//       id: 1,
//       name: "Monday",
//       appointments: [1, 2, 3]
//     },
//     {
//       id: 2,
//       name: "Tuesday",
//       appointments: [4, 5]
//     }
//   ],
//   appointments: {
//     "1": { id: 1, time: "12pm", interview: null },
//     "2": { id: 2, time: "1pm", interview: null },
//     "3": {
//       id: 3,
//       time: "2pm",
//       interview: { student: "Archie Cohen", interviewer: 2 }
//     },
//     "4": { id: 4, time: "3pm", interview: null },
//     "5": {
//       id: 5,
//       time: "4pm",
//       interview: { student: "Chad Takahashi", interviewer: 2 }
//     }
//   }
// };


 const getAppointmentsForDay = function(state, day) {
  let AppointmentsForDay=[];
  const selectedDayArray = state.days.filter(d=> d.name === day);
  if (state.days.length === 0 || selectedDayArray.length === 0){
    return AppointmentsForDay;
  };
  selectedDayArray[0].appointments.forEach(element => {
    AppointmentsForDay.push(state.appointments[element])
  });
  return AppointmentsForDay;
};



const getInterview = function(state, interview) {
  if (interview === null){
    return null;
  }
  return(
    {
      "student": interview.student,
      "interviewer": {
        "id": interview.interviewer,
        "name": state.interviewers[interview.interviewer].name,
        "avatar": state.interviewers[interview.interviewer].avatar
      }
    }
  )
}


const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3],
      interviewers: [1, 3]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5],
      interviewers: [2]
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  },
  interviewers: {
    "1": {  
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    },
    "3": {
      id: 3,
      name: "Tori Twin",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    }
  }
};

const getInterviewersForDay = function(state, day) {
  let InterviewersForDay=[];
  const selectedDayArray = state.days.filter(d=> d.name === day);
  if (state.days.length === 0 || selectedDayArray.length === 0){
    return [];
  } else {
    selectedDayArray[0].interviewers.forEach(element => {
      InterviewersForDay.push(state.interviewers[element])
    });
  }
  return InterviewersForDay;
};



// const getInterviewersForDay = function(state, day) {
//   let InterviewersForDay= [];
//   let AppointmentIDsForDay = [];
//   let interviewerIDsForDay = [];
  
//   const selectedDayArray = state.days.filter(d=> d.name === day)[0];


//   if(selectedDayArray.appointments.length != 0) {
//     AppointmentIDsForDay = selectedDayArray.appointments
//   }

//   AppointmentIDsForDay.forEach(element => {
//     if(state.appointments[element].interview != null) {
//       interviewerIDsForDay.push(state.appointments[element].interview.interviewer)}})
  
//   interviewerIDsForDay.forEach(element => {
//     InterviewersForDay.push(state.interviewers[element])
//   })
    
//   return InterviewersForDay;
// };

// console.log(getInterviewersForDay(state,"Wed"));




 module.exports = {getAppointmentsForDay, getInterview, getInterviewersForDay}