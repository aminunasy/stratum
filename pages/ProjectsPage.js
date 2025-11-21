import { Projects } from '../components/Projects.js'
import { CTA } from '../components/CTA.js'

export const ProjectsPage = () => {
    return `
    <div class="page-content">
      <section class="page-header">
        <div class="container">
          <h1>Our Projects</h1>
          <p>A showcase of our finest work.</p>
        </div>
      </section>
      ${Projects()}
      ${CTA()}
    </div>
  `
}
