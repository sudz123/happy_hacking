function goToHalloween(){
  window.location.href = 'halloween.html';
}

function animatedScroll(elem) {
    $('html, body').animate({
        scrollTop: $(elem).offset().top
    }, 800);
}
