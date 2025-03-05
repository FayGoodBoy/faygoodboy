document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Toggle Menu & Navbar
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // 🔹 Scroll Section Active Link
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });

        // Sticky Header
        let header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // Remove toggle menu & navbar when scrolling
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

    // 🔹 Swiper Slider Configuration
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 🔹 Dark Mode Toggle
    let darkModeIcon = document.querySelector('#darkMode-icon');
    darkModeIcon.onclick = () => {
        darkModeIcon.classList.toggle('bx-sun');
        document.body.classList.toggle('dark-mode');
    };

    // 🔹 ScrollReveal Animations
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img img, .services-container, .project-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
    ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

    // 🔹 Typing Animation with Dynamic Glow Effect
    function initTypingAnimation() {
        const words = [
            { text: "Web Developer", bgColor: "#6C44E0", textColor: "#FFFFFF", link: "game.html" }, // Ungu
            { text: "Programmer", bgColor: "#E0446C", textColor: "#FFFFFF", link: "404.html" },  // Merah Muda
            { text: "Game Developer", bgColor: "#44E06C", textColor: "#FFFFFF", link: "project.html" },  // Hijau
            { text: "Networking", bgColor: "#E06C44", textColor: "#FFFFFF", link: "project.html" }  // Oranye
        ];

        let index = 0;
        let charIndex = 0;
        let isDeleting = false;

        const textElement = document.getElementById("changing-text");
        const boxElement = document.querySelector(".changing-box");
        const changingLink = document.getElementById("changing-link");

        function typeEffect() {
            const currentWord = words[index].text;
            const currentBgColor = words[index].bgColor;
            const currentTextColor = words[index].textColor;
            const currentLink = words[index].link;

            textElement.textContent = isDeleting
                ? currentWord.substring(0, charIndex - 1)
                : currentWord.substring(0, charIndex + 1);

            charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

            // Mengatur warna latar, warna teks, dan efek shadow pada teks
            boxElement.style.backgroundColor = currentBgColor;
            boxElement.style.setProperty('--glow-color', currentBgColor); // Warna kilauan sesuai warna kolom
            textElement.style.color = currentTextColor;
            textElement.style.textShadow = "2px 2px 8px rgba(0, 0, 0, 0.5)";
            changingLink.href = currentLink;

            // Mengatur kecepatan animasi
            let typingSpeed = isDeleting ? 50 : 70;

            if (!isDeleting && charIndex === currentWord.length) {
                typingSpeed = 1000; // Jeda sebelum menghapus teks
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % words.length;
                typingSpeed = 300; // Jeda sebelum mengetik teks baru
            }

            setTimeout(typeEffect, typingSpeed);
        }

        typeEffect();
    }

    // Jalankan fungsi animasi mengetik
    initTypingAnimation();
});
