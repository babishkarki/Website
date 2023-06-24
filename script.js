     // Function to display notice 1
     
function displayNotice1() {
    document.getElementById('notice1').style.display = 'block';
    document.getElementById('notice2').style.display = 'none';
    document.getElementById('notice3').style.display = 'none';
    setTimeout(displayNotice2, 5000);
}

// Function to display notice 2 
function displayNotice2() {
    document.getElementById('notice1').style.display = 'none';
    document.getElementById('notice2').style.display = 'block';
    document.getElementById('notice3').style.display = 'none';
    setTimeout(displayNotice3, 5000);
}

// Function to display notice 3
function displayNotice3() {
    document.getElementById('notice1').style.display = 'none';
    document.getElementById('notice2').style.display = 'none';
    document.getElementById('notice3').style.display = 'block';
    setTimeout(displayNotice1, 5000);
}

// function called
displayNotice1();

const images = document.querySelectorAll('.slider-images img');
const sliderContainer = document.querySelector('.slider-container');
const previousBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;
let intervalTimer;

function showImage(index) {
    sliderContainer.style.transform = `translateX(-${index * (100 / images.length)}%)`;
}

showImage(currentIndex);

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);

    if (currentIndex === 0) {
        // Reached the last image, loop from front to the first image
        sliderContainer.style.transform = 'translateX(0)';
        setTimeout(() => {
            sliderContainer.style.transition = 'transform 0.5s ease-in-out';
        }, 10);
    }
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

nextBtn.addEventListener('click', () => {
    clearInterval(intervalTimer);
    showNextImage();
    intervalTimer = setInterval(showNextImage, 7000);
});

previousBtn.addEventListener('click', () => {
    clearInterval(intervalTimer);
    showPreviousImage();
    intervalTimer = setInterval(showNextImage, 7000);
});

intervalTimer = setInterval(showNextImage, 7000);


  document.addEventListener("DOMContentLoaded", function() {
    var items = document.querySelectorAll(".item");

    function checkScroll() {
      var windowHeight = window.innerHeight;

      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var itemTop = item.getBoundingClientRect().top;

        if (itemTop - windowHeight <= 0) {
          item.classList.add("animate");
        } else {
          item.classList.remove("animate"); // Remove the class if the item is not in view
        }
      }
    }

    window.addEventListener("scroll", checkScroll);
  });

// Function to debounce the execution of a function
function debounce(func, delay) {
    let timer;

    return function () {
        const context = this;
        const args = arguments;

        // Clear the previous timer
        clearTimeout(timer);

        // Set a new timer to delay the execution of the function
        timer = setTimeout(function () {
            func.apply(context, args);
        }, delay);
    };
}

// Function to check if an element is in view
function checkInView() {
    const images = document.querySelectorAll('.third-row img');
    const windowHeight = window.innerHeight;

    images.forEach(function (image) {
        const imageTop = image.getBoundingClientRect().top;

        // Add 'show' and 'bounce' classes to the image if it is in view
        if (imageTop < windowHeight) {
            image.classList.add('show', 'bounce');
        } else {
            // Remove 'show' and 'bounce' classes from the image if it is not in view
            image.classList.remove('show', 'bounce');
        }
    });
}

// Create a debounced version of the checkInView function
const debounceCheckInView = debounce(checkInView, 100);

// Add a scroll event listener to the window that triggers the debounced checkInView function
window.addEventListener('scroll', debounceCheckInView);


// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the position where you want the slideshow to start
    const scrollPosition = 300;
    
    // Function to check if the user has scrolled to the desired position
    function checkScrollPosition() {
      if (window.pageYOffset >= scrollPosition) {
        // The user has scrolled to the desired position, start the slideshow
        startSlideshow();
        // Remove the scroll event listener since we don't need it anymore
        window.removeEventListener('scroll', checkScrollPosition);
      }
    }
    
    // Add a scroll event listener to check the scroll position
    window.addEventListener('scroll', checkScrollPosition);
    
    // Get all the slide containers
    const slides = document.querySelectorAll('.slides-contains');
    let currentSlideIndex = 0;
    
    // Function to show the current slide
    function showSlide(index) {
      // Hide all slides
      slides.forEach(function(slide) {
        slide.classList.remove('show');
      });
    
      // Show the current slide
      slides[index].classList.add('show');
    }
    
    // Function to switch to the next slide
    function nextSlide() {
      currentSlideIndex++;
      if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
      }
      showSlide(currentSlideIndex);
    }
    
    // Function to start the slideshow
    function startSlideshow() {
      showSlide(currentSlideIndex);
      setInterval(nextSlide, 12000); // Change slide every 12 seconds
    }
  });
  



