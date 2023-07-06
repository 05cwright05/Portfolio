

//start on about page
var home = true;
social_media = document.getElementById("smedia")
if (social_media) {
  social_media.classList.remove("hidden");
}


function handleButtonClick() {
  home = true;
  var closeButtons = document.querySelectorAll('.close-button');
  for(let button of closeButtons){
    //Show about me page
      //Hide all apps
    var apps = document.querySelectorAll(".app");
    for (var i = 0; i < apps.length; i++) {
      apps[i].classList.add("hidden");
    }
  // Show selected App
  var shownApp = document.getElementById("smedia");
  if (shownApp) {
    shownApp.classList.remove("hidden");
  }
  }
  //Show app bar
  var bar = document.querySelector('.app-bar');
  bar.style.opacity = '.9';
}

//This works on most pages to ensure that the title of the page is lined up with top of the image
//#region Allign text with top of image
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
  for (let i = 0; i < paragraphs.length; i++){
    var firstImage = parentDivs[i].querySelector('img');
    var imageTop = firstImage.offsetTop;
    paragraphs[i].style.top = (imageTop) + "px";
  }
}
//#endregion


//Controls the behavior of the image Carousel.
var carouselDelay = 5000; 
//#region Code for IMAGE carosel 

// Wait for the page to load
window.addEventListener('load', function() {
  // Function to initialize a carousel
  function initializeCarousel(carouselContainer) {
    var slideContainer = carouselContainer.querySelector('.carousel-slide');
    // var prevBtn = carouselContainer.querySelector('.carousel-prev');
    // var nextBtn = carouselContainer.querySelector('.carousel-next');

    // Initialize carousel
    var currentIndex = 0;
    var slideWidth = slideContainer.parentNode.offsetWidth;
    var totalSlides = slideContainer.children.length;

    function nextSlide() {
      slideWidth = slideContainer.parentNode.offsetWidth;
      currentIndex = (currentIndex + 1) % totalSlides;
      slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
    // currently archived
    function prevSlide() {
      slideWidth = slideContainer.parentNode.offsetWidth;
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Add click event to the buttons
    // nextBtn.addEventListener('click', nextSlide);
    // prevBtn.addEventListener('click', prevSlide);

    // Automatically move to the next slide every # seconds
    setInterval(nextSlide, carouselDelay);
  }

  // Get all carousel containers
  var carouselContainers = document.querySelectorAll('.carousel-container');

  // Initialize each carousel
  carouselContainers.forEach(function(carouselContainer) {
    initializeCarousel(carouselContainer);
  });
});
//#endregion


//#region Appbar fade in-out when in an app
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
//#endregion


//#region Click Logo Code
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

  //Hide all apps
  var apps = document.querySelectorAll(".app");
  for (var i = 0; i < apps.length; i++) {
    apps[i].classList.add("hidden");
  }
  home = false;
  // Show selected App
  var shownApp = document.getElementById(applicationId);
  if (shownApp) {
    shownApp.classList.remove("hidden");
    //if we are on the about page i always want the bar present
    if(applicationId == "smedia"){
      home=true;
    }
  }
    //recheck title position
    adjustTitlePosition();
  });
});
//#endregion

