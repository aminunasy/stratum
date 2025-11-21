export function Services() {
    const services = [
        {
            id: 'slate',
            title: 'SLATE & TILE',
            desc: 'Historic preservation and precision installation of natural stone systems.',
            specs: ['LIFESPAN: 100+ YRS', 'WEIGHT: 900 LBS/SQ', 'ORIGIN: VERMONT'],
            img: '/service-slate.png'
        },
        {
            id: 'metal',
            title: 'METAL FABRICATION',
            desc: 'Custom zinc, copper, and lead cladding for modern architectural forms.',
            specs: ['MATERIAL: ZINC/COPPER', 'GAUGE: 24/22', 'SEAM: DOUBLE-LOCK'],
            img: '/service-metal.png'
        },
        {
            id: 'commercial',
            title: 'COMMERCIAL SYSTEMS',
            desc: 'High-performance flat roofing for large-scale industrial structures.',
            specs: ['SYSTEM: TPO/EPDM', 'R-VALUE: 30+', 'WARRANTY: 30 YRS'],
            img: '/service-commercial.png'
        }
    ];

    return `
    <section class="services-section">
      ${services.map(s => `
        <div class="service-col" style="background-image: url('${s.img}')">
          <div class="service-overlay"></div>
          <div class="service-content">
            <h2 class="service-title">${s.title}</h2>
            <div class="service-details">
              <p class="service-desc">${s.desc}</p>
              <ul class="service-specs">
                ${s.specs.map(spec => `<li>${spec}</li>`).join('')}
              </ul>
              <a href="#/services/${s.id}" class="service-link">[ VIEW DETAILS ]</a>
            </div>
          </div>
        </div>
      `).join('')}
    </section>
  `
}
