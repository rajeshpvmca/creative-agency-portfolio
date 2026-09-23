document.addEventListener("DOMContentLoaded", () => {
    // Load Header and Footer
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            // Add active class to current nav link
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.custom-nav-links .nav-link');
            navLinks.forEach(link => {
                const linkHref = link.getAttribute('href');
                if (linkHref && linkHref === currentPage) {
                    link.classList.add('active');
                }
            });

            
            // sticky header listener must attach after header is loaded
            window.addEventListener('scroll', () => {
                const navbar = document.querySelector('#main-navbar');
                if (navbar) {
                    if (window.scrollY > 50) {
                        navbar.classList.add('fixed-top', 'shadow', 'scrolled-radiant');
                        navbar.classList.remove('py-3');
                    } else {
                        navbar.classList.remove('fixed-top', 'shadow', 'scrolled-radiant');
                        navbar.classList.add('py-3');
                    }
                }
            });

    // Initialize Testimonial Swiper
    if (document.querySelector('.testimonialSwiper')) {
        new Swiper('.testimonialSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.testimonial-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }
        });
    }

        });
        
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
            initScrollToTop();
        });
});


    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 100; // Lower is faster

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statSection = document.getElementById('statistics-section');
    if (statSection) {
        counterObserver.observe(statSection);
    }


function initScrollToTop() {
    const mybutton = document.getElementById("scrollToTopBtn");
    if(!mybutton) return;
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };
    mybutton.addEventListener("click", () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}


// Initialize AOS Animation
document.addEventListener('DOMContentLoaded', () => {
    if(typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
});

    // Initialize Swiper Hero with Robotic/Mechanical Effect
    if (document.querySelector('.heroSwiper')) {
        new Swiper('.heroSwiper', {
            speed: 1200,
            parallax: true,
            loop: true,
            grabCursor: true,
            effect: 'creative',
            creativeEffect: {
                prev: {
                    shadow: true,
                    translate: ['-120%', 0, -500],
                    rotate: [0, 0, -45],
                    opacity: 0
                },
                next: {
                    shadow: true,
                    translate: ['120%', 0, -500],
                    rotate: [0, 0, 45],
                    opacity: 0
                },
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

