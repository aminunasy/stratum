export function Hero() {
    return `
    <section class="hero-section">
      <div class="hero-visual">
        <img src="/hero.png" alt="Architectural Slate Detail" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="block">SHELTER</span>
          <span class="block text-dim">/ FORM</span>
        </h1>
        
        <div class="hero-data">
          <div class="data-row">
            <span class="label">LOC</span>
            <span class="value">44.4759° N, 73.2121° W</span>
          </div>
          <div class="data-row">
            <span class="label">WIND</span>
            <span class="value">CLASS 90 / 180MPH</span>
          </div>
          <div class="data-row">
            <span class="label">MAT</span>
            <span class="value">SLATE / ANTHRACITE</span>
          </div>
        </div>
      </div>

      <div class="hero-scroll">
        <span class="scroll-text">SCROLL_TO_INITIATE</span>
        <div class="scroll-line"></div>
      </div>
    </section>
  `
}
