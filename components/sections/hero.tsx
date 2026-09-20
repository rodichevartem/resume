'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Send, Briefcase, Code2, Database, Factory } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { personalData } from '@/lib/data';

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-28">
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
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"><span>Следите за мной</span><a href={personalData.socials.github} target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/10 p-2 transition hover:border-primary hover:text-primary" aria-label="GitHub"><Github className="h-4 w-4" /></a><a href={personalData.socials.telegram} target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/10 p-2 transition hover:border-primary hover:text-primary" aria-label="Telegram"><Send className="h-4 w-4" /></a><a href={personalData.socials.hh} target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/10 p-2 transition hover:border-primary hover:text-primary" aria-label="HeadHunter"><Briefcase className="h-4 w-4" /></a></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto w-full max-w-[470px] lg:ml-auto">
            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 bg-gradient-to-br from-primary/50 via-primary/10 to-chart-4/20" />
            <div className="relative mx-auto h-[430px] w-[310px] overflow-hidden rounded-[42%_42%_8%_8%] border border-white/15 bg-secondary/70 shadow-2xl shadow-primary/10 sm:h-[500px] sm:w-[360px]"><Image src="/images/Vladsviridenko_resized.com-055.jpg" alt="Артём Родичев" fill priority className="object-cover object-top grayscale-[15%]" sizes="(max-width: 640px) 310px, 360px" /></div>
            <div className="glass-card absolute left-0 top-1/3 rounded-xl p-4 shadow-xl"><p className="text-2xl font-bold text-primary">4+</p><p className="mt-1 text-[11px] text-muted-foreground">года опыта</p></div>
            <div className="glass-card absolute bottom-16 right-0 rounded-xl p-4 shadow-xl"><p className="text-2xl font-bold text-chart-4">6+</p><p className="mt-1 text-[11px] text-muted-foreground">SCADA платформ</p></div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="glass-card grid grid-cols-2 divide-x divide-y divide-white/10 overflow-hidden rounded-2xl sm:grid-cols-4 sm:divide-y-0">
          {[{ icon: Code2, value: '4+', label: 'года опыта' }, { icon: Factory, value: '6+', label: 'SCADA платформ' }, { icon: Database, value: '10+', label: 'проектов' }, { icon: Briefcase, value: '2', label: 'уровня АСУ ТП' }].map(({ icon: Icon, value, label }) => <div key={label} className="flex items-center gap-3 p-5 sm:p-6"><Icon className="h-5 w-5 text-primary" /><div><p className="text-2xl font-bold">{value}</p><p className="text-xs text-muted-foreground">{label}</p></div></div>)}
        </motion.div>
      </div>
    </section>
  );
}
