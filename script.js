// Ensure the background is white while popup is active
window.onload = function () {
    document.body.style.backgroundColor = "white";
};

function startSite() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
    document.body.style.backgroundColor = "#fff0f5"; // Restore main content background
    startSlideshow();
    createHearts();
}

// Slideshow function for photo sections
function startSlideshow() {
    const photoSections = document.querySelectorAll(".photo");
    photoSections.forEach(section => {
        const images = section.querySelectorAll("img");
        let index = 0;
        images.forEach((img, i) => img.style.opacity = i === 0 ? 1 : 0);
        setInterval(() => {
            images[index].style.opacity = 0;
            index = (index + 1) % images.length;
            images[index].style.opacity = 1;
        }, 3000);
    });
}

// Heart animation surprise
// Heart animation surprise with infinite loop
function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "%"; // Random position
        heart.innerHTML = "❤️";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000); // Remove after animation ends
    }, 500); // Create a new heart every 500ms
}

