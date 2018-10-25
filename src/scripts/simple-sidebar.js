$(function(){
    $("#toggle").on('click', function(){
        $('nav').css('left', '0px')
        $("#toggle").addClass('remove');
    })
    $("#cross").on('click', function(){
        $('nav').css('left', '-250px')
        $("#toggle").removeClass('remove');
    })
});