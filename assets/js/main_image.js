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
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function updateSlider() {
        const newPosition = -currentIndex * 100 + '%';
        slider.style.transform = 'translateX(' + newPosition + ')';
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % dots.length;
        updateSlider();
        updateDots();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + dots.length) % dots.length;
        updateSlider();
        updateDots();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            currentIndex = index;
            updateSlider();
            updateDots();
        });
    });

    document.querySelector('.arrow.next').addEventListener('click', nextSlide);
    document.querySelector('.arrow.prev').addEventListener('click', prevSlide);

    // Autoplay (optional)
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});

