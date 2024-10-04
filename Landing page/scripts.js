document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.hero-image img');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled > 50) {
            heroImage.style.transform = 'translateY(-20px)';
        } else {
            heroImage.style.transform = 'translateY(0)';
        }
    });
});
