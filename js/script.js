const path = window.location.pathname;

const icons = {
    index: {
        light: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50.8 50.8"><path d="M41.302 15.835h6.517v9.212h-6.517z" style="fill:none;stroke:#000;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-3.717 -14.591 -.473)"/><path d="M7.435 15.485h6.517v9.212H7.435z" style="fill:none;stroke:#000;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-33.039 -1.596 -.473)"/><path d="M-4.354 17.416h6.517v9.212h-6.517z" style="fill:none;stroke:#000;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-36.553 -1.434 -.473)"/><path d="M-15.699 21.12h6.517v9.212h-6.517z" style="fill:none;stroke:#000;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-40.068 -1.298 -.473)"/><path d="M21.079 16.306h6.517v9.212h-6.517z" style="fill:none;stroke:#000;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-22.795 -2.349 -.473)"/></svg>`,
        dark: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50.8 50.8"><path d="M41.363 14.891h6.517v9.212h-6.517z" style="fill:#000;stroke:none;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-3.717)"/><path d="M7.952 14.691h6.517v9.212H7.952z" style="fill:#000;stroke:none;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-33.04)"/><path d="M-3.79 16.655h6.517v9.212H-3.79z" style="fill:#000;stroke:none;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-36.553)"/><path d="M-15.09 20.395h6.517v9.212h-6.517z" style="fill:#000;stroke:none;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-40.068)"/><path d="M21.446 15.433h6.517v9.212h-6.517z" style="fill:#000;stroke:none;stroke-width:1.14259;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="rotate(-22.795)"/></svg>`
    },
    about: {
        light: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50.8 50.8"><path d="M21.414 7.203h7.973v7.973h-7.973zM21.414 17.583h7.973v26.543h-7.973z" style="fill:none;stroke:#000;stroke-width:1.32292;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1;paint-order:normal" transform="translate(0 -.265)"/></svg>`,
        dark: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50.8 50.8"><path d="M21.414 5.639h7.973v7.973h-7.973z" style="fill:#000;stroke:none;stroke-width:1.32292;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="translate(0 1.564)"/><path d="M21.414 15.489h7.973v26.543h-7.973z" style="fill:#000;stroke:none;stroke-width:2.41384;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="translate(0 1.564)"/></svg>`
    },
    skills: {
        light: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50.8 50.8"><path d="M21.067-14.854h10.29v10.29h-10.29zM32.181-3.74h10.29V6.55h-10.29zM34.987-17.66h10.29v10.29h-10.29zM18.261-.934h10.29v10.29h-10.29z" style="fill:none;stroke:#000;stroke-width:.823626;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1;paint-order:normal" transform="rotate(45 -4.75 -5.754) scale(1.21496)"/></svg>`,
        dark: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50.8 50.8"><path d="M22.918-13.003H35.42V-.501H22.918zM36.421.5h12.502v12.502H36.421zM39.831-16.412h12.502V-3.91H39.831zM19.509 3.91h12.502v12.502H19.509z" style="fill:#000;stroke:none;stroke-width:1.00067;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1;paint-order:normal;fill-opacity:1" transform="rotate(45)"/></svg>`
    },
    certifications: {
        light: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50.8 50.8"><path d="M25.4 9.553 49.462 18.4 25.4 27.246 1.338 18.4Z" style="fill:none;stroke:#000;stroke-width:1.32292;stroke-linecap:square;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="matrix(.93333 0 0 .93333 1.693 .474)"/><path d="M11.47 24.215v11.967h-.002v1.163l.164.085c3.056 1.579 11.748 5.249 22.069 2.217l.475-.14V26.11L25.4 29.336Zm1.323 1.895L25.4 30.747l7.453-2.74v10.476c-9.206 2.522-16.901-.43-20.06-1.985Z" style="baseline-shift:baseline;display:inline;overflow:visible;opacity:1;vector-effect:none;stroke-miterlimit:5;enable-background:accumulate;stop-color:#000;stop-opacity:1" transform="matrix(.93333 0 0 .93333 1.693 .474)"/><path d="M32.063 41.352c-.506.18-1.01.343-1.509.49v3.498h1.51z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:1.32292;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="matrix(.93333 0 0 .93333 4.37 -.867)"/><path d="M31.868 40.587c-.359.132-.715.251-1.068.36v3.972h1.068v-2.161z" style="fill:#fff;fill-opacity:1;stroke:none;stroke-width:.952775;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="matrix(.93333 0 0 .93333 4.37 -.867)"/><path d="M30.554 28.518v11.954c.5-.147 1.003-.31 1.51-.49V27.963Z" style="fill:#000;fill-opacity:1;stroke:#000;stroke-width:1.32292;stroke-miterlimit:5;stroke-dasharray:none;stroke-opacity:1" transform="matrix(.93333 0 0 .93333 4.37 -.867)"/><path d="M34.93 26.553v11.79a24.694 24.694 0 0 0 2.535-1.24v-11.58l-2.535 1.03z" style="fill:none;stroke:#000;stroke-width:1.36262;stroke-miterlimit:5" transform="matrix(.93333 0 0 .93333 1.693 .474)"/></svg>`,
        dark: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 50.8 50.8"><path d="m25.4 5.14 24.062 8.847L25.4 22.833 1.338 13.987Z" style="stroke-width:.802134;stroke-linecap:square;stroke-miterlimit:5" transform="translate(0 4.413)"/><path d="M33.686 21.24v12.019a29.916 29.916 0 0 0 3.84-1.68h-.194V19.9ZM10.794 19.9v11.68h-.196c2.972 1.535 11.493 5.131 21.579 2.168V21.795l-8.114 2.983z" style="stroke-width:1.41605;stroke-miterlimit:0" transform="translate(1.338 4)"/><path d="M33.686 33.259c-.506.18-1.01.343-1.51.49v3.498h1.51z" style="fill:#000;stroke-width:1.6779;stroke-miterlimit:0" transform="translate(1.338 4)"/><path d="M32.177 21.795v11.953c.5-.146 1.003-.31 1.51-.489v-12.02Z" style="fill:#fff;stroke-width:1.6779;stroke-miterlimit:0" transform="translate(1.338 4)"/></svg>`
    },
    research: {
        light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.8 50.8"><circle cx="22" cy="22" r="10" stroke="#000" stroke-width="1.32292" fill="none" /><line x1="29.07" y1="29.07" x2="41" y2="41" stroke="#000" stroke-width="2" stroke-linecap="round" /></svg>`,
        dark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.8 50.8"><path d="M 22 8 C 14.268 8 8 14.268 8 22 C 8 29.732 14.268 36 22 36 C 29.732 36 36 29.732 36 22 C 36 14.268 29.732 8 22 8 Z M 22 14 C 26.418 14 30 17.582 30 22 C 30 26.418 26.418 30 22 30 C 17.582 30 14 26.418 14 22 C 14 17.582 17.582 14 22 14 Z M 31.9 31.9 L 41 41 L 43.8 38.2 L 34.7 34.7 Z" fill="#000" /></svg>`
    },
    project: {
        light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.8 50.8"><path d="M 18 14 L 6 25.4 L 18 36.8" stroke="#000" stroke-width="1.32292" fill="none" stroke-linecap="square" stroke-linejoin="miter" /><path d="M 32.8 14 L 44.8 25.4 L 32.8 36.8" stroke="#000" stroke-width="1.32292" fill="none" stroke-linecap="square" stroke-linejoin="miter" /><line x1="28.4" y1="10" x2="22.4" y2="40.8" stroke="#000" stroke-width="1.32292" /></svg>`,
        dark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.8 50.8"><path d="M 18 10 L 4 25.4 L 18 40.8 L 22.8 36.8 L 11.4 25.4 L 22.8 14 Z M 32.8 10 L 46.8 25.4 L 32.8 40.8 L 28 36.8 L 39.4 25.4 L 28 14 Z" fill="#000" /><polygon points="27.4,8 30.4,8 23.4,42.8 20.4,42.8" fill="#000" /></svg>`
    },
    contact: {
        light: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.8 50.8"><g fill="none" stroke="#000" stroke-miterlimit="5" stroke-width="1.323"><path d="M9.696 2.719H1.844v7.56h7.852zM41.104 2.719h7.852v7.56h-7.852zM9.696 12.169H1.844v7.56h7.852zM11.659 12.169h7.852v7.56h-7.852zM39.141 12.169h-7.852v7.56h7.852zM41.104 12.169h7.852v7.56h-7.852zM9.696 21.62H1.844v7.56h7.852zM11.659 21.62h7.852v7.56h-7.852zM21.474 21.62h7.852v7.56h-7.852zM39.141 21.62h-7.852v7.56h7.852zM41.104 21.62h7.852v7.56h-7.852zM9.696 31.07H1.844v7.56h7.852zM11.659 31.07h7.852v7.56h-7.852zM39.141 31.07h-7.852v7.56h7.852zM41.104 31.07h7.852v7.56h-7.852zM9.696 40.521H1.844v7.56h7.852zM41.104 40.521h7.852v7.56h-7.852z"/></g></svg>`,
        dark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.8 50.8"><path d="M9.696 2.72H1.844v7.56h7.852zM41.105 2.72h7.852v7.56h-7.852zM9.696 12.17H1.844v7.56h7.852zM11.66 12.17h7.852v7.56h-7.853zM39.142 12.17h-7.853v7.56h7.853zM41.103 12.17h7.853v7.56h-7.853zM9.696 21.62H1.844v7.56h7.852zM11.66 21.62h7.852v7.56h-7.853zM21.474 21.62h7.852v7.56h-7.852zM39.142 21.62h-7.853v7.56h7.853zM41.103 21.62h7.853v7.56h-7.853zM9.696 31.07H1.844v7.561h7.852zM11.66 31.07h7.852v7.561h-7.853zM39.142 31.07h-7.853v7.561h-7.853zM41.103 31.07h7.853v7.561h-7.853zM9.696 40.52H1.844v7.56h7.852zM41.103 40.52h7.853v7.56h-7.853z"/></svg>`
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    loadNavBar();
});

