export const Footer = () => {
    const year = new Date().getFullYear();
    return `
    <footer class="site-footer">
      <div class="container footer-content">
        <div class="footer-brand">
          <h3>STRATUM</h3>
          <p>Premium Roofing Systems</p>
        </div>
        <div class="footer-links">
          <a href="#/services">Services</a>
          <a href="#/projects">Projects</a>
          <a href="#/methodology">Methodology</a>
          <a href="#/contact">Contact</a>
        </div>
        <div class="footer-legal">
          <p>&copy; ${year} STRATUM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
};
