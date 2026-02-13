document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.getElementById("fade-in-effect");

    // Add the 'show' class to h1 for fade-in effect after the typing effect duration
    setTimeout(() => {
        h1.classList.add("show");

        // Set a timeout to redirect to the homepage after 3 seconds
        setTimeout(() => {
            window.location.href = "file:///C:/Users/Claynne%20Casampol/Personal%20Proj/Valentines%20Day/Home%20Page/Home.html";
        }, 4000);
    }, 2000);
});