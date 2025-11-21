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
      <!-- Split Hero Section -->
      <section class="service-split-hero">
        <div class="hero-image-side">
          <img src="${service.heroImage}" alt="${service.title}" class="service-detail-img" />
        </div>
        <div class="hero-content-side">
          <div class="hero-content-inner">
            <span class="service-id-badge">SVC-${service.id.toUpperCase()}</span>
            <h1 class="service-main-title">${service.title}</h1>
            <p class="service-main-tagline">${service.tagline}</p>
            
            <div class="service-overview">
              <h2>About This Service</h2>
              <p>${service.description}</p>
            </div>

            <!-- Specs Inline -->
            <div class="specs-inline">
              <h3>Specifications</h3>
              <div class="specs-inline-grid">
                ${service.specifications.map(spec => `
                  <div class="spec-inline-item">
                    <span class="spec-inline-label">${spec.label}</span>
                    <span class="spec-inline-value">${spec.value}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features & Process Section -->
      <section class="service-details-section container section-padding">
        <div class="details-two-col">
          <!-- Left Column -->
          <div class="details-left">
            <!-- Features -->
            <div class="detail-block">
              <h2>Key Features</h2>
              <ul class="features-simple-list">
                ${service.features.map(feature => `
                  <li class="feature-simple-item">
                    <strong>${feature.title}:</strong> ${feature.description}
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>

          <!-- Right Column -->
          <div class="details-right">
            <!-- Process -->
            <div class="detail-block">
              <h2>Our Process</h2>
              <ol class="process-simple-list">
                ${service.process.map(step => `
                  <li class="process-simple-item">${step}</li>
                `).join('')}
              </ol>
            </div>

            <!-- Applications -->
            <div class="detail-block">
              <h2>Ideal Applications</h2>
              <ul class="applications-simple-list">
                ${service.applications.map(app => `
                  <li class="application-simple-item">${app}</li>
                `).join('')}
              </ul>
            </div>
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
