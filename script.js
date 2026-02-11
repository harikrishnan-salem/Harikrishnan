document.addEventListener('DOMContentLoaded', () => {

  // ===== Sidebar toggle =====
  const brand = document.querySelector('.brand');
  const navLinks = document.querySelector('.navlinks');

  if (brand && navLinks) {
    brand.addEventListener('click', () => navLinks.classList.toggle('show'));

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('show'));
    });
  }

  // ===== Active nav highlighting =====
  const path = window.location.pathname.split("/").pop() || 'index.html';

  document.querySelectorAll('.navlinks a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === path);
  });

  // ===== Footer year =====
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // ===== RPS / NG toggle =====
  const rps = document.getElementById("rps");
  const ng = document.getElementById("ng");
  const rpsBtn = document.querySelector(".rps-show");
  const ngBtn = document.querySelector(".ng-show");

  if (rps && ng && rpsBtn && ngBtn) {

    rps.style.display = "none";
    ng.style.display = "none";
    rpsBtn.textContent = "Show";
    ngBtn.textContent = "Show";

    function togglePre(button, pre, otherPre, otherBtn) {
      if (pre.style.display === "none" || pre.style.display === "") {
        pre.style.display = "block";
        button.textContent = "Hide";
        otherPre.style.display = "none";
        otherBtn.textContent = "Show";
      } else {
        pre.style.display = "none";
        button.textContent = "Show";
      }
    }

    rpsBtn.addEventListener("click", () => togglePre(rpsBtn, rps, ng, ngBtn));
    ngBtn.addEventListener("click", () => togglePre(ngBtn, ng, rps, rpsBtn));
  }

  // ===== Gmail link =====
  const emailLink = document.getElementById("emailLink");
  if (emailLink) {
    emailLink.href = "mailto:harikrishnan@gmail.com";
    emailLink.textContent = "harikrishnan@gmail.com";
  }

});