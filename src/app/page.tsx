import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <CustomCursor />
      <SmoothScroll>
        <div style={{ backgroundColor: 'var(--dark)', color: 'var(--text)', minHeight: '100vh' }}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </div>
      </SmoothScroll>
    </>
  );
}
