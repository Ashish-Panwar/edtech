import { siteConfig } from "@/data/content";

const footerLinks = [
  {
    title: "Exams",
    links: [
      { label: "UPSC", href: "/exams/upsc" },
      { label: "IIT-JEE", href: "/exams/iit-jee" },
      { label: "NEET", href: "/exams/neet" },
      { label: "SSC", href: "/exams/ssc" },
      { label: "CAT", href: "/exams/cat" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Faculty", href: "#faculty" },
      { label: "Results", href: "#results" },
      { label: "Blog", href: "#resources" },
      { label: "Contact", href: "#enquire" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refund Policy", href: "/refund" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-deep-blue relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric/3 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-lg gradient-electric flex items-center justify-center font-heading font-bold text-deep-blue text-lg">
                P
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white">
                  Premium
                </span>
                <span className="font-heading font-bold text-xl text-electric">
                  {" "}Coaching
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              India&apos;s premier coaching institute for competitive exams.
              Empowering students to achieve their dreams since 2005.
            </p>
            <div className="flex gap-3">
              {["facebook", "instagram", "youtube", "twitter", "linkedin"].map(
                (social) => (
                  <a
                    key={social}
                    href={siteConfig.social[social as keyof typeof siteConfig.social]}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-electric transition-all duration-300 flex items-center justify-center group"
                    aria-label={social}
                  >
                    <svg className="w-4 h-4 text-white/70 group-hover:text-deep-blue transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-widest mb-5">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-electric text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <div className="flex items-center gap-2 text-white/30 text-xs">
              <span>{siteConfig.address}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}