import { Link } from "react-router-dom";
import {
  Code2, Smartphone, TrendingUp, Users, Search,
  UserCheck, Building2, ArrowRight, CheckCircle2,
  Globe, Zap, Database, Cloud, Shield, ChevronRight,
  BarChart3, Megaphone, Briefcase
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import webDevImg from "@/assets/web-dev.jpg";
import appDevImg from "@/assets/app-dev.jpg";
import digitalMarketingImg from "@/assets/digital-marketing.jpg";
import recruitmentImg from "@/assets/recruitment.jpg";
import techBgImg from "@/assets/tech-bg.jpg";

const itServices = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "We design and develop high-performance, SEO-optimized websites that captivate users and convert visitors into customers. From landing pages to enterprise portals.",
    features: ["Custom Design", "Responsive Layout", "SEO Optimized", "CMS Integration"],
    img: webDevImg,
  },
  {
    icon: Smartphone,
    title: "Application Development",
    desc: "Native iOS, Android, and cross-platform mobile applications built for performance, scalability, and exceptional user experience.",
    features: ["iOS & Android", "React Native / Flutter", "API Integration", "App Store Deployment"],
    img: appDevImg,
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Comprehensive digital marketing strategies — from SEO and PPC to social media and content marketing — that grow your brand and generate qualified leads.",
    features: ["SEO & SEM", "Social Media Marketing", "PPC Campaigns", "Analytics & Reporting"],
    img: digitalMarketingImg,
  },
];

const hrServices = [
  {
    icon: Search,
    title: "Talent Acquisition",
    desc: "We leverage an extensive network and advanced sourcing methodologies to identify and attract high-caliber professionals for critical roles across industries.",
    features: ["Executive Search", "Technical Hiring", "Volume Recruitment", "Candidate Assessment"],
    img: recruitmentImg,
  },
  {
    icon: Building2,
    title: "Staffing Solutions",
    desc: "Flexible staffing models — contract, permanent, and project-based — that give you the workforce agility your business demands.",
    features: ["Contract Staffing", "Permanent Placement", "Project Teams", "Managed Services"],
    img: recruitmentImg,
  },
  {
    icon: UserCheck,
    title: "Recruitment Support",
    desc: "End-to-end recruitment process outsourcing (RPO) and advisory services that streamline your hiring funnel and reduce time-to-fill.",
    features: ["RPO Services", "HR Advisory", "Job Description Writing", "Interview Coordination"],
    img: recruitmentImg,
  },
];

const techStack = [
  { icon: Globe, label: "React / Next.js" },
  { icon: Smartphone, label: "Flutter / RN" },
  { icon: Database, label: "Node.js / Python" },
  { icon: Cloud, label: "AWS / Azure" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: BarChart3, label: "Data Analytics" },
];

const Services = () => {
  return (
    <div className="overflow-x-hidden">
      {/* ─── Page Hero ─── */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: "hsl(var(--secondary))" }}
        />
        <AnimatedSection>
          <div className="container max-w-7xl mx-auto px-4 text-center relative z-10">
            <span className="green-badge">What We Do</span>
            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Our Services
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive IT and HR solutions designed to accelerate your
              digital transformation and build the team that drives it.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── IT Services ─── */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-12">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-light)))" }}
              >
                <Zap size={24} className="text-white" />
              </div>
              <div>
                <span className="green-badge mb-0">IT Solutions</span>
                <h2 className="section-title mb-0 mt-1">Technology Services</h2>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-7">
            {itServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <div className="service-card h-full group overflow-hidden p-0">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden rounded-t-2xl">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, hsl(var(--primary)/0.65) 100%)" }} />
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <service.icon size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <div className="space-y-1.5 mb-4">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-secondary flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{feat}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="text-primary text-xs font-semibold flex items-center gap-1 hover:gap-2 hover:text-secondary transition-all"
                    >
                      Get a Quote <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Tech Stack ─── */}
      <section className="py-14" style={{ background: "hsl(var(--section-bg))" }}>
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-8">
              <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest">
                Technologies We Work With
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {techStack.map((tech, i) => (
              <AnimatedSection key={tech.label} delay={i * 60}>
                <div
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border/60 bg-white hover:border-secondary/40 hover:shadow-sm transition-all duration-200 group"
                >
                  <tech.icon
                    size={22}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                  <p className="text-xs font-medium text-muted-foreground text-center group-hover:text-foreground transition-colors">
                    {tech.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HR Services ─── */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-12">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--accent)))" }}
              >
                <Users size={24} className="text-white" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-1"
                  style={{
                    background: "hsl(var(--secondary)/0.12)",
                    color: "hsl(var(--secondary))",
                  }}
                >
                  HR Solutions
                </span>
                <h2 className="section-title mb-0 mt-1">Recruitment Services</h2>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-7">
            {hrServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <div className="service-card h-full group overflow-hidden p-0" style={{ borderColor: "hsl(var(--secondary)/0.15)" }}>
                  <div className="relative h-44 overflow-hidden rounded-t-2xl">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, hsl(var(--secondary)/0.65) 100%)" }} />
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <service.icon size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <div className="space-y-1.5 mb-4">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-secondary flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{feat}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="text-secondary text-xs font-semibold flex items-center gap-1 hover:gap-2 hover:text-accent transition-all"
                    >
                      Learn More <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process Section ─── */}
      <section className="py-20" style={{ background: "hsl(var(--section-bg))" }}>
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="green-badge">How We Work</span>
              <h2 className="section-title text-center">Our Engagement Process</h2>
              <p className="section-subtitle text-center">
                A proven methodology that ensures transparency, quality, and measurable outcomes.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", icon: Search, title: "Discovery", desc: "We deep-dive into your business goals, challenges, and requirements to craft the perfect strategy." },
              { step: "02", icon: Briefcase, title: "Planning", desc: "A detailed roadmap is created with milestones, deliverables, and clear timelines." },
              { step: "03", icon: Code2, title: "Execution", desc: "Our expert team brings the plan to life with precision, using agile delivery frameworks." },
              { step: "04", icon: BarChart3, title: "Review & Optimize", desc: "We measure results, gather feedback, and continuously refine to maximize impact." },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 100}>
                <div className="relative text-center">
                  {i < 3 && (
                    <div
                      className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px"
                      style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.3), transparent)" }}
                    />
                  )}
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg shadow-md"
                    style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-light)))" }}
                  >
                    {item.step}
                  </div>
                  <h4 className="font-bold text-foreground text-base mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <AnimatedSection>
          <div className="container max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-white font-bold text-3xl md:text-4xl mb-5">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Tell us about your project or hiring needs and we'll get back to
              you within 24 hours.
            </p>
            <Link to="/contact" className="btn-hero">
              Request a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Services;
