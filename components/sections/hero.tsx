'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Download, ArrowDown, Github, Send, Cpu, Briefcase } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { personalData } from '@/lib/data';

export function Hero() {
  const scrollToContacts = () => {
    const el = document.querySelector('#contacts');
    if (el) {
      const headerHeight = 64;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-chart-4/10 blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 gap-2 px-4 py-1.5 text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Открыт к новым предложениям
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Артём Родичев
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl font-medium text-primary sm:text-2xl"
          >
            Инженер-программист
            <span className="mx-2 text-muted-foreground">|</span>
            {personalData.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg text-balance"
          >
            Разработка программное обеспечение для автоматизированных систем
            управления технологическими процессами. Специализация: SCADA-системы,
            ПЛК, верхний и средний уровень АСУ ТП.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <div className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">
                Опыт: {personalData.totalExperience}
              </span>
            </div>
            <a
              href={personalData.phoneHref}
              className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent"
            >
              <Phone className="h-4 w-4 text-primary" />
              {personalData.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" onClick={scrollToContacts}>
              <Mail className="mr-2 h-4 w-4" />
              Связаться
            </Button>
            <Button size="lg" variant="outline" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Скачать резюме
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background transition-all hover:scale-110 hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalData.socials.hh}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background transition-all hover:scale-110 hover:border-primary hover:text-primary"
              aria-label="HeadHunter"
            >
              <Briefcase className="h-5 w-5" />
            </a>
            <a
              href={personalData.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background transition-all hover:scale-110 hover:border-primary hover:text-primary"
              aria-label="Telegram"
            >
              <Send className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={scrollToContacts}
            className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
            aria-label="Прокрутить вниз"
          >
            <span className="text-xs">Подробнее</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
