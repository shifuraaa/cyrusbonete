// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize animations and effects
    initScrollEffects();
    initIntersectionObserver();
    initSkillBars();
    initPortfolioEffects();
    initMobileMenu();
    initTypingEffect();
});

// Navbar scroll effect
function initScrollEffects() {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Intersection Observer for fade-in animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Animate skill bars when visible
function initSkillBars() {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const width = progressBar.getAttribute('data-width');
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 300);
                skillObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('.skill-card').forEach(card => {
        skillObserver.observe(card);
    });
}

// Portfolio item interactions
function initPortfolioEffects() {
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
                navLinks.style.position = 'static';
                navLinks.style.background = 'transparent';
                navLinks.style.width = 'auto';
                navLinks.style.top = 'auto';
                navLinks.style.left = 'auto';
                navLinks.style.flexDirection = 'row';
                navLinks.style.padding = '0';
                navLinks.style.boxShadow = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(0, 0, 0, 0.95)';
                navLinks.style.flexDirection = 'column';
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            }
        });

        // Close mobile menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            });
        });

        // Close mobile menu when resizing to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navLinks.style.display = 'flex';
                navLinks.style.position = 'static';
                navLinks.style.background = 'transparent';
                navLinks.style.width = 'auto';
                navLinks.style.flexDirection = 'row';
                navLinks.style.padding = '0';
                navLinks.style.boxShadow = 'none';
            } else {
                navLinks.style.display = 'none';
            }
        });
    }
}

// Typing effect for hero subtitle
function initTypingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        setTimeout(() => {
            typeWriter(subtitle, originalText, 80);
        }, 1000);
    }
}

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Portfolio item click handler
function openProject(projectName) {
    // You can customize this function to open project details
    // For example, open a modal, redirect to a project page, etc.
    
    const projectData = {
        'ecommerce': {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
            github: 'https://github.com/yourprofile/ecommerce-project',
            demo: 'https://your-ecommerce-demo.com'
        },
        'dashboard': {
            title: 'Analytics Dashboard',
            description: 'Real-time data visualization dashboard with interactive charts and graphs using D3.js and WebSocket connections.',
            technologies: ['D3.js', 'WebSocket', 'Express.js', 'PostgreSQL'],
            github: 'https://github.com/yourprofile/analytics-dashboard',
            demo: 'https://your-dashboard-demo.com'
        },
        'mobile': {
            title: 'Mobile App',
            description: 'Cross-platform mobile application built with React Native, featuring offline functionality and push notifications.',
            technologies: ['React Native', 'Firebase', 'Redux', 'AsyncStorage'],
            github: 'https://github.com/yourprofile/mobile-app',
            demo: 'https://play.google.com/your-app'
        },
        'website': {
            title: 'Corporate Website',
            description: 'Modern responsive corporate website with content management system and SEO optimization.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress'],
            github: 'https://github.com/yourprofile/corporate-website',
            demo: 'https://your-corporate-demo.com'
        },
        'api': {
            title: 'REST API',
            description: 'Scalable RESTful API with comprehensive documentation, authentication, and rate limiting.',
            technologies: ['Express.js', 'JWT', 'Swagger', 'Redis'],
            github: 'https://github.com/yourprofile/rest-api',
            demo: 'https://your-api-docs.com'
        },
        'game': {
            title: 'Web Game',
            description: 'Interactive browser game built with JavaScript and HTML5 Canvas, featuring physics and multiplayer support.',
            technologies: ['JavaScript', 'Canvas API', 'WebSocket', 'Node.js'],
            github: 'https://github.com/yourprofile/web-game',
            demo: 'https://your-game-demo.com'
        }
    };

    const project = projectData[projectName];
    if (project) {
        // Create and show modal or alert with project details
        const message = `
${project.title}

${project.description}

Technologies: ${project.technologies.join(', ')}

GitHub: ${project.github}
Demo: ${project.demo}

(In a real portfolio, this would open a detailed modal or redirect to project page)
        `;
        alert(message);
    } else {
        alert('Project details not found.');
    }
}

// Contact form handler
function sendMessage() {
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    let isValid = true;
    let formData = {};
    
    inputs.forEach(input => {
        const value = input.value.trim();
        if (!value) {
            isValid = false;
            input.style.borderColor = '#ff4444';
            setTimeout(() => {
                input.style.borderColor = '#333';
            }, 3000);
        } else {
            input.style.borderColor = '#666';
            // Store form data (in a real app, you'd send this to a server)
            formData[input.placeholder.toLowerCase().replace(' ', '_')] = value;
        }
    });

    if (isValid) {
        // Here you would typically send the data to your server
        console.log('Form Data:', formData);
        
        alert('Thank you for your message! I\'ll get back to you soon.');
        
        // Clear form
        inputs.forEach(input => input.value = '');
        
        // You could also integrate with services like EmailJS, Formspree, etc.
        // Example with EmailJS:
        // emailjs.send('service_id', 'template_id', formData)
        //     .then(() => console.log('Email sent successfully'));
        
    } else {
        alert('Please fill in all fields.');
    }
}

// Utility functions
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

// Add smooth scroll behavior for browsers that don't support it
function smoothScrollTo(target, duration = 1000) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}