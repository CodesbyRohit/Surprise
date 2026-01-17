// Scroll to gift section
function scrollDown() {
  document.querySelector(".gift").scrollIntoView({ behavior: "smooth" });
}

// Surprise message reveal
document.getElementById("surpriseButton").addEventListener("click", () => {
  const msg = document.getElementById("hiddenMessage");
  msg.style.display = "block";
  msg.scrollIntoView({ behavior: "smooth" });
});

// Confetti particles
const confettiButton = document.getElementById("confettiButton");
confettiButton.addEventListener("click", () => {
  launchConfetti();
});

// Particle background
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for(let i=0;i<150;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*3+1,
    dx: (Math.random()-0.5)*1.5,
    dy: (Math.random()-0.5)*1.5
  });
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(255,255,255,0.6)";
    ctx.fill();
    p.x += p.dx; p.y += p.dy;
    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// Confetti
function launchConfetti(){
  const confetti = [];
  for(let i=0;i<200;i++){
    confetti.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      r: Math.random()*6+2,
      color: `hsl(${Math.random()*360},100%,70%)`,
      dy: Math.random()*3+2
    });
  }

  function drawConfetti(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle="rgba(255,255,255,0.6)";
      ctx.fill();
    });
    confetti.forEach(c=>{
      ctx.beginPath();
      ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
      ctx.fillStyle = c.color;
      ctx.fill();
      c.y += c.dy;
      if(c.y>canvas.height) c.y = 0;
    });
    requestAnimationFrame(drawConfetti);
  }
  drawConfetti();
}

// Responsive
window.addEventListener("resize",()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
