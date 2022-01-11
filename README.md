# Interview Scheduler

The interview scheduler allows a student to book and manage an interview with a mentor. Appointments can be made between 12 PM and 5 PM on 5 workdays of the week. When the application loads, it makes a request to the API server and shows the appointntment and spot information for the selected day. Choosing other days will show corresponding appointments and spots as well. 

![Default View](https://github.com/zabir-aa/scheduler/blob/master/public/images/Screenshots/Default_view.png?raw=true "Interview Scheduler - Default View")

To create an appointment, a student can type their name and select an interviewer from the list of available interviewer for that day, and click on the save action. The save action will make a request to the server to make the change persistent. During the save operation, the appointment spot will show a status indicator.

![New appointment form](https://github.com/zabir-aa/scheduler/blob/master/public/images/Screenshots/Appointment_creation_1.png?raw=true "Create New appointment")
![New appointment form - filled](https://github.com/zabir-aa/scheduler/blob/master/public/images/Screenshots/Appointment_creation_2.png?raw=true " ")


Afterwards, the booked interview will be shown in the designated spot on the selected day.

![New appointment created](https://github.com/zabir-aa/scheduler/blob/master/public/images/Screenshots/Appointment_creation_3.png?raw=true "New appointment")

A user can edit an interview by clicking on the edit icon, which will open up the edit form. The edit form allows the student to change the name and/or selecting a different interviewer, and then clicking save will update the data at the server.

![Edit Appointment](https://github.com/zabir-aa/scheduler/blob/master/public/images/Screenshots/Appointment_creation_2.png?raw=true "Edit Appointment")

If an interview is no longer needed, it can be deleted. Before deleting the interview, the application will ask confirmation from the user and if confirmed, will delete the interview from the server. Meanwhile, a delete status indicator will be shown befor the spot is emptied.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
