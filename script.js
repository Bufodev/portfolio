// ============================
// THEME TOGGLE (NIGHT/DAY MODE)
// ============================
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const docEl = document.documentElement;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
docEl.setAttribute('data-theme', savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = docEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        docEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Dynamic update for Three.js backgrounds if they exist
        if (window.updateBackgroundTheme) {
            window.updateBackgroundTheme(newTheme);
        }
    });
}

// NAVBAR SCROLL EFFECT
// ============================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, { passive: true });

// ============================
// MOBILE MENU TOGGLE
// ============================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

function closeMobileMenu({ returnFocus = false } = {}) {
    if (!hamburger || !navMenu) return;

    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');

    if (returnFocus) hamburger.focus();
}

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => closeMobileMenu());
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileMenu({ returnFocus: true });
        }
    });

    window.matchMedia('(min-width: 71.9375rem)').addEventListener('change', event => {
        if (event.matches) closeMobileMenu();
    });
}

// ============================
// ACTIVE NAV LINK ON SCROLL
// ============================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150; // Increased offset for better trigger point
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            navLink?.classList.add('active');
        }
    });

    // Special case for top of page
    if (scrollY < 100) {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        document.querySelector('.nav-link[href="#home"]')?.classList.add('active');
    }
}

window.addEventListener('scroll', scrollActive, { passive: true });

// ============================
// INTERSECTION OBSERVER - SECTION REVEALS
// ============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Trigger skill bar animations if skill section or bars are revealed
            if (entry.target.id === 'skills' || entry.target.classList.contains('skill-progress')) {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe all revealable elements
document.querySelectorAll('.section-title, .reveal, .glass-card, .timeline-item, .service-card, .project-card-v2, .about-layout-new, .skills').forEach(el => {
    revealObserver.observe(el);
});

// ============================
// SKILL BARS ANIMATION
// ============================
let skillsAnimated = false;

function animateSkillBars() {
    if (skillsAnimated) return;

    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });

    skillsAnimated = true;
}

// ============================
// 3D TILT EFFECT FOR PROJECT CARDS
// ============================
const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ============================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default for empty hash or non-section links
        if (href === '#' || !document.querySelector(href)) {
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const offsetTop = target.offsetTop - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================
// CONTACT FORM HANDLING
// ============================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Simulate form submission
        console.log('Form submitted:', data);

        // Show success message (you can customize this)
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

// ============================
// AUTH PAGE - FORM SWITCHING
// ============================
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

if (showSignup && showLogin) {
    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        switchToSignup();
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        switchToLogin();
    });
}

function switchToSignup() {
    loginForm.classList.remove('active');
    loginForm.classList.add('slide-out-left');

    setTimeout(() => {
        loginForm.classList.remove('slide-out-left');
        signupForm.classList.add('active', 'slide-in-right');

        setTimeout(() => {
            signupForm.classList.remove('slide-in-right');
        }, 500);
    }, 500);
}

function switchToLogin() {
    signupForm.classList.remove('active');
    signupForm.classList.add('slide-out-right');

    setTimeout(() => {
        signupForm.classList.remove('slide-out-right');
        loginForm.classList.add('active', 'slide-in-left');

        setTimeout(() => {
            loginForm.classList.remove('slide-in-left');
        }, 500);
    }, 500);
}

// ============================
// CURSOR GLOW EFFECT (Optional)
// ============================
let cursorGlow;

