import $ from 'jquery';

// responsive $ navigation 
$(document).ready(function () {

  // toggle the menu when the title is clicked on
  $("#mainNavTitle").click(function () {
    $("nav > ul").slideToggle();
    return false;
  });

  var loadWidth = $(window).width();

  //hide and show the nav when the window is resized above or below 800px
  $(window).resize(function () {

    //make sure that this doesn't run on vertical resize
    if (loadWidth != $(window).width()) {

      if ($(window).width() > 801) {
        $("nav > ul").css('display', 'block');
      }

      if ($(window).width() <= 800) {
        $("nav > ul").css('display', 'none');
      }
    }
  });
});
