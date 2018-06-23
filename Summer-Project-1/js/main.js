$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    $('nav').css('height','75px');
  } else {
    $('nav').css('height','100px');
  }
});

$(window).scroll(function () {
if ($(window).scrollTop() >= 50) {
$('nav').css('background','black');
} else {
$('nav').css('background','transparent');
}
});
