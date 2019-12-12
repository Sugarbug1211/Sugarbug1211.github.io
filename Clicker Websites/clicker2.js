var brownie = 0;
var brownieButton = document.getElementById("brownieButton");
var brownieDisplay = document.getElementById("brownieDisplay")

brownieButton.onclick = function() {
brownie = brownie + 5;
brownieDisplay.innerHTML = brownie + " Brownies";
}


var muffin = 0;
var muffinButton = document.getElementById("muffinButton");
var muffinDisplay = document.getElementById("muffinDisplay")

muffinButton.onclick = function() {
muffin = muffin + 3;
muffinDisplay.innerHTML = muffin + " Muffins";
}


var cookie = 0;
var cookieButton = document.getElementById("cookieButton");
var cookieDisplay = document.getElementById("cookieDisplay")

cookieButton.onclick = function() {
cookie = cookie+ 10;
cookieDisplay.innerHTML = cookie + " Cookies";
}


var doughnut = 0;
var doughnutButton = document.getElementById("doughnutButton");
var doughnutDisplay = document.getElementById("doughnutDisplay")

doughnutButton.onclick = function() {
doughnut = doughnut + 6;
doughnutDisplay.innerHTML = doughnut + " Doughnuts";
}


var baker = 0;
var bakerButton = document.getElementById("bakerButton");
var bakerDisplay = document.getElementById("bakerDisplay")

bakerButton.onclick = function() {
  if (brownie >= 1) {
    brownie -= 10;
    baker++;
    brownieDisplay.innerHTML = Math.round(brownie) + " Brownies";
    bakerDisplay.innerHTML = Math.round(baker) + " Bakers";
    }
  }
  setInterval(function() {
    brownie += baker / 1;
    bakerDisplay.innerHTML = Math.round(baker) + " Bakers";
    brownieDisplay.innerHTML = Math.round(brownie) + " Brownies";
  }, 1);
