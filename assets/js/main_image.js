document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-container img");
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
    setInterval(nextImage, 5000); // Change image every 5 seconds
});
