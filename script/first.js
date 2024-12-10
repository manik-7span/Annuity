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
    const navbarPoints = document.getElementById('hero__menu');
    navbarPoints.classList.toggle('show');
  }
  $(document).ready(function(){
    $('.slider').slick({
      dots: false, // Show dots for navigation
      infinite: true, // Infinite looping
      speed: 500, // Transition speed
      slidesToShow: 3, // Number of slides to show
      slidesToScroll: 2, // Number of slides to scroll
      autoplay: true, // Enable autoplay
      autoplaySpeed: 3000, // Autoplay speed
    });
  });
