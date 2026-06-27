import './styles/global.css';
import './styles/theme.css';
import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import ProductCollection from './components/ProductCollection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <OurStory />
      <ProductCollection />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
