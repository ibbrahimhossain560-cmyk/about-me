
'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import RotatingText from '@/components/RotatingText';
import ScrollControls from '@/components/ScrollControls';
import Masonry from '@/components/Masonry';
import MagicBento from '@/components/MagicBento';
import { useIsMobile } from '@/hooks/use-mobile';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import InstallPrompt from '@/components/InstallPrompt';
import TechLogos from '@/components/TechLogos';

const SplashCursor = dynamic(
  () => import('@/components/SplashCursor').then(mod => mod.default),
  { ssr: false }
);

const items = [
  {
    id: '1',
    img: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo1.jpg',
    url: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo1.jpg',
    height: 600,
  },
  {
    id: '2',
    img: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo2.jpg',
    url: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo2.jpg',
    height: 900,
  },
  {
    id: '3',
    img: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo3.jpg',
    url: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo3.jpg',
    height: 800,
  },
  {
    id: '4',
    img: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo4.jpg',
    url: 'https://raw.githubusercontent.com/nafijthepro/logo/main/logo4.jpg',
    height: 750,
  },
];

export default function Home() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {mounted && !isMobile && <SplashCursor />}
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Skills />
        <TechLogos />
        <section id="gallery" className="py-24 px-4 md:px-8 lg:px-12 flex flex-col items-center">
            <MagicBento 
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
              disableAnimations={isMobile}
            />
            <div className="container mx-auto mt-24">
             <Masonry
              items={items}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={true}
            />
          </div>
        </section>
        <Contact />
        <section className="py-12">
          <div className="container mx-auto flex justify-center">
            <RotatingText
              texts={['NAFIJ RAHAMAN', 'NAFIJ PRO ✨']}
              mainClassName="text-3xl font-black tracking-tighter text-foreground"
            />
          </div>
        </section>
        <section className="py-12 text-center">
          <p className="text-lg text-foreground/80 italic">"Big things can come from small beginnings."</p>
        </section>
      </main>
      <Footer />
      <ScrollControls />
      <InstallPrompt />
    </div>
  );
}
