$(function(){
    $('.add').on('click', addToDo);
});

// To Add todo 
function addToDo(){
    
    var text = $('#newToDo').val();
    if(!text){
        return;
    }
    $('#newToDo').val('');
    createCard(text);
    setTimeout(function(){
        $('.newCard').removeClass('newCard');
    }, 10);
}

// To create To do card
function createCard(content){
    var text = '<div class="text">' + content + '</div>';
    var img = '<img src="images/todolist/delete.png" alt="" class="delete"><img src="images/todolist/001-right.png" alt="" class="check">';
    var card =  '<div class="card newCard">' + text + img + '</div>';
    $(card).prependTo('#toDo').find('.check').on('click', doneCard).siblings('.delete').on('click', removeCard);
}

// To Remove Existing card
function removeCard(){
    var x = this;
    $(this).parent().addClass('removeCard');

    setTimeout(function(){
        $(x).parent().remove();
    }, 1000);
}

// To add todo to the done catagody
function doneCard(){
    var x = $(this).parent().html();
    $(this).parent().remove();
    
    $('#done').prepend('<div class="card doneCard newCard">' + x + '</div>');
    setTimeout(function(){
        $('.newCard').removeClass('newCard');
    }, 10);
    $('.delete').on('click', removeCard);
}