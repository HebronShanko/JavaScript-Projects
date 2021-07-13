function slice_Method() {
  var Sentence = "All work and no play makes Johnny a dull boy.";
  var Section = Sentence.slice(27,33);
  document.getElementById("Slice").innerHTML = Section;
}

//tostring

function string_Method() {
  var x=190;
  document.getElementById("Numbers_to_string").innerHTML =x.toString();
}

//topreciosion

function precision_Method () {
  var x = 12938.30129846378
  document.getElementById("Precision").innerHTML =x.toPrecision(8);
}


//concat

function full_Sentence() {
  var p1 = "I have ";
  var p2 = " 50 bucks";
  var p3 = " but sill broke";
  var whole_sentence = p1.concat(p2,p3);
  document.getElementById("concat").innerHTML =whole_sentence;
}