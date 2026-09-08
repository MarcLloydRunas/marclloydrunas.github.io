// Footer year
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// Mobile nav toggle
const navtoggle = document.getElementById('navtoggle');
const navlinks = document.getElementById('navlinks');
if (navtoggle && navlinks) {
  navtoggle.addEventListener('click', () => {
    const open = navlinks.classList.toggle('open');
    navtoggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navlinks.classList.remove('open');
    navtoggle.setAttribute('aria-expanded', 'false');
  }));
}

// ---- Project card builder ----
function projectCard(p, expanded) {
  const buttons = [];

  if (p.link) {
    buttons.push(`<a href="${p.link}" target="_blank" rel="noopener" class="btn primary card-link">${p.linkLabel} ↗</a>`);
  }
  if (p.media) {
    buttons.push(`<a href="${p.media}" target="_blank" rel="noopener" class="btn card-link">${p.mediaLabel} ↗</a>`);
  }
  if (!p.link && !p.media) {
    buttons.push(`<span class="card-link-disabled">${p.mediaLabel || 'Private / internal project'}</span>`);
  }

  return `
    <article class="panel card">
      <div class="panel-head">
        <span>${p.id}</span>
        <span class="status ${p.status}">${p.statusLabel}</span>
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p class="card-summary">${p.summary}</p>
        ${expanded ? `<p class="card-detail">${p.detail}</p>` : ''}
        <div class="stacktags">
          ${p.stack.map(s => `<span class="stacktag">${s}</span>`).join('')}
        </div>
        <div class="card-footer">${buttons.join(' ')}</div>
      </div>
    </article>
  `;
}

// Render featured (first 3) on home page
const featuredGrid = document.getElementById('featured-grid');
if (featuredGrid && typeof PROJECTS !== 'undefined') {
  featuredGrid.innerHTML = PROJECTS.slice(0, 3).map(p => projectCard(p, false)).join('');
}

// Render full list on projects page
const fullGrid = document.getElementById('projects-grid');
if (fullGrid && typeof PROJECTS !== 'undefined') {
  fullGrid.innerHTML = PROJECTS.map(p => projectCard(p, true)).join('');
}
