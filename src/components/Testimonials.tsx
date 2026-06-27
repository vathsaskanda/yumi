import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Ananya K.",
      location: "Mumbai",
      text: "The quality is unmatched. Every stitch feels like it was handled with such care. Truly premium nightwear.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah M.",
      location: "Bangalore",
      text: "Perfect for lounging in style. The floral patterns are even more beautiful in person, and the fabric is incredibly soft.",
      rating: 5
    },
    {
      id: 3,
      name: "Priya D.",
      location: "Delhi",
      text: "Absolutely in love with the elegance and comfort. The fabric drapes beautifully and feels luxurious against the skin.",
      rating: 5
    },
    {
      id: 4,
      name: "Neha R.",
      location: "Pune",
      text: "The artisanal touch is evident in every detail. It's rare to find nightwear that makes you feel this put together.",
      rating: 5
    }
  ];

  const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#121212" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
    </svg>
  );

  return (
    <section className="section bg-atelier-white border-t border-linen">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-label-sm text-label-sm text-stone uppercase tracking-[0.3em] mb-4 block"
          >
            Client Whispers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hero-title"
          >
            What Our Clients Say
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border-0 flex flex-col justify-between"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0 24px',
              }}
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="hero-text italic leading-relaxed text-ink mb-8">
                  "{review.text}"
                </p>
              </div>
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-stone">
                — {review.name}, {review.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
