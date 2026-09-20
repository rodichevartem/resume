'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Briefcase, Copy, Check, Github, Send } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { personalData } from '@/lib/data';

export function Contacts() {
  const [copiedField, setCopiedField] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contacts = [
    {
      icon: Phone,
      label: 'Телефон',
      value: personalData.phone,
      href: personalData.phoneHref,
      field: 'phone',
    },
    {
      icon: Mail,
      label: 'Email',
      value: personalData.email,
      href: personalData.emailHref,
      field: 'email',
    },
    {
      icon: MapPin,
      label: 'Локация',
      value: personalData.location,
      href: null,
      field: 'location',
    },
  ];

  return (
    <section id="contacts" className="section-padding border-t border-white/5 bg-white/[0.015]">
      <div className="container-max">
        <div className="mb-12">
          <p className="eyebrow mb-3">07 / На связи</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Давайте работать вместе</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-balance">
            Открыт к новым предложениям. Давайте обсудим, как я могу быть полезен
            вашей команде.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <Card className="glass-card">
            <CardContent className="p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {contacts.map((contact) => (
                  <div
                    key={contact.field}
                    className="flex flex-col items-center gap-3 rounded-lg border bg-background p-5 text-center"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <contact.icon className="h-6 w-6" />
                    </div>
                    <div className="w-full">
                      <p className="text-xs font-medium text-muted-foreground">
                        {contact.label}
                      </p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="mt-1 block text-sm font-semibold transition-colors hover:text-primary"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-semibold">
                          {contact.value}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard(contact.value, contact.field)
                      }
                      className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary no-print"
                      aria-label={`Скопировать ${contact.label}`}
                    >
                      {copiedField === contact.field ? (
                        <>
                          <Check className="h-3 w-3 text-success" />
                          <span className="text-success">Скопировано</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          Копировать
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-background p-4 text-center">
                <Briefcase className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">
                  Постоянная работа | Стажировка, Очно | Удалённо
                </span>
              </div>

              <div className="mt-6 flex items-center justify-center gap-4 no-print">
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
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
