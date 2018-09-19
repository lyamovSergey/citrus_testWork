$(function() {


   $('.card').hover(function(){
        $(this).attr('id', 'mouseOn')
        .height('auto');

    },function(){
        $(this).removeAttr('id');
    }); 



   $('.optionOn').on('click', function(){
    $(this).addClass('active-option')
    .siblings()
    .removeClass('active-option');
   });


   $('.card__colors-block div').on('click', function(){
    $(this).addClass('activeColor')
    .siblings()
    .removeClass('activeColor');
    if($(this).hasClass('pink')){
        $('.card__phone').attr('src', 'img/mainPhone2.jpg');
    }else{
        $('.card__phone').attr('src', 'img/mainPhone.jpg');
    };
   });
});

