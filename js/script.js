'use strict'

// Menu dots

window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            console.log(id);
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${id}"]`).classList.add('active-dot');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).classList.remove('active-dot');
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

