$(".navbar").css({ backgroundColor: "transparent" });
$(".bar .bi-list").click(function (e) {
  $("nav .navbar-link").toggleClass("slide-navbar");
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".button-top").fadeIn();
  } else {
    $(".button-top").fadeOut();
  }
});
$(".button-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 300);
  return false;
});
