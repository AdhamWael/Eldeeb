const slides = [
    {
        title: ['WEB', 'DEVEL', 'OPER'],
        description: "A freelance web developer based in the Egypt. Specializing in modern frontend technologies and creative coding, I build immersive and performant web experiences.",
        gradient: "linear-gradient(180deg, #ffffff 0%, #c4d600 100%)", // Acid Green
        image: "download2.png"
    },
    {
        title: ['Pro', 'blem', 'SOLVER'],
        description: "Crafting intuitive and accessible user interfaces. I focus on user-centered design principles to create digital products that are easy to use.",
        gradient: "linear-gradient(180deg, #ffffff 0%, #ff6b6b 100%)", // Soft Red
        image: "download2.png"
    },
    {
        title: ['CREA', 'TIVE', 'CODER'],
        description: "Pushing the boundaries to create unique web experiences that is both functional and immersive design. I focus on user-centered design principles to fullfil customer needs.",
        gradient: "linear-gradient(180deg, #ffffff 0%, #4ecdc4 100%)", // Teal
        image: "download2.png"
    }
];

let currentIndex = 0;
const heroTitle = document.getElementById('heroTitle');
const heroDescription = document.getElementById('heroDescription');
const indicators = document.querySelectorAll('.indicator');
const body = document.body;

function updateSlide(index) {
    const slide = slides[index];

    // Update Title
    const lines = heroTitle.querySelectorAll('.line');
    lines.forEach((line, i) => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(20px)';
        setTimeout(() => {
            line.textContent = slide.title[i] || '';
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        }, 300 + (i * 100));
    });

    // Update Description
    heroDescription.style.opacity = '0';
    setTimeout(() => {
        heroDescription.textContent = slide.description;
        heroDescription.style.opacity = '1';
    }, 300);

    // Update Image
    const heroImage = document.getElementById('heroImage');
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'scale(0.95)';
        setTimeout(() => {
            heroImage.src = slide.image;
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'scale(1)';
        }, 300);
    }

    // Update Background Gradients
    body.style.transition = 'background 0.8s ease';
    body.style.background = slide.gradient;

    // Update Indicators
    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[index].classList.add('active');

    currentIndex = index;
}

// Initial update to apply slide 0 gradient and state
updateSlide(currentIndex);

// Auto-play
let interval = setInterval(() => {
    let nextIndex = (currentIndex + 1) % slides.length;
    updateSlide(nextIndex);
}, 5000);

// Click Handlers
indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        clearInterval(interval); // Stop auto-play on interaction
        const index = parseInt(indicator.dataset.index);
        updateSlide(index);

        // Restart auto-play after 10s
        interval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % slides.length;
            updateSlide(nextIndex);
        }, 10000);
    });
});

// Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(element => {
    observer.observe(element);
});

// Project Modal Logic
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalImage1 = document.getElementById('modalImage1');
const modalDescription = document.getElementById('modalDescription');
const modalClient = document.getElementById('modalClient'); // Label
const modalClientText = document.getElementById('modalClientText'); // Text
const modalRole = document.getElementById('modalRole'); // Label
const modalRoleText = document.getElementById('modalRoleText'); // Text
const modalLink = document.getElementById('modalLink'); // Label
const modalLinkBtn = modalLink ? modalLink.nextElementSibling : null; // The button is the next sibling
const modalChallenge = document.getElementById('modalChallenge'); // Label
const modalChallengeText = document.getElementById('modalChallengeText'); // Text
const modalSolution = document.getElementById('modalSolution'); // Label
const modalSolutionText = document.getElementById('modalSolutionText'); // Text
const modalImage2 = document.getElementById('modalImage2'); // Correct ID
const closeModalBtn = document.querySelector('.close-button'); // Select by class

