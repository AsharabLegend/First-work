var secondsInAMinute = 60,
    minutesInAnHour = 60,
    hoursInADay = 24,
    daysInAYear = 364.25;
var seconds, age;

function calculateMyAge() {
  
  age = document.getElementById('age').value;
  if(age == null || age == '') {
    document.getElementById('error').style.opacity = '1';
    document.getElementById('error').innerHTML = 'Please enter your age!';
    setTimeout(function() {
      document.getElementById('error').style.opacity= '0';
    }, 3000);
  }
  seconds = age * secondsInAMinute * minutesInAnHour * hoursInADay * daysInAYear;
  document.getElementById('seconds').innerHTML = seconds;
	document.getElementById('test').innerHTML = age;
  
}

