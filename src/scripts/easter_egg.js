/*
 * Konami code
 *
 */
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var codePosition = 0;

document.addEventListener('keydown', function(e) {
  var key = allowedKeys[e.keyCode];
  var requiredKey = konamiCode[codePosition];

  if (key === requiredKey) {
    codePosition++;

    if (codePosition === konamiCode.length) {
      executeEasterEgg();
      codePosition = 0;
    }
  } else {
    codePosition = 0;
  }
});

function executeEasterEgg() {
  var image = 'url("https://i.giphy.com/media/3o7TKUAOqDm3SQle92/giphy.webp")';

  document.getElementById('jumbotron').style.backgroundImage = image;
  document.getElementById('jumbotron').style.backgroundSize = 'cover';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
