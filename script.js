// === Matrix Hacker Effect ===
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);

let drops = Array(columns).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00f7ff";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 35);

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // 🔥 Fix: Recalculate columns & drops on resize
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
});

// === Sidebar Navigation Logic ===
const links = document.querySelectorAll(".sidebar a");
const sections = document.querySelectorAll(".content-section");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("data-section");

    // Remove active classes
    links.forEach(l => l.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    // Add active to clicked menu and section
    link.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});

// Show Home section by default
document.querySelector(".sidebar a[data-section='home']").classList.add("active");
document.getElementById("home").classList.add("active"); // 🔥 ensure home section is visible on load
