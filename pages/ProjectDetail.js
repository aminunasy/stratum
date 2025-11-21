import { projects } from '../data/projects.js'
import { CTA } from '../components/CTA.js'

export const ProjectDetail = (params) => {
  const projectIndex = projects.findIndex(p => p.id === params.id)
  const project = projects[projectIndex]

  if (!project) {
    return `
      <div class="container section-padding">
        <h1>Project Not Found</h1>
        <p>The project you are looking for does not exist.</p>
        <a href="#/projects" class="btn btn-primary">Back to Projects</a>
      </div>
    `
  }

  // Calculate next project
  const nextIndex = (projectIndex + 1) % projects.length
  const nextProject = projects[nextIndex]

  return `
    <div class="project-detail-page">
      <section class="project-hero">
        <img src="${project.img}" alt="${project.name}" class="project-hero-img" />
        <div class="project-hero-overlay">
          <div class="container">
            <div class="project-hero-content">
              <span class="project-id-large">PRJ-${project.id}</span>
              <h1 class="project-title-large">${project.name}</h1>
              <p class="project-location-large">${project.loc}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="project-info-section container section-padding">
        <div class="project-grid-detail">
          <div class="project-description">
            <h2>About the Project</h2>
            <p>${project.description}</p>
          </div>
          <div class="project-specs">
            <h3>Specifications</h3>
            <ul class="specs-list">
              ${project.specs.map(spec => `
                <li class="spec-item">
                  <span class="spec-label">${spec.label}</span>
                  <span class="spec-value">${spec.value}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </section>

      <section class="project-gallery container section-padding">
        <div class="gallery-grid">
           <div class="gallery-item"><img src="${project.img}" alt="Detail 1" /></div>
           <div class="gallery-item"><img src="${project.img}" alt="Detail 2" /></div>
           <div class="gallery-item"><img src="${project.img}" alt="Detail 3" /></div>
        </div>
      </section>

      <div class="project-nav-footer container">
        <div class="nav-links-wrapper">
            <a href="#/projects" class="back-link">← Archive</a>
            <a href="#/projects/${nextProject.id}" class="next-project-link">
                <span class="next-label">Next Project</span>
                <span class="next-name">${nextProject.name} →</span>
            </a>
        </div>
      </div>

      ${CTA()}
    </div>
  `
}
