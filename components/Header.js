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
        <button class="mobile-menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `;
};
