import { useState } from 'react';

const Footer: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const footerStyle: React.CSSProperties = {
    backgroundColor: 'var(--color-pure-black)',
    color: 'var(--color-paper)',
    padding: '96px 0 24px 0',
    borderTop: '1px solid var(--color-linen)',
  };

  const getLinkStyle = (id: string): React.CSSProperties => ({
    color: hoveredLink === id ? 'var(--color-paper)' : 'var(--color-stone)',
    textDecoration: hoveredLink === id ? 'underline' : 'none',
    textUnderlineOffset: '4px',
    fontSize: '12px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
    display: 'inline-block',
  });

  const textStyle: React.CSSProperties = {
    fontSize: '12px',
    color: 'var(--color-stone)',
    lineHeight: '1.8',
    margin: 0,
  };

  const h3Style: React.CSSProperties = {
    color: 'var(--color-paper)',
    fontWeight: 500,
    fontSize: '12px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: '24px',
  };

  const flexContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'between',
    alignItems: 'start',
    gap: '64px',
    flexWrap: 'wrap',
    marginBottom: '64px',
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div style={flexContainerStyle} className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <img
                src="/logo.png"
                alt="YUMI Logo White"
                width={32}
                height={32}
                style={{ filter: 'invert(1) brightness(2)' }}
              />
              <span style={{ color: 'var(--color-paper)', fontWeight: 500, fontSize: '14px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                YUMI
              </span>
            </div>
            <p style={textStyle}>
              Curating luxury floral nightwear since 2024. Elevating the art of rest with premium craftsmanship.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '48px', flexGrow: 1, maxWidth: '600px' }} className="grid grid-cols-2 md:grid-cols-3">
            <div>
              <h3 style={h3Style}>Shop</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a
                  href="#collections"
                  style={getLinkStyle('f-collections')}
                  onMouseEnter={() => setHoveredLink('f-collections')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Collections
                </a>
                <a
                  href="#collections"
                  style={getLinkStyle('f-bestsellers')}
                  onMouseEnter={() => setHoveredLink('f-bestsellers')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Best Sellers
                </a>
              </div>
            </div>

            <div>
              <h3 style={h3Style}>Company</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a
                  href="#story"
                  style={getLinkStyle('f-story')}
                  onMouseEnter={() => setHoveredLink('f-story')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Our Story
                </a>
                <a
                  href="#collections"
                  style={getLinkStyle('f-contact')}
                  onMouseEnter={() => setHoveredLink('f-contact')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 style={h3Style}>Connect</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a
                  href="https://instagram.com/yumi_dxb"
                  target="_blank"
                  rel="noreferrer"
                  style={{ ...getLinkStyle('f-instagram'), display: 'flex', alignItems: 'center', gap: '8px' }}
                  onMouseEnter={() => setHoveredLink('f-instagram')}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  @yumi_dxb
                </a>
                <span style={textStyle}>
                  Shipping Policy
                </span>
                <span style={textStyle}>
                  Terms of Service
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            marginTop: '64px',
          }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p style={{ ...textStyle, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            © 2024 YUMI DXB FASHION. Based in Mangaluru | PAN India Delivery
          </p>
          <div style={{ display: 'flex', gap: '32px', color: 'var(--color-stone)' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Secure Payment</span>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>PAN India Shipping</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
