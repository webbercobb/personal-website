// Reusable navigation component
function createNavigation(activePage) {
  const pages = [
    { name: 'Home', href: 'index.html' },
    { name: 'Work', href: 'work.html' },
    { name: 'Events', href: 'events.html' },
    { name: 'CV', href: 'cv.html' },
    { name: 'Contact', href: 'contact.html' }
  ];

  return pages.map(page => 
    `<a href="${page.href}" class="nav-link${activePage === page.name ? ' active' : ''}">${page.name}</a>`
  ).join('\n        ');
}

// Create header HTML
function createHeader(activePage) {
  return `
  <header>
    <div class="header-gradient"></div>
    <div class="header-content">
      <div class="logo">CW</div>
      <nav>
        ${createNavigation(activePage)}
      </nav>
    </div>
  </header>`;
}

// Insert header into page
function initHeader(activePage) {
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.outerHTML = createHeader(activePage);
  }
}

