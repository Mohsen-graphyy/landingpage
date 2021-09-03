//paste this code under the head tag or in a separate js file.
// Wait for window load
$(window).load(function () {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-slider", {
    type: "loop",
    cover: true,
    heightRatio: 0.6,
    perPage: 1,
    perMove: 1,
  }).mount();
});