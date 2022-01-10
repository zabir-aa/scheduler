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


 module.exports = {getAppointmentsForDay, getInterview, getInterviewersForDay}