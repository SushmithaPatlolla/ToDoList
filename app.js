$('ul').on('click', 'li', function(){
    $(this).toggleClass("completed")
})

$('ul').on('click', 'span', function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
 event.stopPropagation();

})
$('input').keypress(function(event){
if(event.which === 13){
    var list = $(this).val();
    $(this).val("")
    $('ul').append("<li><span><i class='fa fa-trash'></i></span> "+ list + "</li>")
}
})
$('.fa-plus').click(function(){
    
    $('input').fadeToggle()
})