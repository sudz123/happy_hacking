function goToHalloween(){
  window.location.href = 'halloween.html';
}

function animatedScroll(elem) {
    $('html, body').animate({
        scrollTop: $(elem).offset().top
    }, 800);
}
 $(document).ready(function () {

    //select the POPUP FRAME and show it
    $("#popup").hide().fadeIn(1000);

    //close the POPUP if the button with id="close" is clicked
    $("#close").on("click", function (e) {
        e.preventDefault();
        $("#popup").fadeOut(1000);
    });

})