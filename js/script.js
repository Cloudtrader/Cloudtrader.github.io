jQuery(function() {

$(".red-box").fadeOut(2000);
$(".green-box").fadeOut(2000);
$(".green-box").fadeIn(2000);
$(".red-box").fadeIn(2000);
$(".red-box").slideDown(2000);
$(".blue-box").slideUp(2000);
$(".blue-box").slideDown(2000);
$(".red-box").fadeTo(1500,0.5);

$(".blue-box").animate({}
	"margin-left" :"+=200px",
	"opacity"



});

$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut(2000);
  //   $(".green-box").fadeOut(2000);
  //   $(".red-box").fadeIn(2000);
  //   $(".red-box").fadeTo(1000,0.5);
});