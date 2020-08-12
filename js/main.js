// Show color div when click to icon
$(".icon").click(function () {
  $(".colors").slideToggle();
});
// change theme colors
var colorLi = $(".colors ul li");
colorLi
  .eq(0)
  .css("backgroundColor", "#f2184f")
  .end()
  .eq(1)
  .css("backgroundColor", "#3da9ca")
  .end()
  .eq(2)
  .css("backgroundColor", "#e6bc21");

colorLi.click(function () {
  $("link[href*='theme']").attr("href", $(this).attr("data-value"));
});

// loading page
$(window).on("load", function () {
  //   to enable scroll in page
  $("body").css("overflow", "auto");
  $(".loading ,.loading .lds-spinner").fadeOut(3000);
});

// Scroll top button
var scrollButton = $(".scroll-top");
$(window).scroll(function () {
  // this here refer to scroll on window
  if ($(this).scrollTop() > 600) {
    scrollButton.show();
  } else {
    scrollButton.hide();
  }
});
// click to top button
scrollButton.click(function () {
  $("html,body").animate({ scrollTop: 0 }, 800);
});

// Nice Scroll
$("html").niceScroll();
