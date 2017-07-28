var main = document.getElementById('main');
var h1 = document.getElementById('time');
var hr12 = document.getElementById('12hour');
var hr24 = document.getElementById('24hour');


// Get time from computer and convert hours, mins, and secs to rgb values
function time() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var secs = date.getSeconds();

  var arr = [hour, min, secs].map(function(num){
    return num < 10 ? '0' + num : String(num);
  });

  hour = arr[0] * 10;
  min = arr[1] * 4;
  secs = arr[2] * 4;

  return hour + ', ' + min + ', ' + secs;
}


// Function to display time as 24 hour clock
function militaryTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var secs = date.getSeconds();

  var arr = [hour, min, secs].map(function(num){
    return num < 10 ? '0' + num : String(num);
  });

  hour = arr[0];
  min = arr[1];
  secs = arr[2];

  return hour + ':' + min + ':' + secs;
}


// Function to display time as 12 hour clock
function standardTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var secs = date.getSeconds();

  if (hour > 12) {
    hour = hour - 12;
  } else if (hour == '00') {
    hour = 12
  }

  var arr = [min, secs].map(function(num){
    return num < 10 ? '0' + num : String(num);
  });

  min = arr[0];
  secs = arr[1];

  return hour + ':' + min + ':' + secs;
}


// Output to page function
function output(time, format) {
  var color = 'rgba(' + time + ', 1)';
  main.style.backgroundColor = color;
  h1.textContent = format;
}


// Initialize function
function init() {
  var tick = setInterval(function(){output(time(), standardTime())}, 1000);
}


init();