function createCursorGlow() {
    cursorGlow = document.createElement('div');
    cursorGlow.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s;
        opacity: 0;
    `;
    document.body.appendChild(cursorGlow);
}

// Uncomment below to enable cursor glow effect
/*
createCursorGlow();

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
    cursorGlow.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});
*/

// ============================
// FLOATING ORB PARALLAX EFFECT
// ============================
const orbs = document.querySelectorAll('.orb');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.1;
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
}, { passive: true });

// ============================
// PAGE LOAD ANIMATION
// ============================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================
// DYNAMIC GRADIENT BACKGROUND ON MOUSE MOVE
// ============================
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateGradient() {
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;

    const percentX = (currentX / window.innerWidth) * 100;
    const percentY = (currentY / window.innerHeight) * 100;

    // You can uncomment this to add a dynamic gradient overlay
    /*
    document.body.style.background = `
        radial-gradient(circle at ${percentX}% ${percentY}%, rgba(168, 85, 247, 0.1), transparent 50%),
        #000000
    `;
    */

    requestAnimationFrame(updateGradient);
}

// Uncomment to enable dynamic gradient
// requestAnimationFrame(updateGradient);

// ============================
// GENERATE PLACEHOLDER IMAGES
// ============================
// Generate colorful gradient placeholders for project images
function generateProjectPlaceholders() {
    const projectImages = [
        { id: 'project-img-1', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
        { id: 'project-img-2', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
        { id: 'project-img-3', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
        { id: 'project-img-4', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
        { id: 'project-img-5', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
        { id: 'project-img-6', gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' }
    ];

    projectImages.forEach(project => {
        const img = document.getElementById(project.id);
        if (img) {
            // Create a canvas to generate gradient image
            const canvas = document.createElement('canvas');
            canvas.width = 800;
            canvas.height = 600;
            const ctx = canvas.getContext('2d');

            // Create gradient
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

            // Extract colors from CSS gradient string (simplified)
            if (project.gradient.includes('667eea')) {
                gradient.addColorStop(0, '#667eea');
                gradient.addColorStop(1, '#764ba2');
            } else if (project.gradient.includes('f093fb')) {
                gradient.addColorStop(0, '#f093fb');
                gradient.addColorStop(1, '#f5576c');
            } else if (project.gradient.includes('4facfe')) {
                gradient.addColorStop(0, '#4facfe');
                gradient.addColorStop(1, '#00f2fe');
            } else if (project.gradient.includes('43e97b')) {
                gradient.addColorStop(0, '#43e97b');
                gradient.addColorStop(1, '#38f9d7');
            } else if (project.gradient.includes('fa709a')) {
                gradient.addColorStop(0, '#fa709a');
                gradient.addColorStop(1, '#fee140');
            } else if (project.gradient.includes('30cfd0')) {
                gradient.addColorStop(0, '#30cfd0');
                gradient.addColorStop(1, '#330867');
            }

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Add some decorative elements
            ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
            for (let i = 0; i < 20; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const radius = Math.random() * 50 + 10;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            }

            // Convert to image
            img.src = canvas.toDataURL();
            img.alt = project.id.replace('project-img-', 'Project ');
        }
    });
}

// Generate placeholders when DOM is ready (Disabled as we have real images now)
/*
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateProjectPlaceholders);
} else {
    generateProjectPlaceholders();
}
*/

// ============================
// PERFORMANCE OPTIMIZATION
// ============================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Use debounced scroll for less critical updates
const debouncedScroll = debounce(() => {
    // Add any less critical scroll handlers here
}, 100);

window.addEventListener('scroll', debouncedScroll, { passive: true });

// ============================
// TYPING ANIMATION
// ============================
const roles = [
    'Strategic Branding',
    'Premium Landing Pages',
    'Complex Web Systems',
    'Full Stack Web Apps',
    'Scalable APIs',
    'AI-Powered Products',
];

let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typed-role');

const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

function typeEffect() {
    if (!typedEl) return;

    if (reducedMotionQuery.matches) {
        typedEl.textContent = roles[0];
        return;
    }
    const current = roles[roleIndex];

    if (isDeleting) {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let delay = isDeleting ? 50 : 90;

    if (!isDeleting && charIndex === current.length) {
        delay = 1800; // pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 400;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();

// ============================
// STAT COUNTERS (hero)
// ============================
function animateCounter(el, target, duration = 1800) {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
        start += step;
        if (start >= target) { el.textContent = target; clearInterval(timer); return; }
        el.textContent = Math.floor(start);
    }, 16);
}

const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.stat-number').forEach(el => {
                animateCounter(el, parseInt(el.dataset.target, 10));
            });
            statsObserver.disconnect();
        }
    });
}, { threshold: 0.5 });

// ============================
// VIDEO MODAL LOGIC
// ============================
const projectCards = document.querySelectorAll('.project-card-v2');
const videoModal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalBackdrop = document.querySelector('.modal-backdrop');

if (projectCards && videoModal && modalVideo) {
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoSrc = card.getAttribute('data-video');
            const title = card.querySelector('.p-title').textContent;
            const desc = card.querySelector('.p-description').innerHTML;

            modalVideo.src = videoSrc;
            modalTitle.textContent = title;
            modalDesc.innerHTML = desc;

            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    const closeModal = () => {
        videoModal.classList.remove('active');
        modalVideo.pause();
        modalVideo.src = '';
        document.body.style.overflow = ''; // Restore scrolling
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    // Esc key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ============================
// CUSTOM CURSOR LOGIC
// ============================
const cursorOuter = document.querySelector('.cursor-outer');
const cursorInner = document.querySelector('.cursor-inner');
const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

if (cursorOuter && cursorInner && finePointerQuery.matches && !reducedMotionQuery.matches) {
    document.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorInner.style.transform = `translate(${posX}px, ${posY}px)`;

        // Outer cursor with slight delay for smooth feel
        cursorOuter.animate({
            transform: `translate(${posX}px, ${posY}px)`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, [data-tilt]');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOuter.classList.add('cursor-hover');
            cursorInner.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursorOuter.classList.remove('cursor-hover');
            cursorInner.classList.remove('cursor-hover');
        });
    });
}

// ============================
// MAGNETIC BUTTON EFFECT
// ============================
const magneticBtns = document.querySelectorAll('.btn-primary, .btn-contact');
if (finePointerQuery.matches && !reducedMotionQuery.matches) {
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });
}

console.log('🚀 Portfolio fully enhanced with elite interactions!');

