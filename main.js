import './style.css'
import './service-detail-redesign.css'
import { initRouter } from './utils/router.js'
import { initTheme, toggleTheme } from './utils/theme.js'
import { Header } from './components/Header.js'
import { Footer } from './components/Footer.js'
import { Home } from './pages/Home.js'
import { ServicesPage } from './pages/ServicesPage.js'
import { ServiceDetail } from './pages/ServiceDetail.js'
import { ProjectsPage } from './pages/ProjectsPage.js'
import { MethodologyPage } from './pages/MethodologyPage.js'
import { ProjectDetail } from './pages/ProjectDetail.js'
import { ContactPage } from './pages/ContactPage.js'

// Initialize theme immediately
initTheme();

const routes = {
  '#/': Home,
  '#/services': ServicesPage,
  '#/services/:id': ServiceDetail,
  '#/projects': ProjectsPage,
  '#/projects/:id': ProjectDetail,
  '#/methodology': MethodologyPage,
  '#/contact': ContactPage
}

const router = initRouter(routes)

const render = ({ renderFn, params }) => {
  // Force scroll to top before anything else
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
  
  document.querySelector('#app').innerHTML = `
    ${Header()}
    <main>
      ${renderFn(params)}
    </main>
    ${Footer()}
  `

  // Bind theme toggle
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
      themeBtn.addEventListener('click', () => {
          toggleTheme();
      });
  }
  
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('mobile-nav-open');
      mobileMenuToggle.classList.toggle('active');
    });
    
    // Close menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('mobile-nav-open');
        mobileMenuToggle.classList.remove('active');
      });
    });
  }
  
  // Multiple fallbacks to ensure scroll
  requestAnimationFrame(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  })
  
  setTimeout(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, 10)
}

router.subscribe(render)

// Initial render
render(router.getCurrentRoute())
