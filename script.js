const text =
"Semoga hari ini menjadi hari yang paling indah untukmu yaw ❤️";

const typing = document.getElementById("typing");
const btn = document.getElementById("btn");
const hidden = document.getElementById("hidden");
const music = document.getElementById("bgMusic");

let i = 0;

// =======================
// Efek mengetik
// =======================
function typeWriter() {

    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }

}

typeWriter();

// =======================
// Tombol
// =======================
btn.addEventListener("click", function () {

    hidden.style.display = "block";
    btn.style.display = "none";

    // Memutar musik
    if (music) {

        music.play().catch((err) => {
            console.log("Musik tidak bisa diputar:", err);
        });

    }

});

// =======================
// Efek hati
// =======================
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}

setInterval(createHeart, 300);
