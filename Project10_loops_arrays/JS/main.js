//using let and while loop

function Call_Loop() {
  let digit = "";
  let x = 1;
  while (x < 11) {
    digit += "<br>" + x;
    x++;
  }
  document.getElementById("Loop").innerHTML = digit;
}

//for loop

var Instruments = ["drums", "guitar", "piano", "bass", "flute", "trumpet", "violin"];
var Content = "";

function for_loop() {
  
  for (var Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = Content;
}

//array

function cat_pics(){
  let Cat_picture = [];
  Cat_picture[0] = " sleeping";
  Cat_picture[1] = " playing";
  Cat_picture[2] = " eating";
  Cat_picture[3] = " purring";
  document.getElementById("Cat").innerHTML = "in this picture, the cat is" + Cat_picture[2] + ".";
}