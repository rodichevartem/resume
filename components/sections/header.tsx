'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Menu, Download, Cpu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { navLinks, personalData } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    const sections = navLinks
      .map((link) => {
        const el = document.querySelector(link.href);
        return el ? { id: link.href.slice(1), el: el as HTMLElement } : null;
      })
      .filter((s): s is { id: string; el: HTMLElement } => s !== null);

    const onScrollActive = () => {
      const headerOffset = 100;
      let current = '';
      for (const section of sections) {
        const rect = section.el.getBoundingClientRect();
        if (rect.top <= headerOffset) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    onScrollActive();
    window.addEventListener('scroll', onScrollActive, { passive: true });
    return () => window.removeEventListener('scroll', onScrollActive);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
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
    <header
      className={cn(
        'no-print fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b bg-background/80 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-max flex h-16 items-center justify-between gap-4">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 font-bold text-lg"
          aria-label="На главную"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Cpu className="h-5 w-5" />
          </span>
          <span className="hidden sm:inline">А. Родичев</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                'relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                activeSection === link.href.slice(1)
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-md bg-primary/10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            onClick={handleDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Скачать резюме
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Открыть меню"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Навигация</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-6 border-t pt-6">
                <Button className="w-full" onClick={handleDownload}>
                  <Download className="mr-2 h-4 w-4" />
                  Скачать резюме (PDF)
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