// ── Dark mode ────────────────────────────────────────────
const MOON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
const SUN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

function initDarkMode() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved === 'dark' || (!saved && prefersDark);

    if (isDark) document.documentElement.setAttribute('data-theme', 'dark');

    // Inject button into top-header
    const header = document.querySelector('.top-header');
    if (!header) return;

    const btn = document.createElement('button');
    btn.id = 'darkToggle';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.setAttribute('title', 'Toggle dark mode');
    btn.innerHTML = isDark ? SUN_SVG : MOON_SVG;
    header.appendChild(btn);

    btn.addEventListener('click', () => {
        const dark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (dark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            btn.innerHTML = MOON_SVG;
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            btn.innerHTML = SUN_SVG;
        }
        // Refresh nav icons to match new theme
        refreshNavIcons();
    });
}

// CSS filter:invert(1) in dark mode handles icon colors automatically.
// This function is kept for any future per-icon overrides.
function refreshNavIcons() {
    // No manual swap needed — [data-theme="dark"] .nav-icon { filter: invert(1) }
    // in style.css handles this declaratively.
}

// loading the navbar
async function loadNavBar() {
    let navbarFile = "/en/navbar.html";

    try {
        const res = await fetch(navbarFile);
        const html = await res.text();

        document.body.insertAdjacentHTML("beforeend", html);

        const navBar = document.querySelector(".bottom-nav");
        const indicator = document.querySelector("#nav-indicator");
        const navItemLst = document.querySelectorAll(".nav-item");

        const currentPg = path.split("/").pop().replace(".html", "") || "index";
        let actvLink = null;

        function positionIndicator(show = false) {
            if (!actvLink) return;

            const itemRect = actvLink.getBoundingClientRect();
            const navRect = navBar.getBoundingClientRect();

            indicator.style.width = `${itemRect.width - 8}px`;
            const center = (itemRect.left - navRect.left) + (itemRect.width / 2);
            indicator.style.left = `${center}px`;
            indicator.style.transform = "translateX(-50%)";

            if (show)
                indicator.style.opacity = '1';
        }

        for (let i = 0; i < navItemLst.length; i++) {
            const item = navItemLst[i];
            const icon = item.querySelector(".nav-icon");

            const href = item.getAttribute("href").split("/").pop().replace(".html", "");
            if (href === currentPg) {
                item.classList.add("active");
                actvLink = item;
                icon.innerHTML = icons[href].dark;
            }
            else {
                item.classList.remove("active");
                icon.innerHTML = icons[href].light;
            }
        }

        // Apply dark mode icon coloring immediately on load
        refreshNavIcons();

        indicator.style.opacity = "0";
        setTimeout(() => {
            window.requestAnimationFrame(() => positionIndicator(true));
        }, 50);

        window.addEventListener('resize', () => {
            window.requestAnimationFrame(positionIndicator);
        });

    } catch (err) {
        console.error("Navbar loading failed: ", err);
    }
}

