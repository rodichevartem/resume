import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://rodichev-portfolio.netlify.app'),
  title: 'Артём Родичев — Инженер-программист | SCADA & АСУ ТП',
  description:
    'Инженер-программист с 4+ годами опыта в промышленной автоматизации. Специализация: SCADA-системы (Alpha Scada, PcVue, TIA Portal, MasterSCADA), ПЛК, C#, C++, базы данных.',
  keywords: [
    'Артём Родичев',
    'инженер-программист',
    'SCADA',
    'АСУ ТП',
    'ПЛК',
    'TIA Portal',
    'Alpha Scada',
    'PcVue',
    'MasterSCADA',
    'промышленная автоматизация',
    'C#',
    'Modbus',
    'OPC',
  ],
  authors: [{ name: 'Артём Родичев' }],
  creator: 'Артём Родичев',
  openGraph: {
    type: 'profile',
    locale: 'ru_RU',
    title: 'Артём Родичев — Инженер-программист | SCADA & АСУ ТП',
    description:
      '4+ года опыта разработки ПО для промышленных систем автоматизации. SCADA, ПЛК, C#, базы данных.',
    siteName: 'Артём Родичев — Портфолио',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Артём Родичев — Инженер-программист | SCADA & АСУ ТП',
    description:
      '4+ года опыта разработки ПО для промышленных систем автоматизации.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Артём Родичев',
  jobTitle: 'Инженер-программист',
  description:
    'Инженер-программист, специализирующийся на промышленной автоматизации и SCADA-системах',
  email: 'rodichevartem@yandex.ru',
  telephone: '+79832379300',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Томск',
    addressCountry: 'RU',
  },
  knowsAbout: [
    'SCADA',
    'АСУ ТП',
    'ПЛК',
    'C#',
    'C++',
    'JavaScript',
    'TIA Portal',
    'Alpha Scada',
    'PcVue',
    'MasterSCADA',
    'Microsoft SQL',
    'PostgreSQL',
    'Astra Linux',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Томский государственный университет систем управления и радиоэлектроники (ТУСУР)',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Томская электронная компания, ООО НПП',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
