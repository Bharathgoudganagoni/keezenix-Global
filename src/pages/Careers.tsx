import { Link } from "react-router-dom";
import {
  Briefcase,
  Users,
  Heart,
  Coffee,
  Award,
  ArrowRight,
  MapPin,
  Clock,
  ChevronRight,
  CheckCircle2
} from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";

// Sample images (replace later)
import hero from "@/assets/Slide-2.jpg";
import officeImg from "@/assets/web-dev.jpg";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Comprehensive health coverage and wellness programs to support you and your family."
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    desc: "Flexible working hours and remote-friendly environment."
  },
  {
    icon: Award,
    title: "Career Growth",
    desc: "Continuous learning, mentorship, and promotion opportunities."
  },
  {
    icon: Users,
    title: "Great Culture",
    desc: "Collaborative, inclusive, and innovation-driven workplace."
  }
];

const jobs = [
  {
    title: "Frontend Developer (React)",
    location: "Remote / Bangalore",
    type: "Full-Time",
    desc: "Build modern, scalable web applications using React and Tailwind.",
    skills: ["React", "JavaScript", "Tailwind", "REST APIs"]
  },
  {
    title: "Backend Developer (Node.js)",
    location: "Bangalore",
    type: "Full-Time",
    desc: "Design APIs and scalable backend systems using Node.js.",
    skills: ["Node.js", "Express", "MongoDB", "API Design"]
  },
  {
    title: "Digital Marketing Specialist",
    location: "Remote",
    type: "Full-Time",
    desc: "Drive growth through SEO, paid campaigns, and social media.",
    skills: ["SEO", "Google Ads", "Analytics", "Content"]
  }
];

const Careers = () => {
  return (
    <div className="overflow-x-hidden">

      {/* ─── Hero Section ─── */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <AnimatedSection>
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <span className="green-badge">Careers</span>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Build your future with us. Work on exciting projects, grow your
              skills, and be part of a team that values innovation and people.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── Why Join Us ─── */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="green-badge">Why Join Us</span>
              <h2 className="section-title">Perks & Benefits</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="service-card text-center p-6">
                  <item.icon className="mx-auto mb-4 text-primary" size={28} />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Open Positions ─── */}
      <section className="py-20" style={{ background: "hsl(var(--section-bg))" }}>
        <div className="container max-w-7xl mx-auto px-4">

          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="green-badge">Open Roles</span>
              <h2 className="section-title">Current Openings</h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 100}>
                <div className="service-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                  <div>
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {job.type}
                      </span>
                    </div>
                    <p className="text-sm mt-2 text-muted-foreground">
                      {job.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {job.skills.map(skill => (
                        <span
                          key={skill}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2"
                  >
                    Apply Now <ChevronRight size={14} />
                  </Link>

                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Culture Section ─── */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          <AnimatedSection>
            <img
              src={officeImg}
              alt="Office"
              className="rounded-2xl shadow-lg"
            />
          </AnimatedSection>

          <AnimatedSection>
            <span className="green-badge">Our Culture</span>
            <h2 className="section-title">Work That Inspires You</h2>
            <p className="text-muted-foreground mb-4">
              We believe in empowering people, encouraging creativity, and
              building an environment where everyone can thrive and grow.
            </p>

            <div className="space-y-2">
              {[
                "Collaborative team environment",
                "Learning & development programs",
                "Open communication culture",
                "Innovation-driven mindset"
              ].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-secondary" />
                  <span className="text-sm">{point}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ─── Hiring Process ─── */}
      <section className="py-20" style={{ background: "hsl(var(--section-bg))" }}>
        <div className="container max-w-7xl mx-auto px-4 text-center">

          <AnimatedSection>
            <span className="green-badge">Process</span>
            <h2 className="section-title">Our Hiring Process</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              "Apply",
              "Screening",
              "Interview",
              "Offer"
            ].map((step, i) => (
              <AnimatedSection key={step} delay={i * 100}>
                <div className="service-card p-6">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {i + 1}
                  </div>
                  <p>{step}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 text-center" style={{ background: "var(--hero-gradient)" }}>
        <AnimatedSection>
          <h2 className="text-white text-3xl font-bold mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-white/70 mb-6">
            Send your resume and let's build something amazing together.
          </p>
          <Link to="/contact" className="btn-hero">
            Apply Now <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </section>

    </div>
  );
};

export default Careers;