
function toggleMenu() {
  const menu = document.querySelector('.mobile__menu');
  menu.classList.toggle('hidden'); // Toggle the 'hidden' class
}

  
  $(document).ready(function(){
    $('.slider').slick({
        dots: false, // Show dots for navigation
        infinite: true, // Infinite looping
        speed: 500, // Transition speed
        slidesToShow: 2.5, // Number of slides to show
        slidesToScroll: 2, // Number of slides to scroll
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay speed
        responsive: [
            {
                breakpoint: 800, // Screen width at which the settings will change
                settings: {
                    slidesToShow: 2, // Number of slides to show at this breakpoint
                    slidesToScroll: 1 // Number of slides to scroll at this breakpoint
                }
            },
            {
              breakpoint: 580, // Screen width at which the settings will change
              settings: {
                  slidesToShow: 1, // Number of slides to show at this breakpoint
                  slidesToScroll: 1 // Number of slides to scroll at this breakpoint
              }
          }
        ]
    });
});

