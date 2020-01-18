let mainInterval = 0;
// initializing digit units to 0
let timerSeconds = 0;
let timerTenths = 0;
let timerHundreths = 0;
let timerMS = 0;

// calling startbutton function
function timerStart() {
  document.getElementById("startTimerButton").disabled = true;   //disabling the start button once it onclick start button 
  clearTimer();
  mainInterval = window.setInterval(Timer, 10); // using setInterval we are calling digital timer function with the interval of 10 ms
}

function timerReset() {
  document.getElementById("startTimerButton").disabled = false; //enable start button on 
  clearTimer();
}

function clearTimer() {
  window.clearInterval(mainInterval);
  document.getElementById("secondOnes").textContent = "-";
  document.getElementById("secondTens").textContent = "-";
  document.getElementById("msHundreds").textContent = "-";
  document.getElementById("msTens").textContent = "-";
  document.querySelector("div.digits").style.color = "";
  timerSeconds = 0;
  timerTenths = 0;
  timerHundreths = 0;
  timerMS = 0;
}

function Timer() {
  timerMS += 10; //incrementing ms by 10

  if (timerMS % 1000 === 0) {  //checking if ms reaches to 1000 increment sec to 1
    timerSeconds += 1;

    if (timerSeconds === 10) {  // if sec becomes 10 set the digit position like below
      window.clearInterval(mainInterval);
      document.getElementById("secondTens").textContent = 1;
      document.getElementById("secondOnes").textContent = 0;
      document.getElementById("msHundreds").textContent = 0;
      document.getElementById("msTens").textContent = 0;
      document.querySelector("div.digits").style.color = "red";    //style add to timer digits
      document.getElementById("startTimerButton").disabled = false;  //enabled the start button
      timerSeconds = 0;  // set the values to zero again 
      timerTenths = 0;
      timerHundreths = 0;
      timerMS = 0;

      return;
    }

    document.getElementById("secondOnes").textContent = timerSeconds;
  }

  if (timerMS % 100 === 0) {   
    timerHundreths += 1;

    if (timerHundreths === 10) { 
      timerHundreths = 0;
    }

    document.getElementById("msHundreds").textContent = timerHundreths; //assigned timerhundred value to mshundred
  }

  if (timerMS % 10 === 0) { 
    timerTenths += 1;

    if (timerTenths === 10) {
      timerTenths = 0;
    }

    document.getElementById("msTens").textContent = timerTenths;
  }
}