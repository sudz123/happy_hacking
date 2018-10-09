// function display the next image from the array
function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function goToHalloween(){
  window.location.href = 'haloween.html';
}

function animatedScroll(elem) {
    $('html, body').animate({
        scrollTop: $(elem).offset().top
    }, 800);
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("startPicture").style.backgroundImage = "url(./images/home/" + images[x] + ")";
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

var images = [], x = -1;
images[0] = "hacktoberfest2018.png";
images[1] = "hacktoberfest2017.jpeg";
images[2] = "hacktoberfest2016.jpg";


