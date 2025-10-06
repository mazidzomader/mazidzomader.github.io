// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousels();
    initializeContactForm();
    initializeScrollAnimations();
});

/**
 * Initialize all carousel functionalities (Projects, Publications, Certifications)
 */
function initializeCarousels() {
    const carousels = [
        { id: 'projectsTrack', speed: 1 },
        { id: 'publicationsTrack', speed: 1 },
        { id: 'certificationsTrack', speed: 1 },
        { id: 'referencesTrack', speed: 1 }
    ];
    
    carousels.forEach(carousel => {
        const track = document.getElementById(carousel.id);
        if (track) setupCarousel(track, carousel.speed);
    });
}

/**
 * Setup infinite horizontal auto-scroll carousel
 */
function setupCarousel(track, speed) {
  
    const container = track.parentElement;
    let isDown = false;
    let startX;
    let scrollLeft;
    let autoScrollInterval;

    // Clone cards for infinite scroll
    const cards = Array.from(track.children);
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    // Start auto-scroll immediately
    startAutoScroll();

    // Drag events
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.style.cursor = 'grabbing';
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        stopAutoScroll();
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.style.cursor = 'grab';
        startAutoScroll();
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
        startAutoScroll();
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });

    // Wheel scroll horizontally
    container.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
            stopAutoScroll();
            setTimeout(startAutoScroll, 2000);
        }
    });

    // Infinite auto-scroll
    function startAutoScroll() {
        stopAutoScroll();
        autoScrollInterval = setInterval(() => {
            container.scrollLeft += speed;
            const maxScroll = container.scrollWidth / 2;
            if (container.scrollLeft >= maxScroll) {
                container.scrollLeft = 0;
            }
        }, 20);
    }

    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }

    // Pause when hovered
    container.addEventListener('mouseenter', stopAutoScroll);
    container.addEventListener('mouseleave', startAutoScroll);
}

/**
 * Contact form logic
 */
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const messageDiv = document.getElementById('formMessage');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const data = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.name || !data.email || !data.subject || !data.message || !emailRegex.test(data.email)) {
            showMessage('Please fill in all fields correctly.', 'error');
            return;
        }

        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            const mailtoLink = `mailto:your.email@university.edu?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`From: ${data.name} (${data.email})\n\n${data.message}`)}`;
            window.location.href = mailtoLink;
            showMessage('Your message has been prepared. Your email client will open shortly.', 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    });

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = `form-message ${type}`;
        messageDiv.style.display = 'block';
        setTimeout(() => (messageDiv.style.display = 'none'), 5000);
    }
}

/**
 * Fade-in animation on scroll
 */
function initializeScrollAnimations() {
    const sections = document.querySelectorAll('.timeline-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => observer.observe(section));
}

// ===== Scroll-Tracking Sidebar =====
document.addEventListener("DOMContentLoaded", function() {
    const sidebarLinks = document.querySelectorAll(".sidebar li");
    const sections = document.querySelectorAll(".timeline-section");

    // Smooth scroll to section when clicked
    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
            const target = link.getAttribute("data-target");
            const section = document.querySelector(`[data-section="${target}"]`);
            if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Highlight active section while scrolling
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute("data-section");
            }
        });

        sidebarLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("data-target") === current) {
                link.classList.add("active");
            }
        });
    });
});
// ===== Animated Counters for Right Panel =====
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const duration = 1500; // 1.5 seconds total
            const increment = target / (duration / 16); // ~60fps

            let count = 0;
            const update = () => {
                count += increment;
                if (count < target) {
                    counter.textContent = Math.floor(count);
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                }
            };
            update();
        });
    };

    // Trigger animation when the panel becomes visible
    const panel = document.querySelector(".right-panel");
    if (panel) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(panel); // only run once
                }
            });
        }, { threshold: 0.5 });
        observer.observe(panel);
    }
});

