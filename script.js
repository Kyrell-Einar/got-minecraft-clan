// MENU MOBILE
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// ANIMAÇÃO AO SCROLL (fade in)
const elements = document.querySelectorAll('.about-card, .highlight-card, .stat-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));

// CONTADOR DE NÚMEROS (efeito sistema)
const counters = document.querySelectorAll('.stat-number');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.innerText.replace(/[^\d]/g, '');
        const current = +counter.getAttribute('data-count') || 0;

        const increment = target / 50;

        if (current < target) {
            const newCount = Math.ceil(current + increment);
            counter.setAttribute('data-count', newCount);
            counter.innerText = newCount;
            setTimeout(updateCount, 30);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});