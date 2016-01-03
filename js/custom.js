$(document).ready(showtime);

function showtime(){
    //alert('hi');
    $(".button-collapse").sideNav();
    $('.modal-trigger').leanModal();
    $(".collapsible-header").click(function() {
        window.scrollTo(0, 0);
    })
}