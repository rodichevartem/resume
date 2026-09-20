'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Menu, Download, Cpu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = '';
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section && section.getBoundingClientRect().top <= 120) current = link.href.slice(1);
      });
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const element = document.querySelector(href);
    if (element) window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <header className={cn('no-print fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled ? 'border-b border-white/10 bg-background/85 backdrop-blur-xl' : 'bg-transparent')}>
      <div className="container-max flex h-[76px] items-center justify-between gap-5">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-3 font-bold" aria-label="На главную">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/25"><Cpu className="h-4 w-4" /></span>
          <span className="text-sm tracking-wide">АРТЁМ <span className="text-primary">РОДИЧЕВ</span></span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className={cn('relative rounded-lg px-3 py-2 text-xs font-medium transition-colors hover:text-white', activeSection === link.href.slice(1) ? 'text-white' : 'text-muted-foreground')}>
              {link.label}
              {activeSection === link.href.slice(1) && <motion.span layoutId="nav-active" className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-primary" />}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" variant="outline" className="hidden border-primary/40 bg-transparent text-xs hover:bg-primary/10 sm:inline-flex" onClick={() => window.print()}>
            <Download className="mr-2 h-3.5 w-3.5" /> Скачать CV
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild><Button variant="ghost" size="icon" className="md:hidden" aria-label="Открыть меню"><Menu className="h-5 w-5" /></Button></SheetTrigger>
            <SheetContent side="right" className="w-72 border-white/10 bg-background">
              <SheetHeader><SheetTitle>Навигация</SheetTitle></SheetHeader>
              <nav className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => <SheetClose asChild key={link.href}><a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-white">{link.label}</a></SheetClose>)}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
