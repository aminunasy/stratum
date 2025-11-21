export function SocialProof() {
    const partners = [
        { name: 'LUDOWICI', location: 'OHIO, USA', est: '1888' },
        { name: 'RHEINZINK', location: 'DATTELN, DE', est: '1966' },
        { name: 'CUPAPIZARRAS', location: 'GALICIA, ES', est: '1892' },
        { name: 'VMZINC', location: 'PARIS, FR', est: '1837' },
        { name: 'KME', location: 'OSNABRÜCK, DE', est: '1859' },
    ];

    // Duplicate list for infinite scroll effect
    const displayPartners = [...partners, ...partners, ...partners];

    return `
    <section class="social-proof-section">
      <div class="ticker-wrap">
        <div class="ticker">
          ${displayPartners.map(p => `
            <div class="partner-item" data-loc="${p.location}" data-est="${p.est}">
              <span class="partner-name">${p.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="proof-overlay"></div>
    </section>
  `
}
