// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)


function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('blue', false) //removes the blue
  evt.target.classList.toggle('invisible', false) //removes the white
  evt.target.classList.toggle('green') //adds the green
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE
function makeBlue(evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green', false) //removes the green
  evt.target.classList.toggle('invisible', false) //removes the white
  evt.target.classList.toggle('blue') //adds the blue
  updateCounts()
}

// CREATE FUNCTION hide HERE
function hide(evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green', false) //removes the green
  evt.target.classList.toggle('blue', false) //removes the blue
  evt.target.classList.toggle('invisible') //adds the white
  updateCounts()
}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }

  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS

  var blueCount = document.getElementsByClassName("blue").length;
  var greenCount = document.getElementsByClassName("green").length;
  var invisibleCount = document.getElementsByClassName("invisible").length;

  totals.blue = blueCount
  totals.green = greenCount
  totals.invisible = invisibleCount
  
  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
