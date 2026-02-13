const audio = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("musicToggle");

// Restore saved state
const isMuted = localStorage.getItem("musicMuted") === "true";

if (!isMuted) {
    audio.play().catch(() => {});
}

audio.muted = isMuted;
toggleBtn.textContent = isMuted ? "🔇" : "🔊";

toggleBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;

    localStorage.setItem("musicMuted", audio.muted);
    toggleBtn.textContent = audio.muted ? "🔇" : "🔊";

    if (!audio.muted) {
        audio.play();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const homeButton = document.getElementById("toHomeBtn");
    homeButton.addEventListener("click", function() {
        window.location.href = "../index.html";
    });
});