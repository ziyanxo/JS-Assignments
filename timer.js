let mins = prompt("Please Enter Minutes. Enter 0 If you don't want Mins.");
let Secs = prompt("Please Enter Seconds.");

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("timer").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ";