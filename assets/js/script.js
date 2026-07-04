// Scroll Progress
const line = document.querySelector(".scroll-line");

window.addEventListener("scroll", () => {

const total =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress =
(document.documentElement.scrollTop / total) * 100;

line.style.width = progress + "%";

});

// Fade Animation
const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".fade-up").forEach(el=>{

observer.observe(el);

});

// Particle
for(let i=0;i<35;i++){

const p=document.createElement("span");

p.classList.add("particle");

if(Math.random()>0.5){

p.classList.add("gold");

}

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=(8+Math.random()*8)+"s";

p.style.animationDelay=Math.random()*6+"s";

document.body.appendChild(p);

}

document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});