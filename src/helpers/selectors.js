// SELECTOR FUNCTION 1
// Returns the array of appointment objects from state for the selected day
 
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


// SELECTOR FUNCTION 2
// With an input of the brief interview object from an appointment, returns a detailed interview object from state

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


// SELECTOR FUNCTION 3
// Returns the array of interviewer objects from state, available on the selected day

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