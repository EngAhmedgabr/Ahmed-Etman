// ===========================
// Mobile Navigation Toggle
// ===========================

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// ===========================
// Project Details Toggle
// ===========================

const expandButtons = document.querySelectorAll('.btn-expand');

expandButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('aria-controls');
        const detailsElement = document.getElementById(targetId);
        const isExpanded = button.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            detailsElement.setAttribute('hidden', '');
            button.setAttribute('aria-expanded', 'false');
            button.textContent = 'View Details';
        } else {
            detailsElement.removeAttribute('hidden');
            button.setAttribute('aria-expanded', 'true');
            button.textContent = 'Hide Details';
        }
    });
});

// ===========================
// Smooth Scroll (Fallback for older browsers)
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for empty hash or # only
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Active Navigation Link on Scroll
// ===========================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===========================
// Navbar Background on Scroll
// ===========================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Scroll Reveal Animation (Optional)
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.section, .project-card, .skill-item, .experience-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// Keyboard Navigation Enhancement
// ===========================

// Add keyboard support for project expand buttons
expandButtons.forEach(button => {
    button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            button.click();
        }
    });
});

// ===========================
// Print Styles Enhancement
// ===========================

window.addEventListener('beforeprint', () => {
    // Expand all project details before printing
    expandButtons.forEach(button => {
        const targetId = button.getAttribute('aria-controls');
        const detailsElement = document.getElementById(targetId);
        detailsElement.removeAttribute('hidden');
    });
});

// ===========================
// Console Welcome Message
// ===========================

console.log('%c Welcome to Ahmed Etman\'s Portfolio! ', 'background: #93A8DF; color: #000; font-size: 20px; padding: 10px;');
console.log('%c Interested in the code? Check out the source! ', 'background: #000; color: #93A8DF; font-size: 14px; padding: 5px;');