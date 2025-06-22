
// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileToggle.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
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

// Button Click Handlers - THIS IS WHERE YOU ADD YOUR LINKS
const buttons = {
  // Navigation CTA button
  'nav-cta': () => {
    console.log('Navigation CTA clicked');
    // ADD YOUR LINK HERE: window.open('https://your-booking-link.com', '_blank');
    alert('Navigation CTA clicked! Add your booking link in script.js');
  },
  
  // Hero section main CTA
  'hero-cta': () => {
    console.log('Hero CTA clicked');
    // ADD YOUR MAIN BOOKING LINK HERE: window.open('https://your-main-booking-link.com', '_blank');
    alert('Hero CTA clicked! Add your main booking link in script.js');
  },
  
  // Learn more button
  'learn-more': () => {
    console.log('Learn more clicked');
    // Scroll to services section or add external link
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  }
};

// Pricing plan buttons
document.querySelectorAll('.plan-button').forEach(button => {
  button.addEventListener('click', (e) => {
    const plan = e.target.getAttribute('data-plan');
    console.log(`${plan} plan selected`);
    
    // ADD YOUR PRICING LINKS HERE based on plan
    switch(plan) {
      case 'starter':
        // window.open('https://your-starter-plan-link.com', '_blank');
        alert('Starter plan selected! Add your payment link in script.js');
        break;
      case 'premium':
        // window.open('https://your-premium-plan-link.com', '_blank');
        alert('Premium plan selected! Add your payment link in script.js');
        break;
      case 'elite':
        // window.open('https://your-elite-plan-link.com', '_blank');
        alert('Elite plan selected! Add your payment link in script.js');
        break;
    }
  });
});

// Add event listeners for all buttons
Object.keys(buttons).forEach(buttonId => {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener('click', buttons[buttonId]);
  }
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

// Intersection Observer for animations
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

// Observe elements for animation
document.querySelectorAll('.service-card, .pricing-card, .about-text, .about-image').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Form submission handler (if you add a contact form later)
function handleFormSubmit(formData) {
  console.log('Form submitted:', formData);
  // ADD YOUR FORM HANDLING HERE
  // This could be integrated with services like:
  // - Netlify Forms
  // - Formspree
  // - EmailJS
  // - Your own backend API
}

// Analytics tracking (add your tracking code)
function trackEvent(eventName, eventData) {
  console.log('Event tracked:', eventName, eventData);
  // ADD YOUR ANALYTICS TRACKING HERE
  // Examples:
  // gtag('event', eventName, eventData); // Google Analytics
  // fbq('track', eventName, eventData); // Facebook Pixel
  // analytics.track(eventName, eventData); // Segment
}

// Track button clicks for analytics
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.textContent.trim();
    trackEvent('button_click', {
      button_text: buttonText,
      page_url: window.location.href
    });
  });
});

console.log('🚀 Landing page loaded successfully!');
console.log('📝 To add your links, edit the button handlers in script.js');
