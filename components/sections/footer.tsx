'use client';

import { Cpu, Github, Linkedin, Send, Phone, Mail } from 'lucide-react';

import { personalData, navLinks } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const headerHeight = 64;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t bg-background py-10 no-print">
      <div className="container-max">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Cpu className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold">{personalData.name}</p>
              <p className="text-xs text-muted-foreground">
                {personalData.position}
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={personalData.phoneHref}
              className="flex h-8 w-8 items-center justify-center rounded-lg border transition-colors hover:border-primary hover:text-primary"
              aria-label="Телефон"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={personalData.emailHref}
              className="flex h-8 w-8 items-center justify-center rounded-lg border transition-colors hover:border-primary hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border transition-colors hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border transition-colors hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={personalData.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border transition-colors hover:border-primary hover:text-primary"
              aria-label="Telegram"
            >
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 border-t pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {personalData.name}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
