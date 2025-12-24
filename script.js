// 🔄 Image Slideshow
let images = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg"
];
let index = 0;
const slide = document.getElementById("slide");

function nextImg() {
    index = (index + 1) % images.length;
    slide.src = images[index];
}
setInterval(nextImg, 3000);

// 🎶 Play Music
window.onload = () => {
    document.getElementById("bgMusic").play();
};

// ❄️ Snow Animation
function createSnow() {
    const snow = document.createElement("div");
    snow.classList.add("flake");
    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = Math.random() * 3 + 4 + "s";
    snow.style.opacity = Math.random();
    snow.style.fontSize = Math.random() * 10 + 10 + "px";
    document.getElementById("snow").appendChild(snow);

    setTimeout(() => snow.remove(), 7000);
}

setInterval(createSnow, 100);

// ❤️ Hearts Falling
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
}

setInterval(createHeart, 800);
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("bgMusic").play();
}
