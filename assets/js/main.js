document.addEventListener('DOMContentLoaded', function () {
  // Fade-in on scroll via Intersection Observer
  const fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // Scroll-to-top button
  var scrollBtn = document.getElementById('scrollTop');
  var content = document.getElementById('content');
  if (scrollBtn && content) {
    content.addEventListener('scroll', function () {
      if (content.scrollTop > 400) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });

    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });

    scrollBtn.addEventListener('click', function () {
      content.scrollTo({ top: 0, behavior: 'smooth' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile sidebar toggle
  var toggle = document.querySelector('.mobile-menu-toggle');
  var sidebar = document.getElementById('sidebar');
  if (toggle && sidebar) {
    var overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    function openSidebar() {
      sidebar.classList.add('open');
      toggle.classList.add('active');
      overlay.classList.add('active');
    }

    function closeSidebar() {
      sidebar.classList.remove('open');
      toggle.classList.remove('active');
      overlay.classList.remove('active');
    }

    toggle.addEventListener('click', function () {
      if (sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });

    overlay.addEventListener('click', closeSidebar);

    sidebar.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeSidebar);
    });
  }
});
