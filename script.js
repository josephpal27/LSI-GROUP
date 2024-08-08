
// Functionality for Nav Menu Toggle
let navMenu = document.querySelectorAll('.nav-menu .dropdown-list');
let navMenuContent = document.querySelectorAll('.nav-menu-contents .content-box');

// Add a data-index attribute to each li and content box for easy matching
navMenu.forEach((e, index) => {
    e.setAttribute('data-index', index);
    navMenuContent[index].setAttribute('data-index', index);
    e.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the document
        toggleContentBoxes();
        setTimeout(() => {
            document.querySelector(`.content-box[data-index="${index}"]`).classList.add('show');
        }, 10); // slight delay to trigger transition
        toggleActiveClass(e);
    });
});

function toggleContentBoxes() {
    navMenuContent.forEach(box => {
        box.classList.remove('show');
    });
}

function toggleActiveClass(activeElement) {
    navMenu.forEach(e => {
        e.classList.remove('active');
    });
    activeElement.classList.add('active');
}

// Add event listener to the document to hide active elements when clicking outside
document.addEventListener('click', () => {
    navMenu.forEach(e => {
        e.classList.remove('active');
    });
    toggleContentBoxes();
});

// Initially hide all content boxes
toggleContentBoxes();


// ------------------------------------------------------------------------------------------------------------------------------

// Functionality For Cards Read More Button

let readMoreBtns = document.querySelectorAll('.card .read-more');

readMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Get the closest card element to the clicked button
        let card = btn.closest('.card');
        // Get the card-content within this specific card
        let contentBox = card.querySelector('.card-content');
        
        // Check the current height and set the transition state accordingly
        if (contentBox.style.height === 'auto' || contentBox.style.height === '') {
            // Set the height explicitly to its current pixel height
            contentBox.style.height = `${contentBox.scrollHeight}px`;
            requestAnimationFrame(() => {
                contentBox.style.height = '132px'; // Collapse back to original height
            });
            btn.innerText = 'Read More'; // Optionally change the text back to 'Read More'
        } else {
            // Expand to show full content
            contentBox.style.height = `${contentBox.scrollHeight}px`;
            btn.innerText = 'Read Less'; // Optionally change the text to 'Read Less'
            
            // Wait for the transition to complete, then set height to auto for flexibility
            contentBox.addEventListener('transitionend', function handler() {
                contentBox.style.height = 'auto';
                contentBox.removeEventListener('transitionend', handler);
            });
        }
    });
});

// Initialize card heights explicitly to avoid false clicks
window.addEventListener('load', () => {
    document.querySelectorAll('.card .card-content').forEach(contentBox => {
        contentBox.style.height = '132px';
    });
});



// ------------------------------------------------------------------------------------------------------------------------------

// Functionality for Cards hover
let cards = document.querySelectorAll('.content-card-row .content-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.scale = '1.05';
        card.style.transition = 'scale 0.3s ease';
    })
    card.addEventListener('mouseleave', () => {
        card.style.scale = '1';
        card.style.transition = '';
    })
})


// -------------------------------------------------------------------------------------------------------------------------------

// Functionality for Expertise Section Image Hover

// image 1
let img1 = document.getElementById('img-1');

