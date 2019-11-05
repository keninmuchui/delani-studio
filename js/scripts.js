$(document).ready(function(){
    $(".road").hide();
    $(".croseover").hover(function(){
        $(this).find(".road").toggle(400);
});
});
