import { motion } from 'framer-motion';

const ProductCollection: React.FC = () => {
  const products = [
    {
      id: 1,
      title: "Iris Garden Robe",
      subtitle: "Soft Cotton Blend",
      price: "999 Rs",
      image: "/product_1.png",
      hoverImage: "/p1.png"
    },
    {
      id: 2,
      title: "Vintage Peony Set",
      subtitle: "Premium Rayon",
      price: "999 Rs",
      image: "/product_2.png",
      hoverImage: "/p2.png"
    },
    {
      id: 3,
      title: "Midnight Bloom",
      subtitle: "Breathable Modal",
      price: "999 Rs",
      image: "/product_3.png",
      hoverImage: "/p3.png"
    },
    {
      id: 4,
      title: "Desert Rose Kaftan",
      subtitle: "Pure Cotton",
      price: "999 Rs",
      image: "/product_4.png",
      hoverImage: "/p4.png"
    },
    {
      id: 5,
      title: "Ethereal Orchid",
      subtitle: "Satin Finish",
      price: "999 Rs",
      image: "/product_5.png",
      hoverImage: "/p5.png"
    },
    {
      id: 6,
      title: "Magnolia Lace Gown",
      subtitle: "Fine Cotton",
      price: "999 Rs",
      image: "/product_6.png",
      hoverImage: "/p6.png"
    }
  ];

  return (
    <section id="collections" className="section bg-atelier-white border-t border-linen">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-label-sm text-label-sm text-stone uppercase tracking-[0.3em] mb-4 block"
            >
              The Catalog
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="hero-title mb-4"
            >
              The Collection
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hero-text max-w-md mb-0"
            >
              Our signature collection features hand-picked floral patterns and breathable luxury fabrics.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card border-0 flex flex-col justify-between"
              style={{ maxWidth: '300px', margin: '0 auto', backgroundColor: '#f6f6f6', width: '100%' }}
            >
              <div className="group cursor-pointer">
                <div className="card-image">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-image-primary"
                  />
                  <img
                    src={product.hoverImage}
                    alt={`${product.title} alternate`}
                    className="card-image-secondary"
                  />
                </div>

                <div className="card-content" style={{ padding: '16px 8px 0 8px' }}>
                  <h3 className="card-title text-lg font-weight-500 mb-1">
                    {product.title}
                  </h3>
                  <p className="card-subtitle text-xs text-stone tracking-wider mb-2">
                    {product.subtitle}
                  </p>
                </div>
              </div>

              <div style={{ padding: '8px 8px 0 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="card-price font-weight-600 text-sm text-ink mb-0">
                  {product.price}
                </p>
                <a href="#" className="ghost-link">
                  Add to Cart
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCollection;
