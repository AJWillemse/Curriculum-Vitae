$(window).on('load', function() {
  var image = $('#cover');
  image.css('opacity', 1);
});







$(window).on('load', function() {
  var image = $('#profile');
  image.css('opacity', 1);
});







$(document).ready(function() {
  $(window).scroll(function() {
      $(".fade-in").each(function() {
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          var fadeOffset = 100; // Adjust this value as needed

          if (scroll > position - windowHeight + fadeOffset && scroll < position + $(this).outerHeight() - fadeOffset) {
              $(this).addClass("visible");
          } else {
              $(this).removeClass("visible");
          }
      });
  }).scroll(); // Trigger scroll event on page load
});