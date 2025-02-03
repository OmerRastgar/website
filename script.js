const bootstrapScript = document.createElement("script");

// Set the source to Bootstrap's CDN
bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";

// Ensure the script loads asynchronously
bootstrapScript.async = true;

// Append the script to the document's head or body
document.head.appendChild(bootstrapScript);

document.getElementById('Form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your request! We will contact you shortly to discuss your penetration testing needs.');
    this.reset();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