const projectData = {
    'E-Commerce Platform': {
        description: "Adham. Includes user authentication, product management, and secure payment processing.",
        image1: "Wide.jpg",
        client: "adham Brand Co.",
        role: "adham Developer<br>UI Designer",
        link: "https://google.com",
        challenge: "adham needed a modern, high-performance e-commerce platform to showcase their new collection. The goal was to create a seamless shopping experience that reflects the brand's premium identity. We focused on speed, accessibility, and a fluid user interface.",
        solution: "adham built a custom storefront using React and Next.js, integrated with a headless CMS for easy content management. The design features large imagery, smooth transitions, and a minimal layout to let the products shine.",
        image2: "darris.jpg"
    },
    'Finance Dashboard': {
        description: "A finance dashboard for tracking expenses and investments. Features interactive charts and real-time data visualization.",
        image1: "darris.jpg",
        client: "Fashion Brand Co.",
        role: "Frontend Developer<br>UI Designer",
        link: "#",
        challenge: "The client needed a modern, high-performance e-commerce platform to showcase their new collection. The goal was to create a seamless shopping experience that reflects the brand's premium identity. We focused on speed, accessibility, and a fluid user interface.",
        solution: "We built a custom storefront using React and Next.js, integrated with a headless CMS for easy content management. The design features large imagery, smooth transitions, and a minimal layout to let the products shine.",
        image2: "darris.jpg"
    },
    'Portfolio 2024': {
        description: "My personal portfolio website showcasing my latest work and skills. Built with vanilla HTML, CSS, and JavaScript for maximum performance.",
        image1: "darris.jpg",
        client: "Fashion Brand Co.",
        role: "Frontend Developer<br>UI Designer",
        link: "#",
        challenge: "The client needed a modern, high-performance e-commerce platform to showcase their new collection. The goal was to create a seamless shopping experience that reflects the brand's premium identity. We focused on speed, accessibility, and a fluid user interface.",
        solution: "We built a custom storefront using React and Next.js, integrated with a headless CMS for easy content management. The design features large imagery, smooth transitions, and a minimal layout to let the products shine.",
        image2: "darris.jpg"
    },
    'Mobile Banking App': {
        description: "A user-friendly mobile banking application design. Focuses on security, ease of use, and a clean, modern aesthetic.",
        image1: "darris.jpg",
        client: "Fashion Brand Co.",
        role: "Frontend Developer<br>UI Designer",
        link: "#",
        challenge: "The client needed a modern, high-performance e-commerce platform to showcase their new collection. The goal was to create a seamless shopping experience that reflects the brand's premium identity. We focused on speed, accessibility, and a fluid user interface.",
        solution: "We built a custom storefront using React and Next.js, integrated with a headless CMS for easy content management. The design features large imagery, smooth transitions, and a minimal layout to let the products shine.",
        image2: "darris.jpg"
    },
    'Art Gallery': {
        description: "An immersive virtual art gallery experience. Users can navigate through 3D spaces to view artwork in high resolution.",
        image1: "darris.jpg",
        client: "Fashion Brand Co.",
        role: "Frontend Developer<br>UI Designer",
        link: "#",
        challenge: "The client needed a modern, high-performance e-commerce platform to showcase their new collection. The goal was to create a seamless shopping experience that reflects the brand's premium identity. We focused on speed, accessibility, and a fluid user interface.",
        solution: "We built a custom storefront using React and Next.js, integrated with a headless CMS for easy content management. The design features large imagery, smooth transitions, and a minimal layout to let the products shine.",
        image2: "darris.jpg"
    }
};

document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('.project-title').textContent;
        const category = item.querySelector('.project-category').textContent;
        const data = projectData[title];

        modalTitle.textContent = title;
        modalCategory.textContent = category;
        modalImage1.src = item.dataset.image; // Use data attribute or fallback

        if (data) {
            modalDescription.textContent = data.description;
            if (data.image1) {
                modalImage1.src = data.image1;
            }

            // Populate details
            modalClientText.textContent = data.client;
            modalRoleText.innerHTML = data.role; // Use innerHTML for <br>
            if (modalLinkBtn) modalLinkBtn.href = data.link;
            modalChallengeText.textContent = data.challenge;
            modalSolutionText.textContent = data.solution;

            if (data.image2) {
                modalImage2.src = data.image2;
                modalImage2.style.display = 'block';
            } else {
                modalImage2.style.display = 'none';
            }

        } else {
            modalDescription.textContent = "Project details coming soon.";
        }

        modal.classList.add('active');
        body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        body.style.overflow = '';
    });
} else {
    console.error('Close button not found in the DOM');
}

// Mobile Menu Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-link');

if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
        const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
        mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
        mobileNavToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        body.classList.toggle('nav-open');
        body.style.overflow = !isExpanded ? 'hidden' : '';
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNavToggle.classList.remove('active');
        mainNav.classList.remove('active');
        body.classList.remove('nav-open');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
    });
});

// Close modal on click outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        body.style.overflow = '';
    }
});

// Estimate Calculator Logic
const estimateForm = document.getElementById('estimateForm');
const projectType = document.getElementById('projectType');
const pageCount = document.getElementById('pageCount');
const pageValue = document.getElementById('pageValue');
const addons = document.querySelectorAll('.addon');
const totalCostElement = document.getElementById('totalCost');

function calculateEstimate() {
    let total = parseInt(projectType.value);

    // Page count cost (first page included in base price usually, but let's add extra pages)
    // Assuming base price includes 1 page.
    let pages = parseInt(pageCount.value);
    if (pages > 1) {
        total += (pages - 1) * 100;
    }

    // Addons
    addons.forEach(addon => {
        if (addon.checked) {
            total += parseInt(addon.value);
        }
    });

    // Format currency
    totalCostElement.textContent = '$' + total.toLocaleString();
}

