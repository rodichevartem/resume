'use client';

import { motion } from 'framer-motion';
import {
  Factory,
  FlaskConical,
  Flame,
  Waves,
  Package,
  CircleDot,
  Building2,
  type LucideIcon,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { projectsData } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Factory,
  FlaskConical,
  Flame,
  Waves,
  Package,
  CircleDot,
};

export function Projects() {
  return (
    <section id="projects" className="section-padding border-y border-white/5 bg-white/[0.015]">
      <div className="container-max">
        <div className="mb-12">
          <p className="eyebrow mb-3">04 / Избранное</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Проекты</h2>
          <p className="mt-4 text-muted-foreground">
            Внедрённые объекты промышленной автоматизации
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => {
            const Icon = iconMap[project.icon] ?? Factory;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="glass-card group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-chart-4/10">
                    <Icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] transition-opacity group-hover:opacity-[0.08]" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-base leading-snug">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-4 w-4 shrink-0 text-primary" />
                      <span className="font-medium">{project.client}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
