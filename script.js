/* ==========================================
   BABY NAMING CEREMONY
   Premium Script
   Part 3A
========================================== */

// ================= Loader =================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1800);

});

// ================= Open Invitation =================

const openBtn = document.getElementById("openInvitation");

if (openBtn) {

    openBtn.addEventListener("click", () => {

        document.getElementById("invitation").scrollIntoView({

            behavior: "smooth"

        });

        launchConfetti();

    });

}

// ================= Dark Mode =================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.innerHTML = "☀️";

    } else {

        themeBtn.innerHTML = "🌙";

    }

});

// ================= Countdown =================

const targetDate = new Date("July 5, 2026 11:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance < 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");

    document.getElementById("hours").textContent = String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);

// ================= Scroll Animation =================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});

// ================= Floating Flowers =================

function createFlower() {

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML = ["🌸", "🌺", "🌼"][Math.floor(Math.random() * 3)];

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.fontSize = (18 + Math.random() * 18) + "px";

    flower.style.animationDuration = (6 + Math.random() * 4) + "s";

    document.getElementById("flowers").appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 10000);

}

setInterval(createFlower, 500);
/* ==========================================
   PART 3B
========================================== */

// ================= Background Music =================

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

window.addEventListener("load", async () => {
    try {
        await bgMusic.play();
        musicBtn.innerHTML = "🔊";
    } catch (e) {
        console.log("Autoplay blocked by browser");
    }
});

musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.innerHTML = "🔊";
    } else {
        bgMusic.pause();
        musicBtn.innerHTML = "🎵";
    }
});
// Press M Key

document.addEventListener("keydown", (e) => {

    if (e.key.toLowerCase() === "m") {

        bgMusic.click();

    }

});

// ================= WhatsApp Share =================

function shareInvitation() {

    const text =
        "👶 You are invited to our Baby Naming Ceremony!\n\n" +
        window.location.href;

    window.open(

        "https://wa.me/?text=" +

        encodeURIComponent(text),

        "_blank"

    );

}

// ================= Google Calendar =================

function addCalendar() {

    const url =
        "https://calendar.google.com/calendar/render?action=TEMPLATE" +
        "&text=Baby+Naming+Ceremony" +
        "&dates=20260705T110000/20260705T140000";

    window.open(url, "_blank");

}

// ================= Confetti =================

function launchConfetti() {

    for (let i = 0; i < 150; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.background =
            `hsl(${Math.random() * 360},100%,50%)`;

        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}

// ================= Scroll Top =================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ================= RSVP =================

const form = document.getElementById("rsvpForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = form.querySelector("input").value;

    alert(
        "Thank you " +
        name +
        "! ❤️\n\nYour RSVP has been received."
    );

    form.reset();

});

// ================= Button Hover =================

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

// ================= Greeting =================

const hour = new Date().getHours();

let greeting = "Welcome";

if (hour < 12) {

    greeting = "Good Morning ☀️";

} else if (hour < 18) {

    greeting = "Good Afternoon 🌸";

} else {

    greeting = "Good Evening 🌙";

}

console.log(greeting);

// ================= Visitor Counter =================

let visits = localStorage.getItem("babyVisits");

if (!visits) {

    visits = 1;

} else {

    visits++;

}

localStorage.setItem("babyVisits", visits);

console.log("Visits:", visits);

// ================= Service Worker =================

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker

            .register("./sw.js")

            .then(() => {

                console.log("Service Worker Registered");

            })

            .catch(err => console.log(err));

    });

}

console.log("Baby Naming Ceremony Loaded Successfully ❤️");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
