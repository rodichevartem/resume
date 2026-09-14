'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, BadgeCheck } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { educationData, coursesData } from '@/lib/data';

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-max">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Образование
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-primary" />
        </div>

        <div className="mx-auto max-w-3xl space-y-12">
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-muted-foreground">
              <GraduationCap className="h-5 w-5 text-primary" />
              Высшее образование
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-shadow hover:shadow-md print-break">
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <Badge variant="secondary" className="gap-1">
                          <Calendar className="h-3 w-3" />
                          {edu.year}
                        </Badge>
                      </div>

                      <div className="mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      </div>

                      <p className="text-sm font-medium text-primary">
                        {edu.specialty}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {edu.university}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-muted-foreground">
              <BookOpen className="h-5 w-5 text-primary" />
              Профессиональные курсы
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coursesData.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-all hover:shadow-md hover:border-primary/40 print-break">
                    <CardContent className="p-6">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <BadgeCheck className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-semibold leading-snug">
                        {course.title}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {course.provider}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
