'use client';

import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Education } from '@/components/sections/education';
import { Contacts } from '@/components/sections/contacts';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
