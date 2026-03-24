import { Link } from "react-router-dom";
import {
  Code2, Smartphone, TrendingUp, Users, CheckCircle2,
  ArrowRight, Zap, Shield, Globe, HeadphonesIcon, Star,
  ChevronRight, Briefcase, Award, Clock
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";
import webDevImg from "@/assets/web-dev.jpg";
import appDevImg from "@/assets/app-dev.jpg";
import digitalMarketingImg from "@/assets/digital-marketing.jpg";
import recruitmentImg from "@/assets/recruitment.jpg";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Custom, scalable web solutions built with modern technologies to drive your digital presence.",
    color: "from-blue-500/10 to-blue-600/10",
    iconColor: "text-primary",
    img: webDevImg,
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile applications designed for performance and user engagement.",
    color: "from-green-500/10 to-teal-500/10",
    iconColor: "text-secondary",
    img: appDevImg,
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies that amplify your brand and convert leads into loyal customers.",
    color: "from-cyan-500/10 to-blue-500/10",
    iconColor: "text-accent",
    img: digitalMarketingImg,
  },
  {
    icon: Users,
    title: "Recruitment Services",
    desc: "End-to-end talent acquisition connecting top-tier professionals with forward-thinking organizations.",
    color: "from-primary/10 to-secondary/10",
    iconColor: "text-primary",
    img: recruitmentImg,
  },
];

const features = [
  {
    icon: Award,
    title: "Experienced Team",
    desc: "Seasoned professionals with deep expertise across IT and HR domains.",
  },
  {
    icon: HeadphonesIcon,
    title: "Client-Centric Approach",
    desc: "Every solution is tailored to your unique business goals and challenges.",
  },
  {
    icon: Globe,
    title: "Scalable Solutions",
    desc: "Future-proof technology and talent frameworks that grow with your business.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    desc: "Agile workflows and dedicated teams ensure on-time, high-quality delivery.",
  },
];

