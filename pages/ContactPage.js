export const ContactPage = () => {
    return `
    <div class="page-content">
      <section class="page-header">
        <div class="container">
          <h1>Contact Us</h1>
          <p>Get in touch for a consultation.</p>
        </div>
      </section>
      <section class="container section-padding">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <p>Email: info@stratum.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Roofing Lane, Cityville</p>
          </div>
          <div class="contact-form-wrapper">
            <form class="contact-form">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Send Message
                <span class="arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  `
}
