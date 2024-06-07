// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            let valid = true;

            if (!name) {
                alert('Please enter your name.');
                valid = false;
            }
            if (!email || !validateEmail(email)) {
                alert('Please enter a valid email address.');
                valid = false;
            }
            if (!message) {
                alert('Please enter a message.');
                valid = false;
            }

            if (valid) {
                // Form is valid, you can submit the form or send data via AJAX here
                alert('Thank you for your message!');
                form.reset(); // Clear the form
            }
        });
    }

    // Responsive navigation menu
    const nav = document.querySelector('nav');
    const navToggle = document.createElement('button');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    nav.insertBefore(navToggle, nav.firstChild);

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function toggleDescription(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}







