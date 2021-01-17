function updateClock() {
  // Get the current date
  let currentTime = new Date();

  // Extract hour, minute and seconds from the date
  let currentHour = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();

  // Pad 0 if minute or second is less than 10 (single digit)
  currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds;

  // Convert railway clock to AM/PM clock
  currentHour = (currentHour > 12) ? currentHour - 12: currentHour;
  currentHour = (currentHour == 0) ?  12: currentHour;

  // Choose AM/PM as per the time of the day
  let timeOfDay = (currentHour < 12) ? "AM": "PM";

  // Prepare the time string from hours, minutes and seconds
  let currentTimeStr = currentHour + ":" + currentMinutes
  + ":" + currentSeconds + " " + timeOfDay;

  // Insert the time string inside the DOM
  let timeRuning = document.getElementById('timeRuning');
  timeRuning.style.color = 'red';
  timeRuning.style.float = 'right';
  timeRuning.innerHTML = `Live: ${currentTimeStr}`;
}
updateClock();



let submitAlarm = document.getElementById('submitAlarm');
console.log(submitAlarm);

// Add an event listener to the submit button
submitAlarm.addEventListener('click', setAlarm);


var audio = new Audio('songs/alarm.mp3');


// function to play the alarm ring tone
function ringBell() {
  audio.play();
}

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
  e.preventDefault();
  let alarm = document.getElementById('alarm');
  let alarmDate = new Date(alarm.value);

  console.log(`Runing Time for ${new Date()}...`);
  console.log(`Seting Alarm for ${alarmDate}...`);

  let now = new Date();
  let timeToAlarm = alarmDate - now;
  if (timeToAlarm >= 0) {
    setTimeout(function() {
      console.log('Ringinf now...');
      ringBell();
    }, timeToAlarm);
  }
}