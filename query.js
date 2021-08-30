//paste this code under the head tag or in a separate js file.
// Wait for window load
$(window).load(function () {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
   } else {
      // upscroll code
   }
   lastScrollTop = st;
});