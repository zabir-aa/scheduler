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
  const matchedDay = state.days.filter(d=> d.name === day);
  if (state.days.length === 0 || matchedDay.length === 0){
    return AppointmentsForDay;
  };
  matchedDay[0].appointments.forEach(element => {
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


 module.exports = {getAppointmentsForDay, getInterview}