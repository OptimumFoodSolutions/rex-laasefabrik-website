/* Rex Låsefabrik – site.js
   Header (fast og hvid ved scroll, hamburger), aktivt menupunkt, hero-slideshow, scroll-til-top, årstal og mailto-formular.
   Ingen eksterne kald. Bump ?v= i alle sider, når filen ændres. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  // --- Header: gennemsigtig øverst, hvid og fast efter 80 px ---
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('fixed', window.scrollY > 80); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Hamburger ---
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') nav.classList.remove('open'); });
  }

  // --- Aktivt menupunkt ---
  var path = location.pathname.replace(/index\.html$/, '');
  document.querySelectorAll('.nav a').forEach(function (a) {
    if (a.pathname.replace(/index\.html$/, '') === path) a.classList.add('active');
  });

  // --- Hero-slideshow (fade, 500 ms, som originalens Elementor-slideshow) ---
  var slides = document.querySelectorAll('.hero .slide');
  if (slides.length > 1) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('on');
      i = (i + 1) % slides.length;
      slides[i].classList.add('on');
    }, 5000);
  }

  // --- Scroll-til-top ---
  var top = document.querySelector('.to-top');
  if (top) {
    window.addEventListener('scroll', function () { top.classList.toggle('show', window.scrollY > 400); }, { passive: true });
    top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  // --- Årstal i footer ---
  document.querySelectorAll('.year').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // --- Kontaktformular (mailto – sitet er statisk) ---
  document.querySelectorAll('form.form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = function (n) { var el = form.querySelector('[name="' + n + '"]'); return el ? el.value.trim() : ''; };
      if (v('hp')) return; // honeypot
      var subject = 'Henvendelse fra hjemmesiden' + (v('navn') ? ' – ' + v('navn') : '');
      var body = 'Navn: ' + v('navn') + '\nTelefon: ' + v('telefon') + '\nE-mail: ' + v('email') + '\n\n' + v('besked');
      location.href = 'mailto:' + form.getAttribute('data-to') + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  });
})();
