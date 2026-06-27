import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="hero bg-white">
      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-104px)] py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hero-title"
          >
            YUMI DXB FASHION
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-eyebrow mb-6 font-weight-600 text-stone"
          >
            PREMIUM FLORAL NIGHTWEAR
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-text space-y-4"
          >
            <p className="leading-relaxed">
              Experience the pinnacle of evening luxury, where comfort meets exquisite floral artistry. Hand-picked fabrics tailored for your most restful moments.
            </p>
            <div className="border-t border-linen pt-6 mt-6">
              <p className="font-weight-500 text-sm text-ink italic">
                "Welcome to Yumi. We believe that your evening relaxation should be as curated and premium as your daytime style."
              </p>
              <p className="text-caption-xs text-stone tracking-widest mt-2 uppercase">
                — Founder's Welcome Note
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ marginTop: '32px' }}
          >
            <a
              href="#collections"
              className="ghost-link"
            >
              Explore Collection
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hero-image md:ml-auto"
        >
          <img
            src="/product_1.png"
            alt="Yumi Premium Nightwear Robe"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
