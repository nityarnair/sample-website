/**
 * DYUTI 2027 - Modern Global Interactions & Navigation Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initStickyHeader();
  initSafeExternalLinks();
});

/**
 * Mobile Navigation Toggle with ARIA state management
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.dyuti-nav-toggle');
  const navMenu = document.querySelector('.dyuti-nav-links');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.setAttribute('aria-label', 'Toggle Navigation Menu');

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('show');
  });

  // Close menu on click outside or escape key
  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('show');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.focus();
    }
  });
}

/**
 * Clean Sticky Navbar Behavior (Pure CSS backed with lightweight elevation shadow trigger)
 */
function initStickyHeader() {
  const navbar = document.querySelector('.dyuti-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('dyuti-navbar-scrolled');
    } else {
      navbar.classList.remove('dyuti-navbar-scrolled');
    }
  }, { passive: true });
}

/**
 * Ensure external links with target="_blank" have rel="noopener noreferrer" for security
 */
function initSafeExternalLinks() {
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach(link => {
    if (!link.getAttribute('rel')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
}
