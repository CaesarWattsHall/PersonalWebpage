// Add event listeners to each painting to navigate to the thoughts section
document.querySelectorAll('.painting').forEach(item => {
    item.addEventListener('click', function() {
        const paintingId = this.id;
        const thoughtsSection = document.getElementById('thoughts');
        // Scroll to the thoughts section
        thoughtsSection.scrollIntoView({ behavior: "smooth" });
        // Display thoughts about the clicked painting
        thoughtsSection.innerHTML = `
            <h2>Thoughts on ${paintingId.replace('painting', 'Painting ')}</h2>
            <p>Your thoughts about ${paintingId.replace('painting', 'Painting ')} go here...</p>
        `;
    });
});

// Contact form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you for reaching out, ${name}! Your message has been received.`);
    // Here you would typically send the form data to your server or email

    // Clear the form
    this.reset();
});
