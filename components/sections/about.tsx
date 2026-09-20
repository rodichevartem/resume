'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Cpu } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { personalData } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="section-padding border-t border-white/5">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <p className="eyebrow mb-3">01 / Профиль</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">О себе</h2>
          </div>

          <Card className="glass-card mx-auto max-w-4xl overflow-hidden">
            <CardContent className="p-6 sm:p-10">
              <p className="max-w-3xl text-base leading-relaxed text-foreground sm:text-lg text-balance">
                Инженер-программист с 4-х летним стажем разработки ПО для
                промышленных систем автоматизации. Магистр ТУСУРа по специальности «Управление в технических системах». 
                Эксперт в области SCADA-систем (Alpha Scada, PcVue, TIA Portal, MasterSCADA) и
                программирования ПЛК. Работаю с C#, C++, JavaScript, Microsoft Visual Basic, Microsoft SQL, PostgreSQL и промышленными протоколами.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center transition-colors hover:border-primary/40">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <span className="text-2xl font-bold">4+</span>
                  <span className="text-xs text-muted-foreground">
                    лет опыта
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center transition-colors hover:border-primary/40">
                  <Cpu className="h-6 w-6 text-primary" />
                  <span className="text-2xl font-bold">6+</span>
                  <span className="text-xs text-muted-foreground">
                    Платформ для разработки SCADA-систем
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center transition-colors hover:border-primary/40">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span className="text-2xl font-bold">Магистр</span>
                  <span className="text-xs text-muted-foreground">
                    ТУСУР
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center transition-colors hover:border-primary/40">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-2xl font-bold">Томск</span>
                  <span className="text-xs text-muted-foreground">
                    Удаленно / Очно
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
