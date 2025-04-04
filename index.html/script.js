document.addEventListener("DOMContentLoaded", function () {
    // Now JavaScript waits until the page is fully loaded
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.textContent = 
            document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    document.querySelector(".cta-button").addEventListener("click", () => {
        document.getElementById("hero-title").textContent = "You Clicked the Button!";
        document.getElementById("hero-text").textContent = "JavaScript is now interactive!";
    });

    document.querySelector(".contact button").addEventListener("click", () => {
        let name = document.getElementById("name").value;
        let greeting = document.getElementById("greeting");
        greeting.textContent = name ? `Hello, ${name}! Welcome!` : "Please enter your name.";
    });
});