img1.addEventListener('mouseenter', () => {
    img1.style.opacity = '0';
    setTimeout(() => {
        img1.setAttribute('src', 'images/expertise/1(1).webp');
        img1.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

img1.addEventListener('mouseleave', () => {
    img1.style.opacity = '0';
    setTimeout(() => {
        img1.setAttribute('src', 'images/expertise/1.webp');
        img1.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

// image 2
let img2 = document.getElementById('img-2');

img2.addEventListener('mouseenter', () => {
    img2.style.opacity = '0';
    setTimeout(() => {
        img2.setAttribute('src', 'images/expertise/2(1).webp');
        img2.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

img2.addEventListener('mouseleave', () => {
    img2.style.opacity = '0';
    setTimeout(() => {
        img2.setAttribute('src', 'images/expertise/2.webp');
        img2.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

// image 3
let img3 = document.getElementById('img-3');

img3.addEventListener('mouseenter', () => {
    img3.style.opacity = '0';
    setTimeout(() => {
        img3.setAttribute('src', 'images/expertise/3(1).webp');
        img3.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

img3.addEventListener('mouseleave', () => {
    img3.style.opacity = '0';
    setTimeout(() => {
        img3.setAttribute('src', 'images/expertise/3.webp');
        img3.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

// image 4
let img4 = document.getElementById('img-4');

img4.addEventListener('mouseenter', () => {
    img4.style.opacity = '0';
    setTimeout(() => {
        img4.setAttribute('src', 'images/expertise/4(1).webp');
        img4.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

img4.addEventListener('mouseleave', () => {
    img4.style.opacity = '0';
    setTimeout(() => {
        img4.setAttribute('src', 'images/expertise/4.webp');
        img4.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

// image 5
let img5 = document.getElementById('img-5');

img5.addEventListener('mouseenter', () => {
    img5.style.opacity = '0';
    setTimeout(() => {
        img5.setAttribute('src', 'images/expertise/5(1).webp');
        img5.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

img5.addEventListener('mouseleave', () => {
    img5.style.opacity = '0';
    setTimeout(() => {
        img5.setAttribute('src', 'images/expertise/5.webp');
        img5.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

// image 6
let img6 = document.getElementById('img-6');

img6.addEventListener('mouseenter', () => {
    img6.style.opacity = '0';
    setTimeout(() => {
        img6.setAttribute('src', 'images/expertise/6(1).webp');
        img6.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

img6.addEventListener('mouseleave', () => {
    img6.style.opacity = '0';
    setTimeout(() => {
        img6.setAttribute('src', 'images/expertise/6.webp');
        img6.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

// image 7
let img7 = document.getElementById('img-7');

img7.addEventListener('mouseenter', () => {
    img7.style.opacity = '0';
    setTimeout(() => {
        img7.setAttribute('src', 'images/expertise/7(1).webp');
        img7.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

img7.addEventListener('mouseleave', () => {
    img7.style.opacity = '0';
    setTimeout(() => {
        img7.setAttribute('src', 'images/expertise/7.webp');
        img7.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

// image 8
let img8 = document.getElementById('img-8');

img8.addEventListener('mouseenter', () => {
    img8.style.opacity = '0';
    setTimeout(() => {
        img8.setAttribute('src', 'images/expertise/8(1).webp');
        img8.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

img8.addEventListener('mouseleave', () => {
    img8.style.opacity = '0';
    setTimeout(() => {
        img8.setAttribute('src', 'images/expertise/8.webp');
        img8.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

// image 9
let img9 = document.getElementById('img-9');

img9.addEventListener('mouseenter', () => {
    img9.style.opacity = '0';
    setTimeout(() => {
        img9.setAttribute('src', 'images/expertise/9(1).webp');
        img9.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

img9.addEventListener('mouseleave', () => {
    img9.style.opacity = '0';
    setTimeout(() => {
        img9.setAttribute('src', 'images/expertise/9.webp');
        img9.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

// image 10
let img10 = document.getElementById('img-10');

img10.addEventListener('mouseenter', () => {
    img10.style.opacity = '0';
    setTimeout(() => {
        img10.setAttribute('src', 'images/expertise/10(1).webp');
        img10.style.opacity = '1';
    }, 170); // Adjust timing as neede10
});

img10.addEventListener('mouseleave', () => {
    img10.style.opacity = '0';
    setTimeout(() => {
        img10.setAttribute('src', 'images/expertise/10.webp');
        img10.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

// image 11
let img11 = document.getElementById('img-11');

img11.addEventListener('mouseenter', () => {
    img11.style.opacity = '0';
    setTimeout(() => {
        img11.setAttribute('src', 'images/expertise/11(1).webp');
        img11.style.opacity = '1';
    }, 170); // Adjust timing as neede10
});

img11.addEventListener('mouseleave', () => {
    img11.style.opacity = '0';
    setTimeout(() => {
        img11.setAttribute('src', 'images/expertise/11.webp');
        img11.style.opacity = '1';
    }, 170); // Adjust timing as needed
});

// image 12
let img12 = document.getElementById('img-12');

img12.addEventListener('mouseenter', () => {
    img12.style.opacity = '0';
    setTimeout(() => {
        img12.setAttribute('src', 'images/expertise/12(1).webp');
        img12.style.opacity = '1';
    }, 170); // Adjust timing as neede10
});

img12.addEventListener('mouseleave', () => {
    img12.style.opacity = '0';
    setTimeout(() => {
        img12.setAttribute('src', 'images/expertise/12.webp');
        img12.style.opacity = '1';
    }, 170); // Adjust timing as needed
});


// -------------------------------------------------------------------------------------------------------------------------------

// Functionality For Back To Top Button
let backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.addEventListener('click', () => {
    window.scrollTo(0,0);
})




// --------------------------------------------------------------------------------------------------------------------------------

// Functionaloity For Slider

document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    const sliderTrack = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slider-slide");
    const slideCount = slides.length;
    let slideWidth = slides[0].offsetWidth;
    let currentIndex = 0;

    // Clone slides for infinite scrolling
    for (let i = 0; i < slideCount; i++) {
        const clone = slides[i].cloneNode(true);
        sliderTrack.appendChild(clone);
    }

    function moveSlides() {
        sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        updateCenteredSlide();
    }

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

    function goToSlide(index) {
        currentIndex = index;
        if (currentIndex >= slideCount) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = slideCount - 1;
        }
        moveSlides();
    }

    document.querySelector(".next-button").addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= slideCount) {
            currentIndex = 0;
        }
        moveSlides();
    });

    document.querySelector(".prev-button").addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slideCount - 1;
        }
        moveSlides();
    });

    let slideInterval = setInterval(() => {
        currentIndex++;
        if (currentIndex >= slideCount) {
            currentIndex = 0;
        }
        moveSlides();
    }, 3000);

    window.addEventListener("resize", () => {
        slideWidth = slides[0].offsetWidth;
        moveSlides();
    });
});

