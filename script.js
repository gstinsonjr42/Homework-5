```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

//display time at top using div and moments.js
$0.textContent = moment().format("MMM Do YY");

//set time blocks for standard business hours

//color code each time block
//if time block is done set red
//if time block is present set blue 
// if time block is future set green

// allow me to click on time blocks
//when i click on a certain time block it allows me to enter a specific to do for that time block
//when i click save for that event time block the event is saved yo local storage