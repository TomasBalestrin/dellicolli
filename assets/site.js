(function(){
  "use strict";

  // Ano corrente no rodapé
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  // Menu mobile
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  if (toggle && nav) {
    toggle.addEventListener("click", function(){
      var open = nav.classList.toggle("nav--open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // Fecha ao escolher um destino
    nav.querySelectorAll("#navLinks a").forEach(function(a){
      a.addEventListener("click", function(){
        nav.classList.remove("nav--open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Revelação ao rolar — respeitando prefers-reduced-motion
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");

  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach(function(el){ el.classList.add("is-in"); });
    return;
  }

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (!entry.isIntersecting) return;
      var el = entry.target;
      // Escalona irmãos dentro do mesmo grupo para um reveal orquestrado
      var sibs = Array.prototype.slice.call(el.parentNode.children)
                   .filter(function(n){ return n.classList.contains("reveal"); });
      var i = sibs.indexOf(el);
      el.style.transitionDelay = (i > 0 ? Math.min(i, 4) * 80 : 0) + "ms";
      el.classList.add("is-in");
      io.unobserve(el);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  items.forEach(function(el){ io.observe(el); });
})();
