// script.js
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeIcon = document.querySelector('.close-icon');

    menuIcon.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
    });

    closeIcon.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
    });
});

//Carrousel de Cursos

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const arrows = document.querySelectorAll('.arrow');
    let index = 0;

    function updateCarousel() {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${-100 * index}%)`;
        });

        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
    }

    function nextSlide() {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        updateCarousel();
    }

    function prevSlide() {
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
        updateCarousel();
    }

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            if (arrow.classList.contains('next')) {
                nextSlide();
            } else if (arrow.classList.contains('prev')) {
                prevSlide();
            }
        });
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            updateCarousel();
        });
    });
});


//Carrrousel de imágenes

document.addEventListener('DOMContentLoaded', function () {
    const imageSlides = document.querySelectorAll('.image-slide');
    const imageDotsContainer = document.querySelector('.image-dots-container');
    const imageArrows = document.querySelectorAll('.image-arrow');
    let imageIndex = 0;

    // Crear los puntos para el nuevo carrusel
    imageSlides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('image-dot');
        if (i === 0) dot.classList.add('active');
        imageDotsContainer.appendChild(dot);
    });

    const imageDots = document.querySelectorAll('.image-dot');

    function updateImageCarousel() {
        imageSlides.forEach((slide, i) => {
            slide.style.transform = `translateX(${-100 * imageIndex}%)`;
        });

        imageDots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === imageIndex) {
                dot.classList.add('active');
            }
        });
    }

    function nextImageSlide() {
        imageIndex++;
        if (imageIndex >= imageSlides.length) {
            imageIndex = 0;
        }
        updateImageCarousel();
    }

    function prevImageSlide() {
        imageIndex--;
        if (imageIndex < 0) {
            imageIndex = imageSlides.length - 1;
        }
        updateImageCarousel();
    }

    imageArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            if (arrow.classList.contains('next')) {
                nextImageSlide();
            } else if (arrow.classList.contains('prev')) {
                prevImageSlide();
            }
        });
    });

    imageDots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            imageIndex = i;
            updateImageCarousel();
        });
    });

    // Cambiar automáticamente cada 5 segundos
    setInterval(nextImageSlide, 5000); // 5000 ms = 5 segundos
});