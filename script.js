//Make sure that the Title is always lined up with the top of the image carousel
window.addEventListener('load', function() {
  adjustTitlePosition();
});

window.addEventListener('resize', function() {
  adjustTitlePosition();
});

function adjustTitlePosition() {
  //var title = document.querySelector('.title');
  var paragraphs = document.querySelectorAll('.description');
  var parentDivs = document.querySelectorAll('.carousel-slide');
  console.log("The number of paragraphs is " + paragraphs.length)
  console.log(imageTop + "it");
  for (let i = 0; i < paragraphs.length; i++){
    var firstImage = parentDivs[i].querySelector('img');
    var imageTop = firstImage.offsetTop;
    paragraphs[i].style.top = (imageTop) + "px";
  }
  }


//Code for IMAGE carosel as utilized in general projects

// Wait for the page to load
window.addEventListener('load', function() {
  // Function to initialize a carousel
  function initializeCarousel(carouselContainer) {
    var slideContainer = carouselContainer.querySelector('.carousel-slide');
    var prevBtn = carouselContainer.querySelector('.carousel-prev');
    var nextBtn = carouselContainer.querySelector('.carousel-next');

    // Initialize carousel
    var currentIndex = 0;
    var slideWidth = slideContainer.parentNode.offsetWidth;
    var totalSlides = slideContainer.children.length;

    function nextSlide() {
      slideWidth = slideContainer.parentNode.offsetWidth;
      currentIndex = (currentIndex + 1) % totalSlides;
      slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function prevSlide() {
      slideWidth = slideContainer.parentNode.offsetWidth;
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Attach event listeners to the buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Automatically move to the next slide every 5 seconds
    setInterval(nextSlide, 3000);
  }

  // Get all carousel containers
  var carouselContainers = document.querySelectorAll('.carousel-container');

  // Initialize each carousel
  carouselContainers.forEach(function(carouselContainer) {
    initializeCarousel(carouselContainer);
  });
});


//APP BEHAVIOR
//true if you are on the main screen
var home = true;


//add hover fade in and out
var bar = document.querySelector('.app-bar');
bar.addEventListener('mouseenter', () => {
  bar.style.opacity = '.9';
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
    // Hide all divs

  //Hide all apps
  var apps = document.querySelectorAll(".app");
  for (var i = 0; i < apps.length; i++) {
    apps[i].classList.add("hidden");
  }

  // Show selected App
  var shownApp = document.getElementById(applicationId);
  if (shownApp) {
    console.log("ran");
    shownApp.classList.remove("hidden");
  }



    var screen = document.getElementById("homescreen");
    screen.style.backgroundSize = "0 0";
    home = false;
    //recheck title position
    adjustTitlePosition();
  });
});


