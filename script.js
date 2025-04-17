// You can add JavaScript for interactivity here.
// For example:

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic form submission handling (you'd likely use a backend service for real submission)
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Message sent! (This is a placeholder)');
        this.reset(); // Clear the form
    });
}

// You could also add functionality to filter projects, display project details, etc.
