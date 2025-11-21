import { servicesData } from '../data/services.js'
import { CTA } from '../components/CTA.js'

export const ServiceDetail = (params) => {
  const serviceId = params.id
  const service = servicesData[serviceId]
  
  if (!service) {
    return `
      <div class="container section-padding">
        <h1>Service Not Found</h1>
        <p>The requested service could not be found.</p>
        <a href="#/services" class="btn">Back to Services</a>
      </div>
    `
  }

  // Get all services for next service functionality
  const serviceIds = Object.keys(servicesData)
  const currentIndex = serviceIds.indexOf(serviceId)
  const nextIndex = (currentIndex + 1) % serviceIds.length
  const nextService = servicesData[serviceIds[nextIndex]]
  
  return `
    <div class="service-detail-page">
      <!-- Full Screen Hero -->
      <section class="service-hero">
        <div class="service-hero-overlay">
            <div class="service-hero-content container">
                <span class="service-id">SVC-${service.id.toUpperCase()}</span>
                <h1 class="service-title-large">${service.title}</h1>
                <p class="service-tagline">${service.tagline}</p>
            </div>
        </div>
        <img src="${service.heroImage}" alt="${service.title}" class="service-hero-img" />
      </section>

      <!-- Intro & Specs -->
      <section class="service-intro container section-padding">
        <div class="service-intro-grid">
            <div class="service-description">
                <h2>Overview</h2>
                <p>${service.description}</p>
            </div>
            <div class="service-specs-detail">
                <h3>Specifications</h3>
                <div class="specs-grid">
                    ${service.specifications.map(spec => `
                      <div class="spec-card">
                        <span class="spec-label">${spec.label}</span>
                        <span class="spec-value">${spec.value}</span>
                      </div>
                    `).join('')}
                </div>
            </div>
        </div>
      </section>

      <!-- Key Features (Dark Section) -->
      <section class="service-features-section">
        <div class="container">
            <h2 class="section-title">Key Features</h2>
            <div class="features-grid">
                ${service.features.map((feature, index) => `
                    <div class="feature-card">
                        <span class="feature-number">0${index + 1}</span>
                        <h3 class="feature-title">${feature.title}</h3>
                        <p class="feature-desc">${feature.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
      </section>

      <!-- Process & Applications -->
      <section class="process-applications-section container section-padding">
          <div class="process-applications-grid">
              <div class="process-section">
                  <h2>Our Process</h2>
                  <div class="process-list">
                      ${service.process.map((step, index) => `
                          <div class="process-step">
                              <span class="step-number">${index + 1}</span>
                              <span class="step-text">${step}</span>
                          </div>
                      `).join('')}
                  </div>
              </div>
              <div class="applications-section">
                  <h2>Ideal Applications</h2>
                  <ul class="applications-list">
                      ${service.applications.map(app => `
                          <li class="application-item">${app}</li>
                      `).join('')}
                  </ul>
              </div>
          </div>
      </section>

      <!-- Navigation Footer -->
      <div class="service-nav-footer container">
        <div class="nav-links-wrapper">
          <a href="#/services" class="back-link">← Services</a>
          <a href="#/services/${nextService.id}" class="next-service-link">
            <span class="next-label">Next Service</span>
            <span class="next-name">${nextService.title} →</span>
          </a>
        </div>
      </div>

      ${CTA()}
    </div>
  `
}
