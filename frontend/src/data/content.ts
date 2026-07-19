import { HeroSlide, Exam, Course, Faculty, SuccessStory, Stat } from "./types";

export const siteConfig = {
  name: "Premium Coaching Academy",
  tagline: "Where Aspirations Meet Excellence",
  taglineShort: "Excellence in Education",
  description:
    "India's premier coaching institute for competitive exams with a legacy of producing top rankers.",
  email: "info@premiumcoaching.com",
  phone: "+91 1800-123-4567",
  address: "123 Education Hub, Sector 14, New Delhi - 110001",
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    twitter: "#",
    linkedin: "#",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Exams", href: "#exams" },
  { label: "Courses", href: "#courses" },
  { label: "Faculty", href: "#faculty" },
  { label: "Results", href: "#results" },
  { label: "Resources", href: "#resources" },
];

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Crack Your Dream Exam",
    subtitle: "UPSC | IIT-JEE | NEET | SSC | CAT",
    description:
      "India's most comprehensive coaching program with 1000+ successful students. Expert faculty, structured curriculum, and personalized mentorship.",
    ctaPrimary: { text: "Explore Courses", href: "#courses" },
    ctaSecondary: { text: "Book Free Counselling", href: "#enquire" },
  },
  {
    id: 2,
    title: "Learn from the Best Faculty",
    subtitle: "20+ Years of Teaching Excellence",
    description:
      "Our faculty includes IIT/IIM alumni, PhD scholars, and former examiners. Each mentor brings decades of experience to help you succeed.",
    ctaPrimary: { text: "Meet Our Faculty", href: "#faculty" },
    ctaSecondary: { text: "View Results", href: "#results" },
  },
  {
    id: 3,
    title: "Proven Track Record of Success",
    subtitle: "500+ Ranks in Top 100",
    description:
      "Year after year, our students achieve outstanding results. Join the ranks of toppers who trusted Premium Coaching Academy for their preparation.",
    ctaPrimary: { text: "Success Stories", href: "#results" },
    ctaSecondary: { text: "Start Your Journey", href: "#enquire" },
  },
];

export const exams: Exam[] = [
  {
    id: 1,
    name: "UPSC",
    fullName: "Union Public Service Commission",
    description:
      "Comprehensive coverage of Prelims, Mains, and Interview with current affairs integration.",
    icon: "🏛️",
    href: "/exams/upsc",
    gradient: "from-amber-600 to-orange-700",
    color: "#D4A017",
  },
  {
    id: 2,
    name: "IIT-JEE",
    fullName: "IIT Joint Entrance Examination",
    description:
      "Advanced physics, chemistry, and mathematics with problem-solving mastery.",
    icon: "🔬",
    href: "/exams/iit-jee",
    gradient: "from-blue-600 to-indigo-700",
    color: "#2563EB",
  },
  {
    id: 3,
    name: "NEET",
    fullName: "National Eligibility cum Entrance Test",
    description:
      "In-depth biology, physics, and chemistry with extensive practice and mock tests.",
    icon: "⚕️",
    href: "/exams/neet",
    gradient: "from-emerald-600 to-teal-700",
    color: "#059669",
  },
  {
    id: 4,
    name: "SSC",
    fullName: "Staff Selection Commission",
    description:
      "Complete preparation for SSC CGL, CHSL, and other competitive examinations.",
    icon: "📋",
    href: "/exams/ssc",
    gradient: "from-purple-600 to-violet-700",
    color: "#7C3AED",
  },
  {
    id: 5,
    name: "CAT",
    fullName: "Common Admission Test",
    description:
      "Quantitative aptitude, data interpretation, verbal ability, and logical reasoning.",
    icon: "📊",
    href: "/exams/cat",
    gradient: "from-rose-600 to-pink-700",
    color: "#E11D48",
  },
];

export const courses: Course[] = [
  {
    id: 1,
    title: "UPSC Foundation Course",
    exam: "UPSC",
    duration: "12 Months",
    mode: "Online & Offline",
    description:
      "Comprehensive coverage of all GS papers, CSAT, and optional subjects with regular test series.",
    highlights: [
      "500+ hours of live classes",
      "Weekly current affairs sessions",
      "50+ mock tests with evaluation",
      "One-on-one mentorship",
      "Interview preparation",
    ],
    href: "/courses/upsc-foundation",
  },
  {
    id: 2,
    title: "IIT-JEE Advanced Program",
    exam: "IIT-JEE",
    duration: "2 Years",
    mode: "Classroom & Online",
    description:
      "Intensive preparation for JEE Main & Advanced with focus on conceptual clarity.",
    highlights: [
      "1000+ hours of expert lectures",
      "Daily practice problems",
      "Weekly mock tests",
      "Doubt resolution sessions",
      "Rank booster workshops",
    ],
    href: "/courses/jee-advanced",
  },
  {
    id: 3,
    title: "NEET Ultimate Program",
    exam: "NEET",
    duration: "12 Months",
    mode: "Online & Offline",
    description:
      "Master biology, physics, and chemistry with NCERT-focussed teaching and extensive practice.",
    highlights: [
      "600+ hours of classes",
      "NCERT deep-dive sessions",
      "Biology diagram workshops",
      "50+ full-length mock tests",
      "Physics & chemistry formula mastery",
    ],
    href: "/courses/neet-ultimate",
  },
  {
    id: 4,
    title: "CAT 100 Percentile Program",
    exam: "CAT",
    duration: "8 Months",
    mode: "Online",
    description:
      "Strategic preparation for QA, DILR, VARC with personalized weak-area improvement.",
    highlights: [
      "200+ interactive sessions",
      "Sectional tests & analysis",
      "5000+ practice questions",
      "Personalized weak area focus",
      "10 full-length SIMCATs",
    ],
    href: "/courses/cat-100",
  },
];

