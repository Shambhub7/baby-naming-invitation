/* ==========================
   BABY NAMING CEREMONY
   script.js
========================== */

// ================= Loader =================
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }
    }, 1500);
});

// ================= Open Invitation =================
const openInvitationBtn = document.getElementById("openInvitation");

if (openInvitationBtn) {
    openInvitationBtn.addEventListener("click", () => {

        document.getElementById("invitation").scrollIntoView({
            behavior: "smooth"
        });

        launchConfetti();
    });
}

// ================= Dark Mode =================
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        themeBtn.innerHTML =
            document.body.classList.contains("dark") ? "☀️" : "🌙";

    });

}

// ================= Countdown =================

const targetDate = new Date("July 5, 2026 11:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}, 1000);

// ================= Invitation Card Zoom =================

const card = document.querySelector(".card img");

if (card) {

    card.addEventListener("click", () => {

        card.classList.toggle("zoom");

    });

}

// ================= Scroll Animation =================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});

// ================= Floating Flowers =================

function createFlower() {

    const flower = document.createElement("div");

    flower.className = "flower";
    flower.innerHTML = "🌸";

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.fontSize = (20 + Math.random() * 20) + "px";
    flower.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 10000);

}

setInterval(createFlower, 500);

// ================= Background Music =================

let music = new Audio("assets/music.mp3");

music.loop = true;

const musicBtn = document.getElementById("musicBtn");

function toggleMusic() {

    if (music.paused) {

        music.play();

        if (musicBtn)
            musicBtn.innerHTML = "⏸️";

    } else {

        music.pause();

        if (musicBtn)
            musicBtn.innerHTML = "🎵";

    }

}

if (musicBtn) {

    musicBtn.addEventListener("click", toggleMusic);

}

document.addEventListener("keydown", (e) => {

    if (e.key.toLowerCase() === "m") {

        toggleMusic();

    }

});

// ================= WhatsApp Share =================

function shareInvitation() {

    const text =
        "You're invited to our Baby Naming Ceremony ❤️\n\n" +
        window.location.href;

    window.open(

        "https://wa.me/?text=" + encodeURIComponent(text),

        "_blank"

    );

}

// ================= Google Calendar =================

function addCalendar() {

    window.open(

        "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Baby+Naming+Ceremony&dates=20260705T110000/20260705T140000",

        "_blank"

    );

}

// ================= Confetti =================

function launchConfetti() {

    for (let i = 0; i < 150; i++) {

        const c = document.createElement("div");

        c.className = "confetti";

        c.style.left = Math.random() * 100 + "vw";

        c.style.background =
            `hsl(${Math.random() * 360},100%,50%)`;

        c.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(c);

        setTimeout(() => {

            c.remove();

        }, 5000);

    }

}

// ================= RSVP =================

const rsvpForm = document.getElementById("rsvpForm");

if (rsvpForm) {

    rsvpForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("🎉 Thank you! Your RSVP has been received.");

        rsvpForm.reset();

    });

}

// ================= Scroll To Top =================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (!scrollBtn) return;

    scrollBtn.style.display =
        window.scrollY > 300 ? "block" : "none";

});

if (scrollBtn) {

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ================= Visitor Counter =================

let visits = Number(localStorage.getItem("visits")) || 0;

visits++;

localStorage.setItem("visits", visits);

console.log("Visits:", visits);

// ================= Greeting =================

const hour = new Date().getHours();

let greeting = "Welcome";

if (hour < 12)
    greeting = "Good Morning";
else if (hour < 18)
    greeting = "Good Afternoon";
else
    greeting = "Good Evening";

console.log(greeting);

// ================= Button Hover =================

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

// ================= Service Worker =================

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("./sw.js")
            .then(() => console.log("✅ Service Worker Registered"))
            .catch(err => console.log(err));

    });

}
