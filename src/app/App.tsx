import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f6]">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}
