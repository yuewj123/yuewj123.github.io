document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const images = document.querySelectorAll(".image-carousel img");
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((image, i) => {
            image.style.display = i === index ? "block" : "none";
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    // Initial display
    showImage(currentIndex);

    // Set interval for automatic image change
    setInterval(nextImage, 2000); // Change image every 5 seconds
});

// main.js

let currentSlideIndex = 1;

function showSlides(index) {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  if (index > slides.length) {
    currentSlideIndex = 1;
  } else if (index < 1) {
    currentSlideIndex = slides.length;
  }

  sliderWrapper.style.transform = `translateX(${-100 * (currentSlideIndex - 1)}%)`;

  dots.forEach(dot => dot.classList.remove('active-dot'));
  dots[currentSlideIndex - 1].classList.add('active-dot');
}

function prevSlide() {
  showSlides(currentSlideIndex -= 1);
}

function nextSlide() {
  showSlides(currentSlideIndex += 1);
}

function currentSlide(index) {
  showSlides(currentSlideIndex = index);
}

// Initialize the slider
showSlides(currentSlideIndex);

// Automatic slide change every 3 seconds
setInterval(() => {
  nextSlide();
}, 3000);

