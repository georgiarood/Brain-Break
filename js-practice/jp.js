document.getElementById('timer').innerHTML =

  03 + ":" + 00;

startTimer();



function startTimer() {

  var presentTime = document.getElementById('timer').innerHTML;

  var timeArray = presentTime.split(/[:]+/);

  var m = timeArray[0];

  var s = checkSecond((timeArray[1] - 1));

  if(s==59){m=m-1}

  //if(m<0){alert('timer completed')}



  document.getElementById('timer').innerHTML =

    m + ":" + s;

  setTimeout(startTimer, 1000);

}



function checkSecond(sec) {

  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10

  if (sec < 0) {sec = "59"};

  return sec;

}




var cardContainer = $('.card-container');

var submit = $('.user-input');

submit.on("click",createNewItem);

function createNewItem () {

  var toDo = $('.name').val();

  // items.push(toDo);

  cardContainer.append

  (`<p class="anItem">

<div class= "to-do-card">

<p> ${toDo} </p>

`);

}
