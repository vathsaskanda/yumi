import { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    alignItems: 'center',
    padding: '0 40px',
    backgroundColor: scrolled ? 'var(--color-atelier-white)' : 'var(--color-paper)',
    height: '64px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    borderBottom: '1px solid var(--color-linen)',
    transition: 'all 0.3s ease',
  };

  const linksContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '28px',
  };

  const getLinkStyle = (id: string): React.CSSProperties => ({
    fontFamily: 'var(--font-margiela-sans)',
    fontSize: '11px',
    fontWeight: 400,
    letterSpacing: '0.125em',
    textTransform: 'uppercase',
    textDecoration: hoveredLink === id ? 'underline' : 'none',
    textUnderlineOffset: '4px',
    color: hoveredLink === id ? 'var(--color-ink)' : 'var(--color-stone)',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
  });

  const logoContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const logoAnchorStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'var(--color-ink)',
    cursor: 'pointer',
  };

  const logoRowStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
  };

  const logoTextStyle: React.CSSProperties = {
    fontFamily: 'var(--font-margiela-serif)',
    fontSize: '18px',
    fontWeight: 400,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  };

  const logoSubtitleStyle: React.CSSProperties = {
    fontFamily: 'var(--font-margiela-sans)',
    fontSize: '8px',
    fontWeight: 400,
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    color: 'var(--color-stone)',
    marginTop: '4px',
  };

  const actionsContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '28px',
  };

  return (
    <nav style={navStyle}>
      {/* Left side: Navigation links */}
      <div style={linksContainerStyle}>
        <a
          href="#collections"
          style={getLinkStyle('shop')}
          onMouseEnter={() => setHoveredLink('shop')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          SHOP
        </a>
        <a
          href="#story"
          style={getLinkStyle('story')}
          onMouseEnter={() => setHoveredLink('story')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          OUR STORY
        </a>
        <a
          href="#collections"
          style={getLinkStyle('journal')}
          onMouseEnter={() => setHoveredLink('journal')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          JOURNAL
        </a>
        <a
          href="#collections"
          style={getLinkStyle('contact')}
          onMouseEnter={() => setHoveredLink('contact')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          CONTACT
        </a>
      </div>

      {/* Center: Brand Identity Logo */}
      <div style={logoContainerStyle}>
        <a href="#" style={logoAnchorStyle}>
          <div style={logoRowStyle}>
            <img
              src="/logo.png"
              alt="YUMI Logo"
              style={{ width: '20px', height: '20px', objectFit: 'contain' }}
            />
            <span style={logoTextStyle}>
              YUMI
            </span>
          </div>
          <span style={logoSubtitleStyle}>
            DXB FASHION
          </span>
        </a>
      </div>

      {/* Right side: Minimal Text-based Actions */}
      <div style={actionsContainerStyle}>
        <a
          href="#collections"
          className="hidden md:inline-block"
          style={getLinkStyle('search')}
          onMouseEnter={() => setHoveredLink('search')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Search
        </a>
        <a
          href="#collections"
          className="hidden md:inline-block"
          style={getLinkStyle('account')}
          onMouseEnter={() => setHoveredLink('account')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Account
        </a>
        <a
          href="#collections"
          style={getLinkStyle('bag')}
          onMouseEnter={() => setHoveredLink('bag')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Bag
        </a>
      </div>
    </nav>
  );
};

export default Header;
