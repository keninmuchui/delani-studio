$(document).ready(function(){
    $(".road").hide();
    $(".croseover").hover(function(){
        $(this).find(".road").toggle(400);
});
});

$(".click0").click(function(){
    $(".hide0").slideToggle(1000);
    $(".show0").slideToggle(1200);
  });