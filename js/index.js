$(function(){
    $('h1').html('I want to sleep!!!!!!!!!!!!!!!!!!!!!');
    $('button').click(clickMe);
})
function clickMe(e) {
    ($('h1').fadeToggle(2000));
}