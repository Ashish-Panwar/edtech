import {
  HeroSlide,
  Exam,
  Course,
  Faculty,
  SuccessStory,
  Stat
} from '@/data/types';

/**
 * Define types for endpoints that don't have matching frontend types yet
 */
export interface Lead {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  examInterest: string;
  message?: string;
  status?: string;
  source?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

/**
 * Base URL for API - in production this would be set via environment variable
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4001';
console.log('API_BASE_URL:', API_BASE_URL);

/**
 * Fetch helper that handles JSON responses and errors
 */
async function fetcher<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  console.log(`Fetching: ${url}`);

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
    ...options,
  });

  console.log(`Response status: ${response.status} for ${url}`);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message ||
      `API request failed with status ${response.status}`
    );
  }

  const result = await response.json();
  console.log(`Response data for ${url}:`, result);
  return result;
}

/**
 * Exam-related APIs
 */
export const examsApi = {
  getAll: async (): Promise<Exam[]> => {
    const data = await fetcher<{
      id: string;
      name: string;
      fullName: string;
      description: string | null;
      icon: string | null;
      href: string | null;
      gradient: string | null;
      color: string | null;
      sortOrder: number;
      isActive: boolean
    }[]>('/exams');

    // Transform backend Exam format to frontend Exam format
    return data.map(exam => ({
      id: parseInt(exam.id.replace(/-/g, ''), 16) % 1000000,
      name: exam.name,
      fullName: exam.fullName,
      description: exam.description ?? '',
      icon: exam.icon ?? '',
      href: exam.href ?? '',
      gradient: exam.gradient ?? '',
      color: exam.color ?? '',
    }));
  },
};

/**
 * Course-related APIs
 */
export const coursesApi = {
  getAll: async (): Promise<Course[]> => {
    const data = await fetcher<{
      id: string;
      title: string;
      slug: string;
      exam: string;
      description: string | null;
      duration: string | null;
      mode: string | null;
      price: number | null;
      highlights: string[] | null;
      image: string | null;
      isActive: boolean;
    }[]>('/courses');

    // Transform backend Course format to frontend Course format
    return data.map(course => ({
      id: parseInt(course.id.replace(/-/g, ''), 16) % 1000000,
      title: course.title,
      exam: course.exam,
      duration: course.duration ?? '',
      mode: course.mode ?? '',
      description: course.description ?? '',
      highlights: course.highlights ?? [],
      href: `/courses/${course.slug}`, // Generate href from slug
    }));
  },
};

/**
 * Faculty-related APIs
 */
export const facultyApi = {
  getAll: async (): Promise<Faculty[]> => {
    const data = await fetcher<{
      id: string;
      name: string;
      slug: string;
      subject: string;
      experience: string | null;
      qualification: string | null;
      bio: string | null;
      image: string | null;
      isActive: boolean;
    }[]>('/faculty');

    return data.map(fac => ({
      id: parseInt(fac.id.replace(/-/g, ''), 16) % 1000000,
      name: fac.name,
      subject: fac.subject,
      experience: fac.experience ?? '',
      qualification: fac.qualification ?? '',
      image: fac.image ?? '',
      bio: fac.bio ?? '',
    }));
  },
};

/**
 * Testimonials (Success Stories) APIs
 */
export const testimonialsApi = {
  getAll: async (): Promise<SuccessStory[]> => {
    const data = await fetcher<{
      id: string;
      studentName: string;
      exam: string;
      rank: string;
      year: number | null;
      story: string | null;
      image: string | null;
      quote: string | null;
      isActive: boolean;
    }[]>('/testimonials');

    return data.map(t => ({
      id: parseInt(t.id.replace(/-/g, ''), 16) % 1000000,
      name: t.studentName,
      rank: t.rank,
      exam: t.exam,
      year: t.year ?? 0,
      story: t.story ?? '',
      image: t.image ?? '',
      quote: t.quote ?? '',
    }));
  },
};

/**
 * Stats APIs
 */
export const statsApi = {
  getAll: async (): Promise<Stat[]> => {
    const data = await fetcher<{
      id: string;
      value: number | null;
      suffix: string | null;
      label: string | null;
      sortOrder: number;
      isActive: boolean;
    }[]>('/stats');

    return data.map(s => ({
      id: parseInt(s.id.replace(/-/g, ''), 16) % 1000000,
      value: s.value ?? 0,
      suffix: s.suffix ?? '',
      label: s.label ?? '',
    }));
  },
};

/**
 * Hero Slides APIs
 */
export const heroSlidesApi = {
  getAll: async (): Promise<HeroSlide[]> => {
    const data = await fetcher<{
      id: string;
      title: string;
      subtitle: string | null;
      description: string | null;
      ctaPrimaryText: string | null;
      ctaPrimaryHref: string | null;
      ctaSecondaryText: string | null;
      ctaSecondaryHref: string | null;
      image: string | null;
      sortOrder: number;
      isActive: boolean;
    }[]>('/hero-slides');

    return data.map(slide => ({
      id: parseInt(slide.id.replace(/-/g, ''), 16) % 1000000,
      title: slide.title,
      subtitle: slide.subtitle ?? '',
      description: slide.description ?? '',
      ctaPrimary: {
        text: slide.ctaPrimaryText ?? '',
        href: slide.ctaPrimaryHref ?? '#',
      },
      ctaSecondary: {
        text: slide.ctaSecondaryText ?? '',
        href: slide.ctaSecondaryHref ?? '#',
      },
      image: slide.image ?? '',
    }));
  },
};

/**
 * Lead APIs (for enquiry form)
 */
export const leadsApi = {
  create: async (data: Omit<Lead, 'id' | 'createdAt' | 'updatedAt'>): Promise<Lead> => {
    const result = await fetcher<Lead>('/leads', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return result;
  },
};

/**
 * Auth APIs
 */
export const authApi = {
  login: async (credentials: { email: string; password: string }): Promise<AuthResponse> => {
    const result = await fetcher<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    return result;
  },

  register: async (userData: { name: string; email: string; password: string }): Promise<AuthResponse> => {
    const result = await fetcher<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    return result;
  },
};
