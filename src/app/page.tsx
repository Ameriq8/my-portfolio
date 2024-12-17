'use client';
import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { WorkProcess } from '@/components/work-process';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Nav />
      <main>
        <Hero />
        <Skills />
        <WorkProcess />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
