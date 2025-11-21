import './style.css'
import { initRouter } from './utils/router.js'
import { Header } from './components/Header.js'
import { Footer } from './components/Footer.js'
import { Home } from './pages/Home.js'
import { ServicesPage } from './pages/ServicesPage.js'
import { ServiceDetail } from './pages/ServiceDetail.js'
import { ProjectsPage } from './pages/ProjectsPage.js'
import { MethodologyPage } from './pages/MethodologyPage.js'
import { ProjectDetail } from './pages/ProjectDetail.js'
import { ContactPage } from './pages/ContactPage.js'

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
