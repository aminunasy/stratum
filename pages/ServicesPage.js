import { Services } from '../components/Services.js'
import { CTA } from '../components/CTA.js'

export const ServicesPage = () => {
    return `
    <div class="page-content">
      <section class="page-header">
        <div class="container">
          <h1>Our Services</h1>
          <p>Comprehensive roofing solutions for every need.</p>
        </div>
      </section>
      ${Services()}
      ${CTA()}
    </div>
  `
}
