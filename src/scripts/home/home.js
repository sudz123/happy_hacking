//Bad onclick event. Wrap button in ahref intead.
function goToBamsarts(){
  window.location.href = 'bamsarts/index.html';
}

//Bad onclick event. Wrap button in ahref intead.
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

images[0] = "image1.jpg";
images[1] = "image2.jpg";
images[2] = "image3.jpg";


