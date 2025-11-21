import { projects } from '../data/projects.js'

export function Projects() {
    return `
    <section class="projects-section">
      <div class="projects-header">
        <h2 class="section-title">SELECTED WORKS</h2>
        <span class="section-subtitle">ARCHIVE 2020-2025</span>
      </div>
      
      <div class="projects-grid">
        ${projects.map(p => `
          <a href="#/projects/${p.id}" class="project-card">
            <div class="project-img-wrap">
              <img src="${p.img}" alt="${p.name}" class="project-img" />
              <div class="project-overlay">
                <span class="view-project">VIEW_PROJECT</span>
              </div>
            </div>
            <div class="project-info">
              <div class="project-meta-top">
                <span class="project-id">PRJ-${p.id}</span>
                <span class="project-loc">${p.loc}</span>
              </div>
              <h3 class="project-name">${p.name}</h3>
              <span class="project-mat">${p.mat}</span>
            </div>
          </a>
        `).join('')}
      </div>
    </section>
  `
}
