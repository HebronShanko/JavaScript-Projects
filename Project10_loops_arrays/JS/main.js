function Call_Loop() {
  let digit = "";
  let x = 1;
  while (x < 11) {
    digit += "<br>" + x;
    x++;
  }
  document.getElementById("Loop").innerHTML = digit;
}