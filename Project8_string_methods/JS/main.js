function slice_Method() {
  var Sentence = "All work and no play makes Johnny a dull boy.";
  var Section = Sentence.slice(27,33);
  document.getElementById("Slice").innerHTML = Section;
}