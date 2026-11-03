export const EMAIL = 'justj.becerra@gmail.com';

const phoneNumber = '+542215909321';
const whatsappMessage = encodeURIComponent("Hello, I'd like to talk to you!");

export const contactLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/justo-becerra-14868a1b4/',
  },
  { name: 'GitHub', url: 'https://github.com/JustBecerra' },
  {
    name: 'WhatsApp',
    url: `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
  },
];

export type Project = {
  imageURL: string;
  projectIcon: string;
  name: string;
  type: string;
  description: string;
  stack: string[];
  appLink: string;
  appLabel?: string;
  repoLink: string;
  note?: string;
};

export const ProfessionalInfo: Project[] = [
  {
    imageURL: '/clubbellSH.png',
    projectIcon: '/clubbellIcon.png',
    name: 'D73 Club Bell',
    type: 'projects.clubbellType',
    description: 'projects.clubbellDescription',
    stack: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
    appLink: '',
    repoLink: '',
    note: 'projects.clubbellNote',
  },
  {
    imageURL: '/managementnegociosSH.png',
    projectIcon: '/managementnegociosIcon.svg',
    name: 'Management Negocios',
    type: 'projects.managementnegociosType',
    description: 'projects.managementnegociosDescription',
    stack: ['React', 'TypeScript', 'Vite', 'React Router', 'Tailwind'],
    appLink: 'https://management-negocios.vercel.app',
    repoLink: '',
  },
  {
    imageURL: '/sinergiavaloresSH.png',
    projectIcon: '/sinergiavaloresIcon.ico',
    name: 'Sinergia Valores',
    type: 'projects.sinergiavaloresType',
    description: 'projects.sinergiavaloresDescription',
    stack: ['Astro', 'TypeScript', 'Tailwind'],
    appLink: 'https://www.sinergiavalores.com/',
    repoLink: '',
  },
];

export const ChallengeInfo: Project[] = [
  {
    imageURL: '/quiztimeSH.png',
    projectIcon: '/quiztimeicon.ico',
    name: 'Fun Quiz Time!',
    type: 'projects.quiztimeType',
    description: 'projects.quiztimeDescription',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Go', 'PostgreSQL'],
    appLink: 'https://fun-quiz-time.vercel.app/',
    appLabel: 'projects.tryApp',
    repoLink: 'https://github.com/JustBecerra/QuizTime',
  },
  {
    imageURL: '/marvelseekerSH.png',
    projectIcon: '/marvelseekerIcon.svg',
    name: 'Marvel Seeker',
    type: 'projects.marvelseekerType',
    description: 'projects.marvelseekerDescription',
    stack: ['Next.js', 'TypeScript', 'Redux'],
    appLink: 'https://marvel-seeker.vercel.app/',
    appLabel: 'projects.tryApp',
    repoLink: 'https://github.com/JustBecerra/MarvelSeeker',
  },
  {
    imageURL: '/rick&mortySH.png',
    projectIcon: '/rick&mortyicon.ico',
    name: 'Rick & Morty App',
    type: 'projects.rick&mortyType',
    description: 'projects.rick&mortyDescription',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    appLink:
      'https://rick-and-morty-challenge-justbecerras-projects.vercel.app/',
    appLabel: 'projects.tryApp',
    repoLink: 'https://github.com/JustBecerra/rick-morty-challenge',
  },
];

export const ExperienceInfo = [
  {
    role: 'experience.fts.role',
    company: 'Forward Thinking Systems',
    dates: 'experience.fts.dates',
    location: 'experience.fts.location',
    summary: 'experience.fts.summary',
    stack: ['Next.js', 'React', 'TypeScript', 'Java', 'Spring Boot', 'Oracle DB'],
  },
  {
    role: 'experience.vinculum.role',
    company: 'Vinculum',
    dates: 'experience.vinculum.dates',
    location: 'experience.vinculum.location',
    summary: 'experience.vinculum.summary',
    stack: ['Astro', 'React', 'TypeScript', 'Zustand', 'React Query', 'Node.js'],
  },
  {
    role: 'experience.devlabs.role',
    company: 'DevLabs',
    dates: 'experience.devlabs.dates',
    location: 'experience.devlabs.location',
    summary: 'experience.devlabs.summary',
    stack: ['React', 'React Native', 'TypeScript', 'Redux', 'React Query', 'Tailwind'],
  },
];

export const SkillGroups = [
  {
    title: 'about.skills.frontend',
    items: ['TypeScript', 'React', 'Next.js', 'Astro', 'Tailwind', 'Redux', 'Zustand', 'React Query'],
  },
  {
    title: 'about.skills.backend',
    items: ['Node.js', 'Express', 'Java', 'Spring Boot', 'Go', 'PostgreSQL', 'Oracle DB'],
  },
  {
    title: 'about.skills.mobile',
    items: ['React Native', 'Expo', 'Firebase'],
  },
  {
    title: 'about.skills.workflow',
    items: ['Git', 'GitHub', 'Vite', 'Vercel', 'Railway', 'Claude Code'],
  },
];
