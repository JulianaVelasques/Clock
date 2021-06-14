setInterval(
  setClock,
  1000
); /*This is method of the HTML DOM Window object. setInterval(function, milliseconds). It repeats the execution os the function continuously*/

const hourPointer = document.querySelector('[data-hour-pointer]'); //Here we call the variables that we'll use to set rotation.
const minutePointer = document.querySelector('[data-minute-pointer]'); //The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors.
const secondPointer = document.querySelector('[data-second-pointer]');

//This function will give the current Date. "new Date()" is a constructor from JS Date objects, these objects represent a single moment in time.
//"new Date() - When called as a constructor, returns a new Date object"
function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60; //This is an instance methods "Date.prototype.getSeconds()" - Returns the seconds (0–59) in the specified date according to local time. /60 because theres 60s in minute, so we now how far to rotate our secs pointer
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  setRotation(secondPointer, secondsRatio);
  setRotation(minutePointer, minutesRatio);
  setRotation(hourPointer, hoursRatio);
}

function setRotation(element, rotationRation) {
  element.style.setProperty('--rotation', rotationRation * 360);
}

setClock();
