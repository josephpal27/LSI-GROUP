document.addEventListener("DOMContentLoaded", function () {
    // Infinite Scroll for Influencer Marketing Slider
    const sliderContainer = document.querySelector(".slider-container");
    const sliderTrack = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slider-slide");
    const slideCount = slides.length;
    let slideWidth = slides[0].offsetWidth;

    // Clone slides for infinite scrolling
    for (let i = 0; i < slideCount; i++) {
        const clone = slides[i].cloneNode(true);
        sliderTrack.appendChild(clone);
    }

    // Set up initial slide position
    let currentIndex = 0;
    sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    updateCenteredSlide();

    // Function to move slides
    function moveSlides() {
        currentIndex++;
        if (currentIndex === slideCount) {
            sliderTrack.style.transition = "none";
            currentIndex = 0;
            sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
            setTimeout(() => {
                sliderTrack.style.transition = "transform 0.5s ease-in-out";
                moveSlides();
            }, 50);
        } else {
            sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        }
        updateCenteredSlide();
    }

    // Update the centered slide
    function updateCenteredSlide() {
        slides.forEach((slide, index) => {
            const slideOffset = slide.getBoundingClientRect().left;
            const containerCenter = sliderContainer.getBoundingClientRect().left + sliderContainer.offsetWidth / 2;
            const slideCenter = slideOffset + slide.offsetWidth / 2;

            if (Math.abs(slideCenter - containerCenter) < slideWidth / 2) {
                slide.classList.add('center');
                if ((index + 1) % 4 === 0) {
                    slide.classList.add('scale-up');
                } else {
                    slide.classList.remove('scale-up');
                }
            } else {
                slide.classList.remove('center');
                slide.classList.remove('scale-up');
            }
        });
    }

    // Set interval for auto slide
    let slideInterval = setInterval(moveSlides, 3000);

    // Adjust slide width on window resize
    window.addEventListener("resize", () => {
        slideWidth = slides[0].offsetWidth;
        sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    });
});