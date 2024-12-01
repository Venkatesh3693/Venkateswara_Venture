document.getElementById("sparkEffect").addEventListener("mouseover", function (e) {
    const createSpark = () => {
        const spark = document.createElement("div");
        spark.className = "spark";
        spark.style.left = `${e.pageX}px`;
        spark.style.top = `${e.pageY}px`;
        document.body.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 500); // Remove spark after animation
    };

    for (let i = 0; i < 50; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 50;
        const x = e.pageX + radius * Math.cos(angle);
        const y = e.pageY + radius * Math.sin(angle);
        setTimeout(() => createSpark(x, y), i * 20); // Create multiple sparks with slight delay
    }
});

document.getElementById("sparkEffect").addEventListener("mousemove", function (e) {
    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.left = `${e.pageX}px`;
    spark.style.top = `${e.pageY}px`;
    document.body.appendChild(spark);

    setTimeout(() => {
        spark.remove();
    }, 500); // Remove spark after animation
});

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
