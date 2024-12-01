// Function to create a spark element
const createSpark = (x, y) => {
    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    document.body.appendChild(spark);

    setTimeout(() => {
        spark.remove();
    }, 500); // Remove spark after animation
};

// Mousemove event handler for the entire document
document.addEventListener("mousemove", function (e) {
    createSpark(e.pageX, e.pageY);
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', form.action);
        xhr.setRequestHeader('Accept', 'application/json');
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    alert('Message sent successfully!');
                    form.reset(); // Clear the form fields
                } else {
                    alert('Oops! Something went wrong.');
                }
            }
        };

        xhr.send(formData);
    });
});
