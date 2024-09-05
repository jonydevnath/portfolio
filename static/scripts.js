// Preloader
window.addEventListener('load', function () {
    setTimeout(function () {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        preloader.style.pointerEvents = 'none'; // Optional: prevents any interaction
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Input fields
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;

        // Validate input fields
        if (firstName === '') {
            document.getElementById("msg").innerHTML = "First name is required";
            document.getElementById("msg").style.color = "#D8000C";
            return;
        }

        if (lastName === '') {
            document.getElementById("msg").innerHTML = "Last name is required";
            document.getElementById("msg").style.color = "#D8000C";
            return;
        }

        if (email === '') {
            document.getElementById("msg").innerHTML = "Email is required";
            document.getElementById("msg").style.color = "#D8000C";
            return;
        } else if (!validateEmail(email)) {
            document.getElementById("msg").innerHTML = "Please enter a valid email address";
            document.getElementById("msg").style.color = "#D8000C";
            return;
        }

        if (phone === '') {
            document.getElementById("msg").innerHTML = "Phone number is required";
            document.getElementById("msg").style.color = "#D8000C";
            return;
        }

        if (message === '') {
            document.getElementById("msg").innerHTML = "Message is required";
            document.getElementById("msg").style.color = "#D8000C";
            return;
        }

        // fields fills 
        document.getElementById("msg").innerHTML = "Form submitted successfully!";
        document.getElementById("msg").style.color = "#270";

        this.reset();
    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});