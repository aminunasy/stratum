export const Header = () => {
    return `
    <header class="site-header">
      <div class="container header-content">
        <a href="#/" class="logo">STRATUM</a>
        <nav class="main-nav">
          <a href="#/" class="nav-link">Home</a>
          <a href="#/services" class="nav-link">Services</a>
          <a href="#/projects" class="nav-link">Projects</a>
          <a href="#/methodology" class="nav-link">Methodology</a>
          <a href="#/contact" class="nav-link">Contact</a>
        </nav>
        <div class="header-actions" style="display: flex; align-items: center; gap: 1rem;">
            <button id="theme-toggle" class="theme-btn" aria-label="Toggle theme" style="background: none; border: 1px solid var(--color-border); color: var(--color-text); padding: 0.5rem; cursor: pointer;">
                ☀/☾
            </button>
            <button class="mobile-menu-toggle" aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
        </div>
      </div>
    </header>
  `;
};
