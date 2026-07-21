"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_js_1 = require("../generated/prisma/client.js");
const adapter_pg_1 = require("@prisma/adapter-pg");
const bcrypt = __importStar(require("bcrypt"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const prisma = new client_js_1.PrismaClient({
    adapter: new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL }),
});
const exams = [
    {
        name: 'UPSC',
        fullName: 'Union Public Service Commission',
        description: 'Comprehensive coverage of Prelims, Mains, and Interview with current affairs integration.',
        icon: '🏛️',
        href: '/exams/upsc',
        gradient: 'from-amber-600 to-orange-700',
        color: '#D4A017',
        sortOrder: 1,
    },
    {
        name: 'IIT-JEE',
        fullName: 'IIT Joint Entrance Examination',
        description: 'Advanced physics, chemistry, and mathematics with problem-solving mastery.',
        icon: '🔬',
        href: '/exams/iit-jee',
        gradient: 'from-blue-600 to-indigo-700',
        color: '#2563EB',
        sortOrder: 2,
    },
    {
        name: 'NEET',
        fullName: 'National Eligibility cum Entrance Test',
        description: 'In-depth biology, physics, and chemistry with extensive practice and mock tests.',
        icon: '⚕️',
        href: '/exams/neet',
        gradient: 'from-emerald-600 to-teal-700',
        color: '#059669',
        sortOrder: 3,
    },
    {
        name: 'SSC',
        fullName: 'Staff Selection Commission',
        description: 'Complete preparation for SSC CGL, CHSL, and other competitive examinations.',
        icon: '📋',
        href: '/exams/ssc',
        gradient: 'from-purple-600 to-violet-700',
        color: '#7C3AED',
        sortOrder: 4,
    },
    {
        name: 'CAT',
        fullName: 'Common Admission Test',
        description: 'Quantitative aptitude, data interpretation, verbal ability, and logical reasoning.',
        icon: '📊',
        href: '/exams/cat',
        gradient: 'from-rose-600 to-pink-700',
        color: '#E11D48',
        sortOrder: 5,
    },
];
const courses = [
    {
        title: 'UPSC Foundation Course',
        slug: 'upsc-foundation',
        exam: 'UPSC',
        duration: '12 Months',
        mode: 'Online & Offline',
        description: 'Comprehensive coverage of all GS papers, CSAT, and optional subjects with regular test series.',
        highlights: [
            '500+ hours of live classes',
            'Weekly current affairs sessions',
            '50+ mock tests with evaluation',
            'One-on-one mentorship',
            'Interview preparation',
        ],
    },
    {
        title: 'IIT-JEE Advanced Program',
        slug: 'jee-advanced',
        exam: 'IIT-JEE',
        duration: '2 Years',
        mode: 'Classroom & Online',
        description: 'Intensive preparation for JEE Main & Advanced with focus on conceptual clarity.',
        highlights: [
            '1000+ hours of expert lectures',
            'Daily practice problems',
            'Weekly mock tests',
            'Doubt resolution sessions',
            'Rank booster workshops',
        ],
    },
    {
        title: 'NEET Ultimate Program',
        slug: 'neet-ultimate',
        exam: 'NEET',
        duration: '12 Months',
        mode: 'Online & Offline',
        description: 'Master biology, physics, and chemistry with NCERT-focussed teaching and extensive practice.',
        highlights: [
            '600+ hours of classes',
            'NCERT deep-dive sessions',
            'Biology diagram workshops',
            '50+ full-length mock tests',
            'Physics & chemistry formula mastery',
        ],
    },
    {
        title: 'CAT 100 Percentile Program',
        slug: 'cat-100',
        exam: 'CAT',
        duration: '8 Months',
        mode: 'Online',
        description: 'Strategic preparation for QA, DILR, VARC with personalized weak-area improvement.',
        highlights: [
            '200+ interactive sessions',
            'Sectional tests & analysis',
            '5000+ practice questions',
            'Personalized weak area focus',
            '10 full-length SIMCATs',
        ],
    },
];
const faculty = [
    {
        name: 'Dr. Arvind Sharma',
        slug: 'dr-arvind-sharma',
        subject: 'Political Science & Governance',
        experience: '22 Years',
        qualification: 'PhD, JNU',
        bio: 'Former assistant professor at Delhi University. Specializes in Indian Polity and International Relations for UPSC.',
    },
    {
        name: 'Prof. Meera Iyer',
        slug: 'prof-meera-iyer',
        subject: 'Physics',
        experience: '18 Years',
        qualification: 'M.Sc. IIT Bombay',
        bio: 'Known for intuitive physics teaching. Her students have consistently ranked in JEE Advanced top 500.',
    },
    {
        name: 'Dr. Suresh Patel',
        slug: 'dr-suresh-patel',
        subject: 'Biology',
        experience: '20 Years',
        qualification: 'MBBS, AIIMS Delhi',
        bio: 'Medical professional turned educator. Makes complex biological concepts simple and memorable.',
    },
    {
        name: 'Ms. Priya Verma',
        slug: 'ms-priya-verma',
        subject: 'Quantitative Aptitude',
        experience: '15 Years',
        qualification: 'IIM Ahmedabad',
        bio: 'CAT 99.99 percentile scorer. Expert in quantitative aptitude and data interpretation.',
    },
    {
        name: 'Mr. Rajesh Kumar',
        slug: 'mr-rajesh-kumar',
        subject: 'Chemistry',
        experience: '16 Years',
        qualification: 'Ph.D. IIT Delhi',
        bio: 'Research scientist turned educator. Known for innovative teaching methods and problem-solving techniques.',
    },
    {
        name: 'Dr. Ananya Gupta',
        slug: 'dr-ananya-gupta',
        subject: 'History & Culture',
        experience: '14 Years',
        qualification: 'PhD, Oxford University',
        bio: 'Specializes in Ancient and Medieval Indian history. Makes history come alive through storytelling.',
    },
];
const testimonials = [
    {
        studentName: 'Rahul Verma',
        exam: 'UPSC 2025',
        rank: 'AIR 47',
        year: 2025,
        story: 'From a small town in Bihar to becoming an IAS officer. Premium Coaching Academy\'s structured approach and mentorship made all the difference.',
        quote: 'The mentorship program at Premium Coaching Academy changed my entire approach to UPSC preparation.',
    },
    {
        studentName: 'Sneha Patel',
        exam: 'IIT-JEE 2025',
        rank: 'AIR 128',
        year: 2025,
        story: 'Cracked IIT-JEE Advanced with an outstanding rank. The daily practice problems and doubt-clearing sessions were game-changers.',
        quote: 'The faculty here doesn\'t just teach — they inspire. Every concept was explained with such clarity.',
    },
    {
        studentName: 'Amit Singh',
        exam: 'NEET 2025',
        rank: 'NEET AIR 56',
        year: 2025,
        story: 'Secured admission to AIIMS Delhi. The NCERT deep-dive sessions and extensive mock tests were crucial for my success.',
        quote: 'Premium Coaching Academy\'s biology diagram workshops and physics formula mastery sessions were unmatched.',
    },
    {
        studentName: 'Priya Sharma',
        exam: 'CAT 2025',
        rank: '99.97 Percentile',
        year: 2025,
        story: 'Transformed from a non-engineer to a top CAT scorer. The personalized weak-area improvement plan was incredibly effective.',
        quote: 'The personalized attention I received, especially in my weak areas, is what set Premium Coaching Academy apart.',
    },
    {
        studentName: 'Vikram Joshi',
        exam: 'UPSC 2024',
        rank: 'AIR 23',
        year: 2024,
        story: 'From engineering to civil services. The optional subject guidance and interview preparation were invaluable.',
        quote: 'Premium Coaching Academy gave me the structure, the strategy, and the confidence to crack the toughest exam in India.',
    },
];
const heroSlides = [
    {
        title: 'Crack Your Dream Exam',
        subtitle: 'UPSC | IIT-JEE | NEET | SSC | CAT',
        description: 'India\'s most comprehensive coaching program with 1000+ successful students. Expert faculty, structured curriculum, and personalized mentorship.',
        ctaPrimaryText: 'Explore Courses',
        ctaPrimaryHref: '#courses',
        ctaSecondaryText: 'Book Free Counselling',
        ctaSecondaryHref: '#enquire',
        sortOrder: 1,
    },
    {
        title: 'Learn from the Best Faculty',
        subtitle: '20+ Years of Teaching Excellence',
        description: 'Our faculty includes IIT/IIM alumni, PhD scholars, and former examiners. Each mentor brings decades of experience to help you succeed.',
        ctaPrimaryText: 'Meet Our Faculty',
        ctaPrimaryHref: '#faculty',
        ctaSecondaryText: 'View Results',
        ctaSecondaryHref: '#results',
        sortOrder: 2,
    },
    {
        title: 'Proven Track Record of Success',
        subtitle: '500+ Ranks in Top 100',
        description: 'Year after year, our students achieve outstanding results. Join the ranks of toppers who trusted Premium Coaching Academy for their preparation.',
        ctaPrimaryText: 'Success Stories',
        ctaPrimaryHref: '#results',
        ctaSecondaryText: 'Start Your Journey',
        ctaSecondaryHref: '#enquire',
        sortOrder: 3,
    },
];
const stats = [
    { value: 25000, suffix: '+', label: 'Students Trained', sortOrder: 1 },
    { value: 500, suffix: '+', label: 'Top 100 Ranks', sortOrder: 2 },
    { value: 98, suffix: '%', label: 'Selection Rate', sortOrder: 3 },
    { value: 20, suffix: '+', label: 'Years of Excellence', sortOrder: 4 },
];
async function main() {
    console.log('🌱 Seeding database...');
    console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);
    await prisma.lead.deleteMany();
    await prisma.heroSlide.deleteMany();
    await prisma.stat.deleteMany();
    await prisma.testimonial.deleteMany();
    await prisma.faculty.deleteMany();
    await prisma.course.deleteMany();
    await prisma.exam.deleteMany();
    await prisma.user.deleteMany();
    for (const exam of exams) {
        await prisma.exam.create({ data: exam });
    }
    console.log(`  ✅ ${exams.length} exams seeded`);
    for (const course of courses) {
        await prisma.course.create({ data: course });
    }
    console.log(`  ✅ ${courses.length} courses seeded`);
    for (const member of faculty) {
        await prisma.faculty.create({ data: member });
    }
    console.log(`  ✅ ${faculty.length} faculty members seeded`);
    for (const testimonial of testimonials) {
        await prisma.testimonial.create({ data: testimonial });
    }
    console.log(`  ✅ ${testimonials.length} testimonials seeded`);
    for (const slide of heroSlides) {
        await prisma.heroSlide.create({ data: slide });
    }
    console.log(`  ✅ ${heroSlides.length} hero slides seeded`);
    for (const stat of stats) {
        await prisma.stat.create({ data: stat });
    }
    console.log(`  ✅ ${stats.length} stats seeded`);
    const passwordHash = await bcrypt.hash('admin123', 10);
    await prisma.user.create({
        data: {
            name: 'Admin',
            email: 'admin@premiumcoaching.com',
            passwordHash,
            role: 'admin',
        },
    });
    console.log(`  ✅ 1 admin user seeded (email: admin@premiumcoaching.com)`);
    console.log('✅ Seeding complete!');
}
main()
    .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map