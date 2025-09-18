document.addEventListener('DOMContentLoaded', () => {

    // --- Countdown Timer Logic ---
    const countDownDate = new Date("Oct 6, 2025 00:00:00").getTime();
    
    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Add leading zero if number is less than 10
        const format = (num) => (num < 10 ? '0' + num : num);

        document.getElementById("days").innerText = format(days);
        document.getElementById("hours").innerText = format(hours);
        document.getElementById("minutes").innerText = format(minutes);
        document.getElementById("seconds").innerText = format(seconds);

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown-container").innerHTML = "<h3 class='countdown-title launched'>THE KART HAS BEEN UNLEASHED!</h3>";
        }
    }, 1000);

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Smooth Scroll for Navbar Links ---
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // --- Scroll-triggered Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

});