export const personalData = {
  name: 'Артём Родичев',
  position: 'Инженер-программист',
  subtitle: 'Industrial Automation & SCADA Developer',
  phone: '+7-983-237-93-97',
  phoneHref: 'tel:+79832379397',
  email: 'rodichevartem@yandex.ru',
  emailHref: 'mailto:rodichevartem@yandex.ru',
  location: 'Томск, Россия',
  totalExperience: '6 лет 5 месяцев',
  socials: {
    github: 'https://github.com/rodichevartem/resume',
    hh: 'https://tomsk.hh.ru/resume/7becdf8fff08e8900b0039ed1f6f6d616a464c',
    telegram: 'https://t.me/rodichev_artem',
  },
};

export const navLinks = [
  { label: 'О себе', href: '#about' },
  { label: 'Опыт', href: '#experience' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Образование', href: '#education' },
  { label: 'Контакты', href: '#contacts' },
];

export const experienceData = [
  {
    period: '2022 — Настоящее время',
    duration: '4 года',
    company: 'Томская электронная компания, ООО НПП',
    position: 'Инженер-программист',
    department: 'Отдел информационного обеспечения АСУ ТП',
    current: true,
    achievements: [
      'Разработка и внедрение ПО для автоматизированных систем управления технологическими процессами',
      'Проектирование и программирование верхнего (АРМ) и среднего (ПЛК) уровня систем',
      'Разработка проектов на базе Alpha Scada, PcVue, TIA Portal, Astra Regul, MasterSCADA',
      'Администрирование ОС Windows и Astra Linux',
    ],
  },
  {
    period: 'Апрель 2022 — Май 2022',
    duration: '2 месяца',
    company: 'ТомскНИПИнефть, ОАО',
    position: 'Практикант',
    department: 'Отдел разработки программного обеспечения',
    current: false,
    achievements: [
      'Разработка библиотек к существующим программным продуктам на C#',
    ],
  },
  {
    period: 'Февраль 2022 — Март 2022',
    duration: '2 месяца',
    company: 'Тракт-Автоматика',
    position: 'Практикант',
    department: '',
    current: false,
    achievements: [
      'Разработка верхнего уровня АСУ ТП в Simple-SCADA. Интеграция с Modbus, Microsoft SQL Server, OPC-сервером',
    ],
  },
    {
    period: 'Июнь 2021 — Июль 2021',
    duration: '2 месяца',
    company: 'ООО Авсис',
    position: 'Программист',
    department: '',
    current: false,
    achievements: [
      'Разработка Frontend части для gambling-игр',
    ],
  },
];

export const skillsData = [
  {
    category: 'Языки программирования',
    icon: 'Code',
    skills: ['C#', 'C++', 'JavaScript', 'Microsoft Visual Basic','Python'],
  },
  {
    category: 'SCADA-системы',
    icon: 'MonitorCog',
    skills: [
      'Alpha Scada',
      'PcVue',
      'TIA Portal',
      'MasterSCADA',
      'Simple-SCADA',
      'Astra Regul',
    ],
  },
  {
    category: 'Базы данных',
    icon: 'Database',
    skills: ['Microsoft SQL','PostgreSQL'],
  },
  {
    category: 'Операционные системы',
    icon: 'Monitor',
    skills: ['Windows', 'Astra Linux'],
  },
  {
    category: 'Ключевые компетенции',
    icon: 'GraduationCap',
    skills: ['ООП', 'АСУ ТП', 'Базы данных', 'МЭК стандарты'],
  },
  {
    category: 'Гибкие навыки',
    icon: 'Users',
    skills: [
      'Работа в команде',
      'Ведение переговоров',
      'Деловое общение',
      'Управление персоналом',
      'Организаторские навыки',
    ],
  },
  {
    category: 'Языки',
    icon: 'Languages',
    skills: ['Русский язык','Английский язык'],
  },
];

export const projectsData = [
  {
    title: 'Техническое перевооружение системы автоматизации и АСУ ТП БКНС Шингинского месторождения',
    client: 'ООО «Газпромнефть-восток»',
    icon: 'Factory',
  },
  {
    title: 'Техническое перевооружение АСУ ТП отделения перегонки производства метанола',
    client: 'ООО «Газпром Метанол»',
    icon: 'FlaskConical',
  },
  {
    title: 'Установка термической регенерации песка и установка плакирования песка',
    client: 'ООО «ИТЦ «АВТОТОР»',
    icon: 'Flame',
  },
  {
    title: 'Блок-бокс насосной АСВ для объекта «УКПГ Новопортовского Месторождения»',
    client: 'ООО «Газпром-ЯМАЛ»',
    icon: 'Waves',
  },
  {
    title: 'Технологическая линия получения неформованных масс с упаковкой в биг-бэги',
    client: 'ООО «Огнеупор»',
    icon: 'Package',
  },
  {
    title: 'Строительство колесопрокатного цеха',
    client: 'АО «Уральская сталь»',
    icon: 'CircleDot',
  },
];

export const educationData = [
  {
    degree: 'Магистр',
    year: '2022',
    specialty: 'Управление и информатика в технических системах (инженер)',
    university:
      'Томский государственный университет систем управления и радиоэлектроники (ТУСУР)',
  },
  {
    degree: 'Бакалавр',
    year: '2020',
    specialty: 'Управление и информатика в технических системах',
    university:
      'Томский государственный университет систем управления и радиоэлектроники (ТУСУР)',
  },
];

export const coursesData = [
  {
    title: 'Разработчик проектов на Alpha.ONE+/SCADA/Platform',
    provider: 'АО «Атомик Софт»',
  },
  {
    title: 'Программный комплекс AstraRegul. Базовый курс для системных интеграторов',
    provider: 'ООО «РегЛаб»',
  },
  {
    title: 'Системный аналитик промышленных цифровых решений: проектирование, прототипирование, бизнес-эффекты',
    provider: 'Национальный исследовательский Томский государственный университет',
  },
];
