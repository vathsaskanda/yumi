import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="section bg-paper">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hero-title mb-8"
          >
            Join the YUMI Universe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hero-text mb-12 max-w-xl mx-auto"
          >
            Be the first to know about our exclusive collections and seasonal launches.
          </motion.p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-md mx-auto flex flex-col md:flex-row gap-8"
        >
          <motion.input
            type="email"
            placeholder="YOUR EMAIL ADDRESS"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex-grow border-b-2 border-outline px-4 py-2 font-sans-serif text-sm font-weight-400 uppercase tracking-widest focus:border-primary focus:outline-none bg-transparent"
          />
          <motion.a
            href="#"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="ghost-link flex-shrink-0 px-8 py-4 font-weight-500 text-sm uppercase tracking-widest"
          >
            JOIN
          </motion.a>
        </motion.form>
      </div>
    </section>
  );
};

export default Newsletter;
