document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.getElementById("backBtn");
    const nextButton = document.getElementById("nextBtn");

    // Initially hide the back button
    backButton.classList.add("hidden");

    nextButton.addEventListener("click", () => {
        // Hide contents1 and contents2, show contents3 and contents4 when clicked next
        document.getElementById("contents1").classList.add("hidden");
        document.getElementById("contents2").classList.add("hidden");
        document.getElementById("contents3").classList.remove("hidden");
        document.getElementById("contents4").classList.remove("hidden");

        // Show the back button when next button is clicked
        backButton.classList.remove("hidden");
        // Hide the next button after going to the next page
        nextButton.classList.add("hidden");
    });

    backButton.addEventListener("click", () => {
        // Show contents1 and contents2, hide contents3 and contents4 when the back button is clicked
        document.getElementById("contents1").classList.remove("hidden");
        document.getElementById("contents2").classList.remove("hidden");
        document.getElementById("contents3").classList.add("hidden");
        document.getElementById("contents4").classList.add("hidden");

        // Hide the back button when back button is clicked (if navigating to the first page)
        backButton.classList.add("hidden");
        // Show the next button
        nextButton.classList.remove("hidden");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const homeButton = document.getElementById("toHomeBtn");
    homeButton.addEventListener("click", function() {
        window.location.href = "../index.html";
    });
});

