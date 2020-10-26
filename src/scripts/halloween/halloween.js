/*
   Displaying the time left for Halloween
*/

// Making timer dynamic to every year
var currentYear = new Date().getFullYear();
var countDownDateString = "Oct 31, " + currentYear + " 00:00:00";
var waitdate = new Date(countDownDateString).getTime();

//function to update the timer every second

var x=setInterval(function(){
       var rightnow=new Date().getTime();
       var distance=waitdate-rightnow;
       var days=Math.floor(distance/(1000*60*60*24));
       var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
       var min=Math.floor((distance%(1000*60*60))/(1000*60));
       var sec=Math.floor((distance%(1000*60))/1000);
       document.getElementById("countdown").innerHTML=days+"d "+hours+"h "+min+"m "+sec+"s";
       if(distance<0){
                clearInterval(x);
                document.getElementById("countdown").innerHTML="Happy Halloween!";
        }
},1000);


/*
 * Konami code
 *
 */
var allowedKeys = {
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  65: "a",
  66: "b"
};

const konamiCode = [
  "up",
  "up",
  "down",
  "down",
  "left",
  "right",
  "left",
  "right",
  "b",
  "a"
];
let codePosition = 0;

document.addEventListener("keydown", function(e) {
  const key = allowedKeys[e.keyCode];
  const requiredKey = konamiCode[codePosition];

  if (key === requiredKey && ++codePosition === konamiCode.length) {
    executeEasterEgg();
  }
});

function executeEasterEgg() {
  var image = 'url("https://i.giphy.com/media/3o7TKUAOqDm3SQle92/giphy.webp")';

  document.getElementById("jumbotron").style.backgroundImage = image;
  document.getElementById("jumbotron").style.backgroundSize = "cover";
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/**
 * Witch riding broomstick
 */
function myMove() {
  var elem = document.getElementById("floatingwitch");
  var elem1 = document.getElementById("jumbotron");
  var height = elem1.clientHeight;
  var width = elem1.clientWidth;
  var pos = 0;
  var posright = 0;
  var id = setInterval(frame, 12);
  function frame() {
    pos++;
    posright = posright + width / height;
    if (pos >= height || posright >= width) {
      clearInterval(id);
    } else {
      elem.style.top = pos + "px";
      elem.style.left = posright + "px";
    }
  }
}
