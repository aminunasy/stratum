import { Methodology } from '../components/Methodology.js'
import { CTA } from '../components/CTA.js'

export const MethodologyPage = () => {
    return `
    <div class="page-content">
      <section class="page-header">
        <div class="container">
          <h1>Our Methodology</h1>
          <p>The STRATUM Standard of Excellence.</p>
        </div>
      </section>
      ${Methodology()}
      ${CTA()}
    </div>
  `
}