// adding linking function to the logo
const logo = document.getElementById("logo");
if (logo) {
    logo.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "/index.html";
    });
}

// handling anonymous msg form
const anonForm = document.getElementById('anonForm');
if (anonForm) {
    anonForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const formData = new FormData(anonForm);
        try {
            await fetch(anonForm.action, {
                method: anonForm.method,
                mode: 'no-cors',
                body: formData
            });
            const message = document.createElement('p');
            message.className = "container";
            message.textContent = "message received. Thanks!";
            anonForm.parentNode.replaceChild(message, anonForm);
        } catch (err) {
            console.error('Anonymous form submission failed:', err);
        }
    });
}

// handling contact form (Web3Forms)
const contactForm = document.getElementById('form');
if (contactForm) {
    const statusEl = document.getElementById('formStatus');
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                mode: 'no-cors',
                body: formData
            });
            // Since mode is no-cors, we cannot read response, assume success
            if (statusEl) {
                statusEl.textContent = 'Message sent successfully.';
                statusEl.style.color = 'var(--text)';
            }
            // Optionally clear form fields
            contactForm.reset();
        } catch (err) {
            console.error('Contact form submission failed:', err);
            if (statusEl) {
                statusEl.textContent = 'Failed to send message. Please try again later.';
                statusEl.style.color = 'var(--text)';
            }
        }
    });
}

