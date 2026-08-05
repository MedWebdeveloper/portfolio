// ============================================
// FINANCIAL CASE STUDY APP - JAVASCRIPT
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initTabs();
    initScrollAnimations();
    initSmoothScroll();
    initCounterAnimations();
});

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            if (navMenu.classList.contains('active')) {
                navToggle.textContent = '✕';
            } else {
                navToggle.textContent = '☰';
            }
        });
    }

    // Active link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.textContent = '☰';
            }
        });
    });

    // Update active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// TABS FUNCTIONALITY
// ============================================

function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Trigger counter animation if element has data-count attribute
                if (entry.target.hasAttribute('data-count')) {
                    animateCounter(entry.target);
                }
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.card, .metric-card, .chart-container, .timeline-item');
    
    animatedElements.forEach((element, index) => {
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        // Observe element
        observer.observe(element);
    });
}

// ============================================
// COUNTER ANIMATIONS
// ============================================

function initCounterAnimations() {
    const metricValues = document.querySelectorAll('.metric-value');
    
    metricValues.forEach(element => {
        const text = element.textContent;
        
        // Check if the text contains a number
        const match = text.match(/[\d,.]+/);
        if (match) {
            element.setAttribute('data-count', match[0]);
        }
    });
}

function animateCounter(element) {
    const target = element.getAttribute('data-count');
    if (!target) return;
    
    // Remove commas and parse
    const targetValue = parseFloat(target.replace(/,/g, ''));
    if (isNaN(targetValue)) return;
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;
    let step = 0;
    
    const timer = setInterval(() => {
        current += increment;
        step++;
        
        if (step >= steps) {
            current = targetValue;
            clearInterval(timer);
        }
        
        // Format the number
        let displayValue = Math.floor(current);
        
        // Add commas for thousands
        if (displayValue >= 1000) {
            displayValue = displayValue.toLocaleString();
        }
        
        // Get the original text and replace the number
        const originalText = element.textContent;
        const newText = originalText.replace(/[\d,.]+/, displayValue);
        element.textContent = newText;
    }, duration / steps);
}

// ============================================
// INTERACTIVE CHART HOVER EFFECTS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.bar');
    
    bars.forEach(bar => {
        bar.addEventListener('mouseenter', function() {
            // Dim other bars
            bars.forEach(b => {
                if (b !== bar) {
                    b.style.opacity = '0.5';
                }
            });
        });
        
        bar.addEventListener('mouseleave', function() {
            // Restore all bars
            bars.forEach(b => {
                b.style.opacity = '1';
            });
        });
    });
});

// ============================================
// METRIC CARDS INTERACTION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const metricCards = document.querySelectorAll('.metric-card');
    
    metricCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a pulse effect
            this.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
});

// ============================================
// BUTTON INTERACTIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// TIMELINE ANIMATIONS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                
                // Animate the marker
                const marker = entry.target.querySelector('.timeline-marker');
                if (marker) {
                    marker.style.transform = 'translateX(-50%) scale(1)';
                }
                
                timelineObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    timelineItems.forEach((item, index) => {
        // Set initial state
        item.style.opacity = '0';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Alternate animation direction
        if (index % 2 === 0) {
            item.style.transform = 'translateX(-50px)';
        } else {
            item.style.transform = 'translateX(50px)';
        }
        
        // Set marker initial state
        const marker = item.querySelector('.timeline-marker');
        if (marker) {
            marker.style.transform = 'translateX(-50%) scale(0)';
            marker.style.transition = 'transform 0.4s ease 0.3s';
        }
        
        timelineObserver.observe(item);
    });
});

// ============================================
// PARALLAX EFFECT FOR HERO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }
});

// ============================================
// CARD TILT EFFECT (3D)
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});

// ============================================
// LOADING ANIMATION
// ============================================

window.addEventListener('load', function() {
    // Fade in the page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// CONSOLE EASTER EGG
// ============================================

console.log('%c💰 FinCase - Financial Case Study Platform', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with modern UI/UX principles and best practices', 'color: #8899a6; font-size: 12px;');
console.log('%cInterested in the code? Check out the source!', 'color: #34a853; font-size: 12px;');

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// PERFORMANCE MONITORING
// ============================================

if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            
            console.log(`%cPage Load Time: ${pageLoadTime}ms`, 'color: #4285f4; font-weight: bold;');
        }, 0);
    });
}

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Add keyboard navigation for tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach((button, index) => {
        button.addEventListener('keydown', function(e) {
            let newIndex;
            
            if (e.key === 'ArrowRight') {
                newIndex = (index + 1) % tabButtons.length;
                tabButtons[newIndex].click();
                tabButtons[newIndex].focus();
            } else if (e.key === 'ArrowLeft') {
                newIndex = (index - 1 + tabButtons.length) % tabButtons.length;
                tabButtons[newIndex].click();
                tabButtons[newIndex].focus();
            }
        });
    });
    
    // Add focus visible styles
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });
});

// Add keyboard navigation styles
const keyboardStyle = document.createElement('style');
keyboardStyle.textContent = `
    body.keyboard-nav *:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }
`;
document.head.appendChild(keyboardStyle);

// ============================================
// PRINT OPTIMIZATION
// ============================================

window.addEventListener('beforeprint', function() {
    // Expand all collapsed sections for printing
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'block';
    });
});

window.addEventListener('afterprint', function() {
    // Restore original state
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        if (!content.classList.contains('active')) {
            content.style.display = 'none';
        }
    });
});

console.log('%c✨ All interactive features loaded successfully!', 'color: #38ef7d; font-weight: bold;');