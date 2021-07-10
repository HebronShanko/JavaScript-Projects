//myfirst dictionary

function dictionary() {
  let Sports = {
    type:"basketball",
    team:"lakers",
    league:"NBA",
    playerName:"lebronJames",
    titles:17,
  };
  document.getElementById("Dictionary").innerHTML = Sports.team;
}

//deleting using words

function dictionary() {
  let Sports = {
    type:"basketball",
    team:"lakers",
    league:"NBA",
    playerName:"lebronJames",
    titles:17,
  };
  delete Sports.team;
  document.getElementById("Dictionary").innerHTML = Sports.team;
}