// ── Research Search and Filter Logic ─────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('researchSearch');
    const filterSelect = document.getElementById('researchFilter');
    const researchItems = document.querySelectorAll('.research-item');

    if (searchInput && filterSelect && researchItems.length > 0) {
        function filterPapers() {
            const searchTerm = searchInput.value.toLowerCase();
            const filterCategory = filterSelect.value;

            researchItems.forEach(item => {
                const text = item.innerText.toLowerCase();
                const category = item.getAttribute('data-category');

                const matchesSearch = text.includes(searchTerm);
                const matchesCategory = (filterCategory === 'all' || category === filterCategory);

                if (matchesSearch && matchesCategory) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        searchInput.addEventListener('input', filterPapers);
        filterSelect.addEventListener('change', filterPapers);
    }
});

// ── Project Search and Filter Logic ─────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const projectSearchInput = document.getElementById('projectSearch');
    const projectFilterSelect = document.getElementById('projectFilter');
    const projectItems = document.querySelectorAll('.project-item');

    if (projectSearchInput && projectFilterSelect && projectItems.length > 0) {
        function filterProjects() {
            const searchTerm = projectSearchInput.value.toLowerCase();
            const filterCategory = projectFilterSelect.value;

            projectItems.forEach(item => {
                const text = item.innerText.toLowerCase();
                const categoryStr = item.getAttribute('data-category') || '';
                const categories = categoryStr.split(',');

                const matchesSearch = text.includes(searchTerm);
                const matchesCategory = (filterCategory === 'all' || categories.includes(filterCategory));

                if (matchesSearch && matchesCategory) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        projectSearchInput.addEventListener('input', filterProjects);
        projectFilterSelect.addEventListener('change', filterProjects);
    }
});

// ── Image Modal Logic ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Create modal HTML
    const modalHTML = `
        <div id="imageModal" class="image-modal" aria-hidden="true" role="dialog">
            <button class="image-modal-close" aria-label="Close modal">&times;</button>
            <button class="image-modal-nav image-modal-prev" id="imageModalPrev" aria-label="Previous image">&#10094;</button>
            <button class="image-modal-nav image-modal-next" id="imageModalNext" aria-label="Next image">&#10095;</button>
            <img class="image-modal-content" id="imageModalImg" alt="Zoomed screenshot">
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('imageModalImg');
    const closeBtn = document.querySelector('.image-modal-close');
    const prevBtn = document.getElementById('imageModalPrev');
    const nextBtn = document.getElementById('imageModalNext');

    let currentGallery = [];
    let currentIndex = 0;

    // Make gallery images clickable
    const galleries = document.querySelectorAll('.image-gallery');
    galleries.forEach(gallery => {
        const images = Array.from(gallery.querySelectorAll('img'));
        images.forEach((img, index) => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', () => {
                currentGallery = images;
                currentIndex = index;
                showImage();
                modal.classList.add('show');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
        });
    });

    function showImage() {
        if (currentGallery.length === 0) return;
        modalImg.src = currentGallery[currentIndex].src;

        // Hide/show nav buttons based on bounds
        prevBtn.style.display = currentGallery.length > 1 ? 'block' : 'none';
        nextBtn.style.display = currentGallery.length > 1 ? 'block' : 'none';
    }

    function showPrev(e) {
        if (e) e.stopPropagation();
        if (currentGallery.length <= 1) return;
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        showImage();
    }

    function showNext(e) {
        if (e) e.stopPropagation();
        if (currentGallery.length <= 1) return;
        currentIndex = (currentIndex + 1) % currentGallery.length;
        showImage();
    }

    // Close modal logic
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        setTimeout(() => { modalImg.src = ''; }, 300); // clear after fade out
    }

    if (prevBtn) prevBtn.addEventListener('click', showPrev);
    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    if (modal) {
        modal.addEventListener('click', (e) => {
            // Click outside image or on nav shouldn't necessarily close unless strictly outside
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!modal || !modal.classList.contains('show')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });
});


