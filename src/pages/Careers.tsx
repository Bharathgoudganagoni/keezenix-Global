import { Link } from "react-router-dom";
import {
  Users,
  Heart,
  Coffee,
  Award,
  ArrowRight,
  MapPin,
  Clock,
  ChevronRight,
  CheckCircle2,
  DollarSign
} from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import officeImg from "@/assets/web-dev.jpg";

/* ─── Benefits Section ─── */
const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    desc: "Industry-leading compensation packages and performance bonuses."
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Comprehensive health coverage and employee wellness programs."
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    desc: "Flexible working hours and a supportive environment."
  },
  {
    icon: Award,
    title: "Career Growth",
    desc: "Upskilling, mentorship, and internal growth opportunities."
  },
  {
    icon: Users,
    title: "Team Culture",
    desc: "Collaborative and innovation-driven workplace."
  }
];

/* ─── Job Openings ─── */
const jobs = [
  {
    id: "hr-assistant",
    title: "HR Assistant (0–2 years Exp)",
    location: "Remote / India",
    type: "Full-Time",
    desc: "Support recruitment, client coordination, and HR operations while working closely with our growing team.",
    skills: ["Recruitment", "Communication", "MS Office", "HR Operations"]
  },
  {
    id: "system-test",
    title: "Senior System Test Engineer (6–9 Years Exp)",
    location: "India",
    type: "Hybrid (4 Days Office + 1 Day WFH)",
    desc: "Develop & debug FBD / Ladder Logic programs, troubleshoot issues & ensure optimal system performance.",
    skills: ["Fieldbus protocols", "FBD & Ladder Logic", "Servo, PLC, VFD", "Motion Programming"]
  },
  {
    id: "data-engineer",
    title: "Senior Data Engineer (6–8 Years Exp)",
    location: "Bengaluru",
    type: "Full-Time",
    desc: "Own end-to-end data pipelines & build scalable high-performance systems.",
    skills: ["Airflow", "Jenkins", "Kafka / Kinesis / Spark", "Advanced SQL"]
  },
  {
    id: "algorithm-engineer",
    title: "Algorithm Engineer (1+ Years Exp)",
    location: "Chennai",
    type: "Full-Time",
    desc: "Design and develop advanced algorithms for high-performance computing applications.",
    skills: ["C++ Programming", "Image Processing", "Algorithm Design", "MATLAB / Data Analysis"]
  },
  {
    id: "graphic-designer",
    title: "Senior Specialist – Graphic Designer (8+ Years Exp)",
    location: "Hyderabad",
    type: "Full-Time",
    desc: "Create high-quality visual designs, driving strong brand communication and user engagement.",
    skills: ["Adobe Creative Suite", "Visual Design", "UX/UI", "Data Visualization"]
  },
  {
    id: "software-engineer",
    title: "Sr. Software Engineer (6–9 Years Exp)",
    location: "Hyderabad",
    type: "Hybrid (4 Days Office + 1 Day WFH)",
    desc: "Design and develop scalable software solutions using .NET technologies and object-oriented programming.",
    skills: [".NET & C#", "OOP", "UML", "Git / SVN"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Associate",
    location: "Pune",
    type: "Full-Time",
    desc: "Manage in-store sales and drive digital engagement through social media and customer interaction.",
    skills: ["Sales", "Social Media", "Content", "Communication"]
  },
  {
    id: "industry-lead",
    title: "Industry Vertical Lead (10–15 Years Exp)",
    location: "USA",
    type: "Full-Time",
    desc: "Lead and grow the Life Sciences vertical by driving strategic sales and revenue.",
    skills: ["Sales Strategy", "Client Management", "Market Expansion"]
  },
  {
    id: "business-transformation",
    title: "Lead Business Transformation (5–7 Years Exp)",
    location: "Mumbai",
    type: "Full-Time / Hybrid",
    desc: "Lead business transformation initiatives to drive EBITDA growth and operational excellence.",
    skills: ["Strategy", "Financial Analysis", "Lean / Six Sigma"]
  }
];

const Careers = () => {
  return (
    <div className="overflow-x-hidden">
      <section
        className="pt-32 pb-20 text-center"
        style={{ background: "var(--hero-gradient)" }}
      >
        <AnimatedSection>
          <span className="green-badge">Careers</span>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Build your career with us and work on exciting IT and HR projects.
          </p>
        </AnimatedSection>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="green-badge">Why Join Us</span>
              <h2 className="section-title">Perks & Benefits</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-5 gap-6">
            {benefits.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100} className="h-full">
                <div className="service-card p-6 text-center h-full flex flex-col">
                  <item.icon size={28} className="mx-auto mb-3 text-primary" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

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
              <AnimatedSection key={job.id} delay={i * 100}>
                <Link to={`/careers/${job.id}`} className="block">
                  <div className="service-card p-6 flex flex-col md:flex-row md:justify-between gap-5 cursor-pointer hover:shadow-lg transition">
                    <div>
                      <h3 className="font-bold text-lg">{job.title}</h3>

                      <div className="flex gap-4 text-sm text-muted-foreground mt-1 flex-wrap">
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
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center text-primary text-sm font-semibold gap-1">
                      View Details <ChevronRight size={14} />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection>
            <img
              src={officeImg}
              alt="Team"
              className="rounded-2xl shadow-lg"
            />
          </AnimatedSection>

          <AnimatedSection>
            <span className="green-badge">Our Culture</span>
            <h2 className="section-title">Work That Inspires You</h2>

            <p className="text-muted-foreground mb-4">
              We create an environment where people can grow, innovate, and collaborate.
            </p>

            <div className="space-y-2">
              {[
                "Collaborative work culture",
                "Learning & development support",
                "Open communication",
                "Innovation-first mindset"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-secondary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section
        className="py-20 text-center"
        style={{ background: "var(--hero-gradient)" }}
      >
        <AnimatedSection>
          <h2 className="text-white text-3xl font-bold mb-4">
            Ready to Apply?
          </h2>
          <p className="text-white/70 mb-6">
            Start your journey with us today.
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
