var x=50;
function add_numbers_1() {
  document.write (20 + x + "<br>");
}

function add_numbers_2() {
  document.write (x + 100);
}
add_numbers_1();
add_numbers_2(); 

//global

function add_numbers_1() {
  var x=10;
  document.write (20 + x + "<br>");
}

function add_numbers_2() {
  document.write (x + 100);
  }
add_numbers_1();
add_numbers_2(); 

//local


function get_Date() {
  if (new Date().getHours() < 18) {
    document.getElementById("greeting") .innerHTML ="How are you today?";
  }
}


function Age_Function() {
  Age = document.getElementById("Age").value;
  if (Age >= 18) {
    Vote = "You are old enough to vote";
  }
  else {
    Vote = "you are not old enough to vote";
  }
  document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//time function else if

function Time_function() {
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It is morning time!";
  }
  else if (Time >= 12 == Time < 18) {
    Reply = "It is afternoon";
  }
  else {
    Reply = "It is evening time.";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}