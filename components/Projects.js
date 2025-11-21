export function Projects() {
    const projects = [
        {
            id: '01',
            name: 'THE MANOR',
            loc: 'GREENWICH, CT',
            mat: 'SLATE / LIMESTONE',
            img: '/project-manor.png'
        },
        {
            id: '02',
            name: 'THE VILLA',
            loc: 'ASPEN, CO',
            mat: 'ZINC / GLASS',
            img: '/project-villa.png'
        },
        {
            id: '03',
            name: 'THE SPIRE',
            loc: 'BOSTON, MA',
            mat: 'COPPER / STONE',
            img: '/project-manor.png' // Reusing for now
        },
        {
            id: '04',
            name: 'THE COMPLEX',
            loc: 'SEATTLE, WA',
            mat: 'TPO / CONCRETE',
            img: '/project-villa.png' // Reusing for now
        }
    ];

    return `
    <section class="projects-section">
      <div class="projects-header">
        <h2 class="section-title">SELECTED WORKS</h2>
        <span class="section-subtitle">ARCHIVE 2020-2025</span>
      </div>
      
      <div class="projects-grid">
        ${projects.map(p => `
          <div class="project-card">
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
          </div>
        `).join('')}
      </div>
    </section>
  `
}