const stats = [
  { value: "200+", label: "Clients Served" },
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+", label: "Years of Excellence" },
];

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* ─── Hero Section ─── */}
      <section className="hero-section flex items-center justify-center relative overflow-hidden pt-28 pb-20">
        {/* Hero background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Keezenix team working"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, hsl(231, 68%, 18% / 0.93) 0%, hsl(231, 68%, 33% / 0.88) 50%, hsl(231, 55%, 42% / 0.82) 100%)" }}
          />
        </div>
        {/* Decorative circles */}
        <div
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full opacity-10 z-10"
          style={{ background: "hsl(var(--secondary))" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10 z-10"
          style={{ background: "hsl(var(--accent))" }}
        />

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left content */}
            <div>
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2 bg-secondary/20 text-secondary border border-secondary/30 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <Zap size={12} />
                  IT & Recruitment Solutions
                </span>
              </div>
              <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight animate-fade-up-delay-1">
                Empowering{" "}
                <span className="gradient-text">Digital</span>{" "}
                Transformation
              </h1>
              <p className="text-white/70 text-lg mt-6 leading-relaxed animate-fade-up-delay-2 max-w-lg">
                Innovative IT & Recruitment Solutions for Modern Businesses.
                We bridge the gap between technology and talent to accelerate
                your growth.
              </p>
              <div className="flex flex-wrap gap-4 mt-9 animate-fade-up-delay-3">
                <Link to="/contact" className="btn-hero">
                  Get in Touch <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn-outline-white">
                  Explore Services
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 mt-10 animate-fade-up-delay-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white/30 flex items-center justify-center text-white font-bold text-xs"
                      style={{
                        background: `hsl(${231 + i * 10}, 68%, ${35 + i * 5}%)`,
                      }}
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/60 text-xs">Trusted by 200+ businesses</p>
                </div>
              </div>
            </div>

            {/* Right: floating cards */}
            <div className="relative hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-sm">
                {/* Main card */}
                <div
                  className="animate-float bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <Briefcase size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Total Projects</p>
                      <p className="text-white/50 text-xs">All time</p>
                    </div>
                  </div>
                  <p className="text-white font-bold text-4xl mb-1">500+</p>
                  <p className="text-secondary text-sm flex items-center gap-1">
                    <Zap size={12} /> Projects delivered successfully
                  </p>
                </div>

                {/* Sub card 1 */}
                <div className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl">
                  <p className="text-white/60 text-xs mb-1">Satisfaction Rate</p>
                  <p className="text-white font-bold text-xl">98%</p>
                  <div className="flex gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Sub card 2 */}
                <div className="absolute -bottom-6 -left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-secondary" />
                    <div>
                      <p className="text-white font-semibold text-sm">Expert Team</p>
                      <p className="text-white/50 text-xs">Ready to deliver</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={stat.label}>
                <AnimatedSection delay={i * 100}>
                  <div className="text-center bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl py-5 px-4">
                    <p className="text-white font-bold text-3xl gradient-text">{stat.value}</p>
                    <p className="text-white/60 text-xs mt-1 tracking-wide">{stat.label}</p>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Preview ─── */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl -rotate-3"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)/0.08), hsl(var(--secondary)/0.08))",
                  }}
                />
                {/* About preview image */}
                <div className="relative rounded-3xl overflow-hidden border border-border/40 shadow-xl">
                  <img
                    src={recruitmentImg}
                    alt="Keezenix IT solutions"
                    className="w-full h-64 object-cover"
                  />
                  <div className="grid grid-cols-2 gap-0 bg-white">
                    {[
                      { icon: Code2, label: "IT Solutions", color: "bg-primary/10 text-primary" },
                      { icon: Users, label: "Recruitment", color: "bg-secondary/10 text-secondary" },
                      { icon: Globe, label: "Global Reach", color: "bg-accent/10 text-accent" },
                      { icon: Shield, label: "Trusted Partner", color: "bg-primary/10 text-primary" },
                    ].map(({ icon: Icon, label, color }) => (
                      <div
                        key={label}
                        className="flex flex-col items-center justify-center gap-2 p-5 border border-border/30 hover:bg-muted/50 transition-colors"
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
                          <Icon size={18} />
                        </div>
                        <p className="text-xs font-semibold text-foreground text-center">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="green-badge">About Keezenix</span>
              <h2 className="section-title">
                Your Trusted Partner in Technology & Talent
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Keezenix Global is a leading IT solutions and recruitment firm
                dedicated to transforming businesses through technology innovation
                and strategic talent management. We believe a robust IT strategy
                paired with the right people can unlock limitless growth.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From building high-performance web applications to placing
                top-tier professionals in key roles, we deliver end-to-end
                solutions that create lasting impact for our clients worldwide.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Innovation-First", "Proven Track Record", "Global Expertise", "Client-Focused"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-secondary/30 text-secondary bg-secondary/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link to="/about" className="btn-primary">
                Learn More About Us <ArrowRight size={15} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Services Section ─── */}
      <section className="py-20" style={{ background: "hsl(var(--section-bg))" }}>
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="green-badge">What We Offer</span>
              <h2 className="section-title text-center">
                Comprehensive Solutions for Your Business
              </h2>
              <p className="section-subtitle text-center">
                From cutting-edge technology to strategic talent solutions, we cover
                every aspect of your business transformation.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={service.title}>
                <AnimatedSection delay={i * 100}>
                  <div className="service-card h-full group overflow-hidden p-0">
                  {/* Service image */}
                  <div className="relative h-40 overflow-hidden rounded-t-2xl">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, transparent 40%, hsl(var(--primary)/0.7) 100%)" }}
                    />
                    <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color} backdrop-blur-sm border border-white/30`}>
                      <service.icon size={18} className={service.iconColor} />
                    </div>
                  </div>
                  {/* Card content */}
                  <div className="p-5">
                    <h3 className="text-foreground font-bold text-base mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <Link
                      to="/services"
                      className="text-secondary text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Learn More <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <span className="green-badge">Why Us</span>
              <h2 className="section-title">
                Why Companies Choose Keezenix
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                We combine technological excellence with a deep understanding of
                human capital to deliver solutions that don't just meet expectations
                — they exceed them.
              </p>
              <div className="grid gap-4">
                {features.map((feat, i) => (
                  <div key={feat.title}>
                    <AnimatedSection delay={i * 80}>
                      <div className="feature-item group">
                      <div className="feature-icon group-hover:scale-110 transition-transform duration-200">
                        <feat.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-1">
                          {feat.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                    </AnimatedSection>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div
                className="rounded-3xl p-8 border border-border/40"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)/0.04), hsl(var(--secondary)/0.06))",
                }}
              >
                <h3 className="text-foreground font-bold text-xl mb-6 text-center">
                  Our Performance Metrics
                </h3>
                <div className="space-y-5">
                  {[
                    { label: "Client Retention Rate", value: 96, color: "hsl(var(--primary))" },
                    { label: "Project Success Rate", value: 98, color: "hsl(var(--secondary))" },
                    { label: "On-Time Delivery", value: 95, color: "hsl(var(--accent))" },
                    { label: "Client Satisfaction", value: 99, color: "hsl(var(--primary))" },
                  ].map((metric) => (
                    <div key={metric.label}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {metric.label}
                        </span>
                        <span className="text-sm font-bold" style={{ color: metric.color }}>
                          {metric.value}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${metric.value}%`,
                            background: metric.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="mt-8 bg-white rounded-2xl p-5 border border-border/60 shadow-sm">
                  <div className="flex gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm italic leading-relaxed">
                    "Keezenix transformed our hiring process and delivered our
                    web platform ahead of schedule. Truly exceptional partner."
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary text-sm">
                      S
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Sarah M.</p>
                      <p className="text-xs text-muted-foreground">VP of Operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
          style={{ background: "hsl(var(--secondary))" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"
          style={{ background: "hsl(var(--accent))" }}
        />
        <AnimatedSection>
          <div className="container max-w-7xl mx-auto px-4 text-center relative z-10">
            <span className="inline-flex items-center gap-2 bg-secondary/20 text-secondary border border-secondary/30 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Zap size={12} /> Ready to Start?
            </span>
            <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-5">
              Let's Build Your Future Together
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-9 leading-relaxed">
              Whether you need a technology partner or top-tier talent, Keezenix
              is here to help you scale, innovate, and succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-hero">
                Start a Conversation <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-outline-white">
                View Our Services
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Home;