if (estimateForm) {
    // Event Listeners
    projectType.addEventListener('change', calculateEstimate);

    pageCount.addEventListener('input', () => {
        pageValue.textContent = pageCount.value + (pageCount.value == 1 ? ' Page' : ' Pages');
        calculateEstimate();
    });

    addons.forEach(addon => {
        addon.addEventListener('change', calculateEstimate);
    });

    // Initial calculation
    calculateEstimate();
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);

        // Auto-close modal if clicking a nav link
        const currentModal = document.getElementById('projectModal');
        if (currentModal && currentModal.classList.contains('active')) {
            currentModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        if (targetId === "" || targetId === "home") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



console.log('Eldeeb Portfolio Loaded with Carousel, Animations, Modal, and Estimate Calculator');

// Hide page loader when window finishes loading (ensure visible at least 2s)
const _loaderShownAt = Date.now();

window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    if (!loader) return;

    const minVisible = 2000; // minimum visible time in ms
    const elapsed = Date.now() - _loaderShownAt;
    const remaining = Math.max(0, minVisible - elapsed);

    // After ensuring minimum visible time, animate loader into the navbar logo
    setTimeout(() => {
        const logo = document.querySelector('.logo-link');
        const loaderInner = loader.querySelector('.loader-inner');
        const loaderText = loader.querySelector('.loader-text');

        if (!logo || !loaderInner || !loaderText) {
            // fallback: just fade out
            loader.classList.add('page-loader--hide');
            setTimeout(() => {
                if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
            }, 800);
            return;
        }

        // Get positions
        const liRect = loaderInner.getBoundingClientRect();
        const logoRect = logo.getBoundingClientRect();

        // Compute translation to logo center
        const deltaX = (logoRect.left + logoRect.width / 2) - (liRect.left + liRect.width / 2);
        const deltaY = (logoRect.top + logoRect.height / 2) - (liRect.top + liRect.height / 2);

        // Get computed styles from the logo so we can morph the text properties
        const logoStyle = getComputedStyle(logo);
        const logoFontSize = logoStyle.fontSize || '16px';
        const logoColor = logoStyle.color || '#000';
        const logoLetterSpacing = logoStyle.letterSpacing || 'normal';
        const logoFontWeight = logoStyle.fontWeight || '700';

        // Hide the logo visually but keep its layout so the loader can replace it seamlessly
        logo.style.visibility = 'hidden';

        // Hide the progress bar during the transform
        const bar = loader.querySelector('.loader-bar');
        if (bar) bar.style.opacity = '0';

        // Move loaderInner to fixed positioning at its current viewport position
        loaderInner.style.position = 'fixed';
        loaderInner.style.left = liRect.left + 'px';
        loaderInner.style.top = liRect.top + 'px';
        loaderInner.style.width = liRect.width + 'px';
        loaderInner.style.height = liRect.height + 'px';
        loaderInner.style.margin = '0';
        loaderInner.style.zIndex = 100000;
        loaderInner.style.transformOrigin = 'center center';

        // Prepare transitions on loader inner and text
        loaderInner.style.transition = 'transform 700ms cubic-bezier(.2,.9,.3,1), opacity 300ms ease';
        loaderText.style.transition = 'font-size 700ms cubic-bezier(.2,.9,.3,1), color 700ms ease, letter-spacing 700ms ease, font-weight 700ms ease';

        // Force reflow
        void loaderInner.offsetWidth;

        // Compute scale ratio using font-size
        const loaderFontSize = parseFloat(getComputedStyle(loaderText).fontSize || '24');
        const logoFontSizeNum = parseFloat(logoFontSize.toString().replace('px', '')) || 16;
        const scale = Math.max(0.3, logoFontSizeNum / loaderFontSize);

        // Apply transform that moves and scales the loader-inner to the logo position
        loaderInner.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
        loaderInner.style.opacity = '0.98';

        // Animate text properties to match the logo style (font-size, color, letter-spacing, weight)
        loaderText.style.fontSize = logoFontSize;
        loaderText.style.color = logoColor;
        loaderText.style.letterSpacing = logoLetterSpacing;
        loaderText.style.fontWeight = logoFontWeight;

        // Single cleanup function to avoid duplication
        let cleanupExecuted = false;
        const cleanup = () => {
            if (cleanupExecuted) return;
            cleanupExecuted = true;

            // Show the real logo
            logo.style.visibility = 'visible';
            // Add a small activation class for a subtle highlight
            logo.classList.add('logo-activated');
            // Fade out and remove loader
            loader.classList.add('page-loader--hide');
            setTimeout(() => {
                if (loader && loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            }, 600);
        };

        // Listen for transform transition end on loaderInner
        loaderInner.addEventListener('transitionend', (ev) => {
            if (ev.propertyName === 'transform') {
                setTimeout(cleanup, 100);
            }
        });

        // Fallback in case transitionend doesn't fire
        setTimeout(cleanup, 1500);
    }, remaining);
});

