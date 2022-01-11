# Interview Scheduler

The interview scheduler allows a student to book and manage an interview with a mentor. Appointments can be made between 12 PM and 5 PM on 5 workdays of the week. When the application loads, it makes a request to the API server and shows the appointntment and spot information for the selected day. Choosing other days will show corresponding appointments and spots as well. 

![Alt text](public/images/Screenshots/Screen Shot 2022-01-11 at 12.24.13 AM.png?raw=true "Interview Scheduler - Default View")

To create an appointment, a student can type their name and select an interviewer from the list of available interviewer for that day, and click on the save action. The save action will make a request to the server to make the change persistent. During the save operation, the appointment spot will show a status indicator.

![Alt text](/relative/path/to/img.jpg?raw=true "Optional Title")

Afterwards, the booked interview will be shown in the designated spot on the selected day.

![Alt text](/relative/path/to/img.jpg?raw=true "Optional Title")

A user can edit an interview by clicking on the edit icon, which will open up the edit form. The edit form allows the student to change the name and/or selecting a different interviewer, and then clicking save will update the data at the server.

![Alt text](/relative/path/to/img.jpg?raw=true "Optional Title")

If an interview is no longer needed, it can be deleted. Before deleting the interview, the application will ask confirmation from the user and if confirmed, will delete the interview from the server. Meanwhile, a delete status indicator will be shown befor the spot is emptied.

![Alt text](/relative/path/to/img.jpg?raw=true "Optional Title")
![Alt text](/relative/path/to/img.jpg?raw=true "Optional Title")


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
