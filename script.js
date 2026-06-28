/* ==========================
   BABY NAMING CEREMONY
   script.js
========================== */

// Hide Loader
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        document.getElementById("loader").style.visibility = "hidden";
    }, 1500);
});

// Open Invitation Button
document.getElementById("openInvitation").addEventListener("click", () => {

    document.getElementById("invite").scrollIntoView({
        behavior: "smooth"
    });

    launchConfetti();

});

// Dark Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML="☀️";
    }else{
        themeBtn.innerHTML="🌙";
    }

});

// Countdown

const targetDate = new Date("July 5, 2026 11:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance % (1000*60*60))/(1000*60));

    const seconds = Math.floor((distance % (1000*60))/1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

},1000);

// Card Zoom

const card=document.querySelector(".card img");

card.addEventListener("click",()=>{

if(card.classList.contains("zoom")){

card.classList.remove("zoom");

}else{

card.classList.add("zoom");

}

});

// Scroll Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

// Floating Flowers

function createFlower(){

const flower=document.createElement("div");

flower.innerHTML="🌸";

flower.className="flower";

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=5+Math.random()*5+"s";

flower.style.fontSize=20+Math.random()*20+"px";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},10000);

}

setInterval(createFlower,500);

// Background Music

let music;

function loadMusic(){

music=new Audio("assets/music.mp3");

music.loop=true;

}

loadMusic();

function toggleMusic(){

if(music.paused){

music.play();

}else{

music.pause();

}

}

// Press M to play music

document.addEventListener("keydown",(e)=>{

if(e.key==="m"){

toggleMusic();

}

});

// WhatsApp Share

function shareInvitation(){

const url=window.location.href;

const text="You're invited to our Baby Naming Ceremony ❤️ "+url;

window.open(

"https://wa.me/?text="+encodeURIComponent(text),

"_blank"

);

}

// Calendar

function addCalendar(){

window.open(

"https://calendar.google.com/calendar/render?action=TEMPLATE&text=Baby+Naming+Ceremony&dates=20260705T110000/20260705T140000",

"_blank"

);

}

// Confetti

function launchConfetti(){

for(let i=0;i<150;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=

`hsl(${Math.random()*360},100%,50%)`;

c.style.animationDuration=

2+Math.random()*3+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},5000);

}

}

// Visitor Counter

let count=localStorage.getItem("visits");

if(!count){

count=1;

}else{

count++;

}

localStorage.setItem("visits",count);

console.log("Visits:",count);

// Greeting

const hour=new Date().getHours();

let greet="Welcome";

if(hour<12){

greet="Good Morning";

}else if(hour<18){

greet="Good Afternoon";

}else{

greet="Good Evening";

}

console.log(greet);

// Smooth Fade

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});
// Register Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("./sw.js")
            .then(() => console.log("Service Worker Registered"))
            .catch(err => console.log(err));
    });
}
