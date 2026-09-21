'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Briefcase, Factory, Database } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { personalData } from '@/lib/data';

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden pt-28 pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-30" />
      <div className="container-max">
        <div className="grid min-h-[620px] items-center gap-12 pb-16 lg:grid-cols-[1fr_0.9fr] lg:gap-4 lg:pb-24">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="max-w-xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" /> Открыт к новым предложениям</div>
            <p className="eyebrow mb-4">Инженер-программист · SCADA · АСУ ТП</p>
            <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-7xl">Артём <span className="gradient-text">Родичев</span></h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">Разрабатываю программное обеспечение для автоматизированных систем управления технологическими процессами — от ПЛК до верхнего уровня SCADA.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-lg bg-primary px-6 shadow-xl shadow-primary/20 hover:bg-primary/90" onClick={() => scrollTo('#contacts')}>Связаться <ArrowRight className="ml-2 h-4 w-4" /></Button>
              <Button size="lg" variant="outline" className="rounded-lg border-white/15 bg-white/[0.03] hover:bg-white/[0.08]" onClick={() => window.print()}><Download className="mr-2 h-4 w-4" /> Скачать CV</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative mx-auto h-[440px] w-[320px] sm:h-[500px] sm:w-[370px]">
              <div className="absolute inset-0 rounded-[2rem] border-2 border-primary/40 bg-gradient-to-br from-primary/30 via-primary/5 to-chart-4/20 p-2 shadow-2xl shadow-primary/20">
                <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-secondary/80">
                  <Image src="/images/Vladsviridenko_resized.com-055.jpg" alt="Артём Родичев" fill priority className="object-cover object-top grayscale-[10%]" sizes="(max-width: 640px) 320px, 370px" />
                </div>
              </div>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="absolute -left-6 -top-1/2 flex items-center gap-2.5 rounded-xl border border-white/15 bg-secondary/90 p-2.5 pr-4 shadow-xl backdrop-blur-sm sm:-left-10">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary"><Briefcase className="h-4 w-4" /></div>
                <div><p className="text-base font-bold leading-none text-primary">4+</p><p className="mt-0.5 text-[10px] text-muted-foreground">года опыта</p></div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.75 }} className="absolute -right-6 top-6 flex items-center gap-2.5 rounded-xl border border-white/15 bg-secondary/90 p-2.5 pl-4 shadow-xl backdrop-blur-sm sm:-right-10">
                <div><p className="text-right text-base font-bold leading-none text-chart-4">6+</p><p className="mt-0.5 text-[10px] text-muted-foreground">SCADA платформ</p></div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-chart-4/15 text-chart-4"><Factory className="h-4 w-4" /></div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.9 }} className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-xl border border-white/15 bg-secondary/90 p-2.5 px-4 shadow-xl backdrop-blur-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-success/15 text-success"><Database className="h-4 w-4" /></div>
                <div><p className="text-base font-bold leading-none text-success">20+</p><p className="mt-0.5 text-[10px] text-muted-foreground">проектов</p></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
