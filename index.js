$(document).ready(function(){
$(".accordion-panel").hide();
});

$(".accordion-control").on('click', function(){
 $(".accordion-panel").slideToggle();
});

