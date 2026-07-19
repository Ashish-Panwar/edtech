export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
  image?: string;
}

export interface Exam {
  id: number;
  name: string;
  fullName: string;
  description: string;
  icon: string;
  href: string;
  gradient: string;
  color: string;
}

export interface Course {
  id: number;
  title: string;
  exam: string;
  duration: string;
  mode: string;
  description: string;
  highlights: string[];
  href: string;
}

export interface Faculty {
  id: number;
  name: string;
  subject: string;
  experience: string;
  qualification: string;
  image: string;
  bio: string;
}

export interface SuccessStory {
  id: number;
  name: string;
  rank: string;
  exam: string;
  year: number;
  story: string;
  image: string;
  quote: string;
}

export interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}