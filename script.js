// Source Cashflow Website JavaScript
// Add any interactivity here later (e.g., smooth scrolling, form validation)

document.addEventListener('DOMContentLoaded', () => {
    console.log('Source Cashflow website loaded.');

    // Example: Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav ul li a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 