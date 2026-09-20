'use client';

import { motion } from 'framer-motion';
import {
  Code,
  MonitorCog,
  Cable,
  Database,
  Monitor,
  GraduationCap,
  Users,
  Languages,
  type LucideIcon,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skillsData } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  Code,
  MonitorCog,
  Cable,
  Database,
  Monitor,
  GraduationCap,
  Users,
  Languages,
};

export function Skills() {
  return (
    <section id="skills" className="section-padding border-y border-white/5">
      <div className="container-max">
        <div className="mb-12">
          <p className="eyebrow mb-3">03 / Стек</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Навыки и компетенции</h2>
          <p className="mt-3 text-sm text-muted-foreground">Технологический стек для промышленной автоматизации</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((category, index) => {
            const Icon = iconMap[category.icon] ?? Code;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="glass-card group h-full transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-base font-semibold">
                        {category.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-secondary-foreground transition-all hover:scale-105 hover:border-primary hover:text-primary cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
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
