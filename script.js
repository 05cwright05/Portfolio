//Code for IMAGE carosel as utilized in general projects
// Wait for the page to load
window.addEventListener('load', function() {
  var slideContainer = document.querySelector('.carousel-slide');
  var prevBtn = document.querySelector('.carousel-prev');
  var nextBtn = document.querySelector('.carousel-next');

  // Initialize carousel
  var currentIndex = 0; // Store the current slide index
  var slideWidth = slideContainer.clientWidth; // Get the width of the window and set the slide to that
  var totalSlides = slideContainer.children.length; // Get the total number of slides ( how many children .carousel-slide had)

  // Move to the next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Calculate the next slide index (wrap around if necessary)
    slideContainer.style.transform = `translateX(-${currentIndex * slideWidth * .3333333333333}px)`; // Move the slide container horizontally to display the next slide
  }

  // Move to the previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Calculate the previous slide index (wrap around if necessary)
    slideContainer.style.transform = `translateX(-${currentIndex * slideWidth * .3333333333333333333}px)`; // Move the slide container horizontally to display the previous slide
  }

  // Attach event listeners to the buttons
  nextBtn.addEventListener('click', nextSlide); // Call the nextSlide() function when the "Next" button is clicked
  prevBtn.addEventListener('click', prevSlide); // Call the prevSlide() function when the "Prev" button is clicked


  // Automatically move to the next slide every 5 seconds
  setInterval(nextSlide, 5000);
});


//APP BEHAVIOR
//true if you are on the main screen
var home = true;


//add hover fade in and out
var bar = document.querySelector('.app-bar');
bar.addEventListener('mouseenter', () => {
  bar.style.opacity = '1';
});
bar.addEventListener('mouseleave', () => {
  // if you are not on the home screen fadeaway. Therefore if you are on homescreen it will always be present
  if (!home){
    bar.style.opacity = '0';
  }
});

// create a list of all logos
var logos = document.querySelectorAll('.app_logo');

// Iterate over each logo and add a click event listener
logos.forEach(function (logo) {
  logo.addEventListener('click', function () {
    // get the ID of the clicked logo
    var logoId = logo.id;
    //derived from removing _logo
    //Will be used to show the application
    var applicationId = logoId.split('_')[0];
    //Show what needs to be shown
    document.getElementById(applicationId).style.display="inline";
    //hide homescreen image
    var screen = document.getElementById("homescreen");
    screen.style.backgroundSize = "0 0";
    home = false;
  });
});


