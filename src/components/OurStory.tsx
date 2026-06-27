import { motion } from 'framer-motion';

const OurStory: React.FC = () => {
  return (
    <section id="story" className="section bg-white border-t border-linen">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center"
        >
          {/* Left Column: Image / Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="hero-image" style={{ width: '80%', maxWidth: '400px', margin: '0 auto' }}>
              <img
                src="/product_4.png"
                alt="Yumi Artisanry"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </motion.div>

          {/* Right Column: Copy & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="order-1 md:order-2 flex flex-col justify-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{
                fontFamily: 'var(--font-margiela-sans)',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--color-stone)',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              Our Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hero-title"
              style={{ marginBottom: '24px' }}
            >
              Crafting Comfort, Curating Style
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{
                fontFamily: 'var(--font-margiela-sans)',
                fontSize: '14px',
                lineHeight: '1.8',
                color: 'var(--color-charcoal)',
                marginBottom: '24px',
                margin: '0 0 24px 0',
              }}
            >
              YUMI DXB FASHION was born from a desire to redefine evening relaxation. Based in Mangaluru, our journey started with a simple belief: your most personal moments deserve the same luxury as your most public ones.
            </motion.p>

            {/* Editorial Serif Pull-quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              style={{
                borderLeft: '1px solid var(--color-ink)',
                paddingLeft: '24px',
                margin: '32px 0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-margiela-serif)',
                  fontSize: '16px',
                  fontStyle: 'italic',
                  color: 'var(--color-charcoal)',
                  lineHeight: '1.6',
                  margin: 0,
                }}
              >
                “We don't just design nightwear; we design dreams woven in high-grade floral fabrics.”
              </p>
            </motion.div>

            <motion.a
              href="#collections"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="ghost-link w-fit"
            >
              LEARN MORE ABOUT YUMI
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
