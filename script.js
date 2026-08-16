// ---------- Rotating role typewriter ----------
const roles = [
  "MERN Stack Developer",
  "B.Tech CSE Student",
  "Freelance Web Developer",
  "Node.js & Express Enthusiast"
];
const roleEl = document.getElementById('roleText');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop(){
  const current = roles[roleIndex];
  if(!deleting){
    charIndex++;
    roleEl.textContent = current.slice(0, charIndex);
    if(charIndex === current.length){
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    roleEl.textContent = current.slice(0, charIndex);
    if(charIndex === 0){
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 35 : 70);
}
if(roleEl) typeLoop();

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('[data-aos]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('aos-animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// ---------- Collapse navbar on link click (mobile) ----------
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const collapseEl = document.getElementById('navMenu');
    if(collapseEl && collapseEl.classList.contains('show')){
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapseEl);
      bsCollapse.hide();
    }
  });
});

// ---------- Toggle hamburger icon to X when mobile menu is open ----------
const navMenuEl = document.getElementById('navMenu');
const togglerIcon = document.querySelector('.navbar-toggler .ti');
if(navMenuEl && togglerIcon){
  navMenuEl.addEventListener('shown.bs.collapse', () => {
    togglerIcon.classList.remove('ti-menu-2');
    togglerIcon.classList.add('ti-x');
  });
  navMenuEl.addEventListener('hidden.bs.collapse', () => {
    togglerIcon.classList.remove('ti-x');
    togglerIcon.classList.add('ti-menu-2');
  });
}