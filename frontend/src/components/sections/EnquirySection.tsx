"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { leadsApi } from "@/lib/api";

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    exam: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Map form data to API format
      const leadData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email || undefined,
        examInterest: formData.exam,
        message: formData.message || undefined,
      };
      await leadsApi.create(leadData);
      setSubmitted(true);
    } catch (err: any) {
      console.error("Failed to submit enquiry:", err);
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Failed to submit enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="enquire" data-theme="light" className="py-section-mobile md:py-section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-bg rounded-2xl p-12"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-heading text-3xl font-bold text-deep-blue mb-4">
              Thank You!
            </h3>
            <p className="text-slate text-lg max-w-md mx-auto mb-6">
              We&apos;ve received your enquiry. One of our academic counsellors
              will reach out to you within 24 hours.
            </p>
            <Button
              variant="primary"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  phone: "",
                  email: "",
                  exam: "",
                  message: "",
                });
              }}
            >
              Submit Another
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="enquire" data-theme="light" className="py-section-mobile md:py-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <SectionHeading
              align="left"
              tag="Get Started"
              title="Ready to Begin Your Journey?"
              subtitle="Fill in your details and our academic counsellors will help you choose the right program for your goals."
            />

            <div className="space-y-6 mt-10 hidden lg:block">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  ),
                  title: "Visit Our Campus",
                  desc: "123 Education Hub, Sector 14, New Delhi",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  ),
                  title: "Call Us",
                  desc: "+91 1800-123-4567",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ),
                  title: "Email Us",
                  desc: "info@premiumcoaching.com",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-electric"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-deep-blue">
                      {item.title}
                    </h4>
                    <p className="text-slate text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-bg rounded-2xl p-8 shadow-card"
          >
            {error && (
              <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-200 text-red-700">
                {error}
              </div>
            )}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-deep-blue mb-1.5">
                  Full Name <span className="text-electric">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-deep-blue placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all duration-200 ${
                    loading ? "opacity-50" : ""
                  }`}
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-blue mb-1.5">
                  Phone Number <span className="text-electric">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-deep-blue placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all duration-200 ${
                    loading ? "opacity-50" : ""
                  }`}
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-blue mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-deep-blue placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all duration-200 ${
                    loading ? "opacity-50" : ""
                  }`}
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-blue mb-1.5">
                  Exam Interested In <span className="text-electric">*</span>
                </label>
                <select
                  required
                  value={formData.exam}
                  onChange={(e) =>
                    setFormData({ ...formData, exam: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-deep-blue focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all duration-200 ${
                    loading ? "opacity-50" : ""
                  }`}
                  disabled={loading}
                >
                  <option value="" disabled>
                    Select an exam
                  </option>
                  <option value="UPSC">UPSC</option>
                  <option value="IIT-JEE">IIT-JEE</option>
                  <option value="NEET">NEET</option>
                  <option value="SSC">SSC</option>
                  <option value="CAT">CAT</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-blue mb-1.5">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Any specific requirements?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-deep-blue placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-electric/30 focus:border-electric transition-all duration-200 resize-none ${
                    loading ? "opacity-50" : ""
                  }`}
                  disabled={loading}
                />
              </div>

              <Button
                variant="primary"
                size="lg"
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </Button>

              <p className="text-xs text-slate/60 text-center">
                We respect your privacy. Your data is secure and will not be
                shared with third parties.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}