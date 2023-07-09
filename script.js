$(window).on('load', function() {
  var image = $('#cover');
  image.css('opacity', 1);
});





$(window).on('load', function() {
  var image = $('#profile');
  image.css('opacity', 1);
});





$(window).on('load', function() {
  var image = $('#resumeEmoji');
  image.css('opacity', 1);
});






$(window).on('load', function() {
  var image = $('#profilePicture');
  image.css('opacity', 1);
});





$(window).on('load', function() {
  var image = $('#mobileCoverPicture');
  image.css('opacity', 1);
});





$(document).ready(function() {
    $(window).scroll(function() {
        $(".fade-in").each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            var fadeOffset = 100; 

            if (
                scroll + windowHeight > position + fadeOffset &&
                scroll < position + $(this).outerHeight() - fadeOffset
            ) {
                $(this).addClass("visible");
            } else {
                $(this).removeClass("visible");
            }
        });
    }).scroll(); 
});







$(document).ready(function() {
    $(".content").scroll(function() {
      var containerTop = $(".content").offset().top;
      var containerHeight = $(".content").height();
  
      $(".fade-in").each(function() {
        var elemTop = $(this).offset().top - containerTop;
  
        if (elemTop < containerHeight && elemTop > -$(this).height()) {
          $(this).addClass("visible").removeClass("fade-out");
        } else {
          $(this).removeClass("visible").addClass("fade-out");
        }
      });
    }).scroll(); 
  });
  
  
  
  
  
  