export const faculty: Faculty[] = [
  {
    id: 1,
    name: "Dr. Arvind Sharma",
    subject: "Political Science & Governance",
    experience: "22 Years",
    qualification: "PhD, JNU",
    image: "",
    bio: "Former assistant professor at Delhi University. Specializes in Indian Polity and International Relations for UPSC.",
  },
  {
    id: 2,
    name: "Prof. Meera Iyer",
    subject: "Physics",
    experience: "18 Years",
    qualification: "M.Sc. IIT Bombay",
    image: "",
    bio: "Known for intuitive physics teaching. Her students have consistently ranked in JEE Advanced top 500.",
  },
  {
    id: 3,
    name: "Dr. Suresh Patel",
    subject: "Biology",
    experience: "20 Years",
    qualification: "MBBS, AIIMS Delhi",
    image: "",
    bio: "Medical professional turned educator. Makes complex biological concepts simple and memorable.",
  },
  {
    id: 4,
    name: "Ms. Priya Verma",
    subject: "Quantitative Aptitude",
    experience: "15 Years",
    qualification: "IIM Ahmedabad",
    image: "",
    bio: "CAT 99.99 percentile scorer. Expert in quantitative aptitude and data interpretation.",
  },
  {
    id: 5,
    name: "Mr. Rajesh Kumar",
    subject: "Chemistry",
    experience: "16 Years",
    qualification: "Ph.D. IIT Delhi",
    image: "",
    bio: "Research scientist turned educator. Known for innovative teaching methods and problem-solving techniques.",
  },
  {
    id: 6,
    name: "Dr. Ananya Gupta",
    subject: "History & Culture",
    experience: "14 Years",
    qualification: "PhD, Oxford University",
    image: "",
    bio: "Specializes in Ancient and Medieval Indian history. Makes history come alive through storytelling.",
  },
];

export const successStories: SuccessStory[] = [
  {
    id: 1,
    name: "Rahul Verma",
    rank: "AIR 47",
    exam: "UPSC 2025",
    year: 2025,
    story:
      "From a small town in Bihar to becoming an IAS officer. Premium Coaching Academy's structured approach and mentorship made all the difference.",
    image: "",
    quote:
      "The mentorship program at Premium Coaching Academy changed my entire approach to UPSC preparation.",
  },
  {
    id: 2,
    name: "Sneha Patel",
    rank: "AIR 128",
    exam: "IIT-JEE 2025",
    year: 2025,
    story:
      "Cracked IIT-JEE Advanced with an outstanding rank. The daily practice problems and doubt-clearing sessions were game-changers.",
    image: "",
    quote:
      "The faculty here doesn't just teach — they inspire. Every concept was explained with such clarity.",
  },
  {
    id: 3,
    name: "Amit Singh",
    rank: "NEET AIR 56",
    exam: "NEET 2025",
    year: 2025,
    story:
      "Secured admission to AIIMS Delhi. The NCERT deep-dive sessions and extensive mock tests were crucial for my success.",
    image: "",
    quote:
      "Premium Coaching Academy's biology diagram workshops and physics formula mastery sessions were unmatched.",
  },
  {
    id: 4,
    name: "Priya Sharma",
    rank: "99.97 Percentile",
    exam: "CAT 2025",
    year: 2025,
    story:
      "Transformed from a non-engineer to a top CAT scorer. The personalized weak-area improvement plan was incredibly effective.",
    image: "",
    quote:
      "The personalized attention I received, especially in my weak areas, is what set Premium Coaching Academy apart.",
  },
  {
    id: 5,
    name: "Vikram Joshi",
    rank: "AIR 23",
    exam: "UPSC 2024",
    year: 2024,
    story:
      "From engineering to civil services. The optional subject guidance and interview preparation were invaluable.",
    image: "",
    quote:
      "Premium Coaching Academy gave me the structure, the strategy, and the confidence to crack the toughest exam in India.",
  },
];

export const stats: Stat[] = [
  { id: 1, value: 25000, suffix: "+", label: "Students Trained" },
  { id: 2, value: 500, suffix: "+", label: "Top 100 Ranks" },
  { id: 3, value: 98, suffix: "%", label: "Selection Rate" },
  { id: 4, value: 20, suffix: "+", label: "Years of Excellence" },
];