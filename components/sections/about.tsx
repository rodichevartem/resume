'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Cpu } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { personalData } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              О себе
            </h2>
            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-primary" />
          </div>

          <Card className="mx-auto max-w-3xl">
            <CardContent className="p-6 sm:p-8">
              <p className="text-base leading-relaxed text-foreground sm:text-lg text-balance">
                Опытный инженер-программист с 6-летним стажем разработки ПО для
                промышленных систем автоматизации. Эксперт в области
                SCADA-систем (Alpha Scada, PcVue, TIA Portal, MasterSCADA) и
                программирования ПЛК. Магистр ТУСУРа по специальности
                «Управление и информатика в технических системах». Работаю с
                C#, C++, JavaScript, базами данных и промышленными протоколами
                (Modbus, OPC).
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex flex-col items-center gap-2 rounded-lg bg-secondary/60 p-4 text-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <span className="text-2xl font-bold">6+</span>
                  <span className="text-xs text-muted-foreground">
                    лет опыта
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-secondary/60 p-4 text-center">
                  <Cpu className="h-6 w-6 text-primary" />
                  <span className="text-2xl font-bold">6</span>
                  <span className="text-xs text-muted-foreground">
                    SCADA-систем
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-secondary/60 p-4 text-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span className="text-2xl font-bold">Магистр</span>
                  <span className="text-xs text-muted-foreground">
                    ТУСУР
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-secondary/60 p-4 text-center">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-2xl font-bold">Томск</span>
                  <span className="text-xs text-muted-foreground">
                    Remote / On-site
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
