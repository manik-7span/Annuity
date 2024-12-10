/*--search button--*/
document.getElementById('search-button').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input').value;
    if (searchInput) {
      console.log('Searching for:', searchInput);
      // You can replace this with actual search logic, like:
      // window.location.href = `search-results.html?q=${searchInput}`;
    } else {
      alert('Please enter a search term.');
    }
  });
  /*-burger icon-*/
  function toggleMenu() {
    const navInfo = document.querySelector('.hero__menu');
    navInfo.classList.toggle('.hero__nav-list');
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

