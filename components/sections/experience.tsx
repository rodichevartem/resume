'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { experienceData } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Опыт работы
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-primary" />
          <p className="mt-4 text-muted-foreground">
            6 лет 5 месяцев в промышленной автоматизации
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 print-break ${
                index % 2 === 0
                  ? 'md:pr-1/2 md:text-right'
                  : 'md:pl-1/2'
              } pl-12 md:pl-0`}
            >
              <div
                className={`absolute left-4 top-6 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-background md:left-1/2 ${
                  item.current ? 'border-primary' : 'border-border'
                }`}
              >
                <div
                  className={`h-3 w-3 rounded-full ${
                    item.current ? 'bg-primary' : 'bg-muted-foreground'
                  }`}
                />
              </div>

              <Card
                className={`${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                } transition-shadow hover:shadow-md`}
              >
                <CardContent className="p-5 sm:p-6">
                  <div
                    className={`flex flex-wrap items-center gap-2 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    <Badge
                      variant={item.current ? 'default' : 'secondary'}
                      className="gap-1"
                    >
                      <Calendar className="h-3 w-3" />
                      {item.period}
                    </Badge>
                    {item.current && (
                      <Badge variant="outline" className="gap-1 text-success border-success">
                        <span className="h-2 w-2 rounded-full bg-success" />
                        Сейчас
                      </Badge>
                    )}
                  </div>

                  <h3 className="mt-3 text-lg font-semibold">
                    {item.position}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {item.company}
                  </p>
                  {item.department && (
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {item.department}
                    </p>
                  )}

                  <ul
                    className={`mt-4 space-y-2 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}
                  >
                    {item.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 text-sm text-muted-foreground ${
                          index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        <ChevronRight
                          className={`mt-0.5 h-4 w-4 shrink-0 text-primary ${
                            index % 2 === 0 ? 'md:rotate-180' : ''
                          }`}
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
