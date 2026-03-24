import { Link } from "react-router-dom";
import {
  Target, Eye, Users, Globe, Lightbulb, Shield, Award,
  ArrowRight, CheckCircle2, Zap, Heart, TrendingUp
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import aboutOfficeImg from "@/assets/about-office.jpg";
import teamImg from "@/assets/team.jpg";
import techBgImg from "@/assets/tech-bg.jpg";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We continuously push boundaries, embracing the latest technologies to deliver forward-thinking solutions.",
  },
  {
    icon: Heart,
    title: "Integrity",
    desc: "Honesty and transparency form the foundation of every client relationship we build.",
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    desc: "We hold ourselves to the highest standards in both our technical work and our talent solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We work as an extension of your team, aligning our goals with yours to achieve shared success.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    desc: "With a global network, we bring world-class expertise to every project we undertake.",
  },
  {
    icon: Shield,
    title: "Reliability",
    desc: "Our clients count on us to deliver — every time. We honor our commitments without compromise.",
  },
];

const team = [
  { name: "Michael Chen", role: "CEO & Founder", initial: "M" },
  { name: "Priya Sharma", role: "CTO", initial: "P" },
  { name: "James Okafor", role: "Head of Recruitment", initial: "J" },
  { name: "Sofia Rodriguez", role: "Director of Operations", initial: "S" },
];

const About = () => {
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
            <span className="green-badge">About Us</span>
            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Who We Are
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              A passionate team of technologists and talent experts committed to
              driving business transformation through innovation and strategic hiring.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── Company Intro ─── */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <span className="green-badge">Our Story</span>
              <h2 className="section-title">
                Redefining What's Possible in IT & Talent
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Keezenix Global was founded with a singular vision: to bridge the
                gap between businesses and the technology and talent they need to
                thrive. We recognized that too many companies were struggling to
                navigate a rapidly changing digital landscape without the right
                partners by their side.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Today, we serve clients across industries — from startups to
                enterprise-level organizations — delivering bespoke IT solutions
                and recruitment services that create measurable impact.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of engineers, designers, marketers, and HR specialists
                bring together decades of combined experience to ensure every
                engagement is a success story.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Founded", value: "2013" },
                  { label: "Clients Served", value: "200+" },
                  { label: "Team Members", value: "50+" },
                  { label: "Countries", value: "10+" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl border border-border/60"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--primary)/0.04), hsl(var(--secondary)/0.04))",
                    }}
                  >
                    <p className="text-primary font-bold text-2xl gradient-text-primary">
                      {item.value}
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                {/* Office image */}
                <div className="rounded-3xl overflow-hidden border border-border/40 shadow-xl mb-5">
                  <img
                    src={aboutOfficeImg}
                    alt="Keezenix office"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div
                  className="rounded-3xl p-6 border border-border/40"
                  style={{
                    background: "linear-gradient(145deg, hsl(var(--primary)/0.05), hsl(var(--secondary)/0.08))",
                  }}
                >
                  <h3 className="text-foreground font-bold text-lg mb-5">What Sets Us Apart</h3>
                  <div className="space-y-3">
                    {[
                      "Deep domain expertise in IT and HR",
                      "Tailored solutions, not cookie-cutter approaches",
                      "Agile delivery with transparent communication",
                      "A vetted network of over 50,000 professionals",
                      "Post-engagement support and partnership",
                      "Commitment to diversity and inclusion in hiring",
                    ].map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-secondary flex-shrink-0 mt-0.5"
                        />
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="py-20" style={{ background: "hsl(var(--section-bg))" }}>
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="green-badge">Our Direction</span>
              <h2 className="section-title text-center">Mission & Vision</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={100}>
              <div
                className="rounded-2xl p-8 h-full border border-primary/20 relative overflow-hidden"
                style={{ background: "var(--hero-gradient)" }}
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
                  style={{ background: "hsl(var(--secondary))" }}
                />
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                  <Target size={26} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">Our Mission</h3>
                <p className="text-white/75 leading-relaxed text-sm">
                  To empower organizations with transformative IT solutions and
                  precision-matched talent, enabling them to operate more
                  efficiently, compete more effectively, and grow more sustainably
                  in an ever-evolving digital world.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div
                className="rounded-2xl p-8 h-full border border-secondary/20 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, hsl(var(--secondary)/0.08), hsl(var(--accent)/0.08))" }}
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
                  style={{ background: "hsl(var(--primary))" }}
                />
                <div className="w-14 h-14 rounded-2xl bg-secondary/15 flex items-center justify-center mb-5">
                  <Eye size={26} className="text-secondary" />
                </div>
                <h3 className="text-primary font-bold text-xl mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  To be the most trusted global partner for IT innovation and
                  talent excellence — a company where businesses come to solve
                  their toughest challenges and where professionals find
                  opportunities that truly match their potential.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── Core Values ─── */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="green-badge">Our Principles</span>
              <h2 className="section-title text-center">Core Values</h2>
              <p className="section-subtitle text-center">
                The beliefs that guide every decision we make and every solution we deliver.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 80}>
                <div className="service-card h-full group">
                  <div className="icon-wrap">
                    <value.icon
                      size={22}
                      className="text-primary group-hover:text-secondary transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-foreground font-bold text-base mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Leadership Team ─── */}
      <section className="py-20" style={{ background: "hsl(var(--section-bg))" }}>
        <div className="container max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="green-badge">Our People</span>
              <h2 className="section-title text-center">Leadership Team</h2>
              <p className="section-subtitle text-center">
                Visionary leaders with the expertise to guide clients toward their goals.
              </p>
            </div>
          </AnimatedSection>

          {/* Team group photo */}
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden border border-border/40 shadow-xl mb-12 max-w-3xl mx-auto">
              <img
                src={teamImg}
                alt="Keezenix leadership team"
                className="w-full h-72 object-cover object-top"
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 100}>
                <div className="text-center group">
                  <div
                    className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, hsl(var(--primary)), hsl(${231 + i * 20}, 68%, 50%))`,
                    }}
                  >
                    {member.initial}
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{member.name}</h4>
                  <p className="text-muted-foreground text-xs mt-1">{member.role}</p>
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
        {/* tech bg image */}
        <div className="absolute inset-0 z-0">
          <img src={techBgImg} alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <AnimatedSection>
          <div className="container max-w-7xl mx-auto px-4 text-center relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Award size={40} className="text-secondary" />
            </div>
            <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
              Join hundreds of businesses that trust Keezenix to power their
              technology and talent strategy.
            </p>
            <Link to="/contact" className="btn-hero">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default About;
