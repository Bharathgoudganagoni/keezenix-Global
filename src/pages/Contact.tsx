import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Linkedin, Facebook, Instagram } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "srikanth@keezenix.com",
    sub: "We reply within 24 hours",
    href: "mailto:srikanth@keezenix.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 97043 994488",
    sub: "Mon–Fri, 9am – 6pm EST",
    href: "tel:+9197043994488",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "United States",
    sub: "Serving clients globally",
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon – Fri",
    sub: "9:00 AM – 6:00 PM EST",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

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
            <span className="green-badge">Reach Out</span>
            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or a hiring challenge? Let's talk. Our team
              is ready to help you find the right solution.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ─── Contact Info Cards ─── */}
      <section className="py-14" style={{ background: "hsl(var(--section-bg))" }}>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => (
              <AnimatedSection key={info.title} delay={i * 80}>
                <a
                  href={info.href}
                  className="service-card flex flex-col items-center text-center p-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1))" }}
                  >
                    <info.icon size={20} className="text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    {info.title}
                  </p>
                  <p className="font-semibold text-foreground text-sm mb-1">{info.value}</p>
                  <p className="text-xs text-muted-foreground">{info.sub}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Form + Map ─── */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Form */}
            <AnimatedSection direction="left">
              <span className="green-badge">Send a Message</span>
              <h2 className="section-title">Let's Start a Conversation</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Fill out the form and a member of our team will get back to you
                within one business day.
              </p>

              {submitted ? (
                <div
                  className="rounded-2xl p-10 flex flex-col items-center text-center border border-secondary/20"
                  style={{ background: "linear-gradient(135deg, hsl(var(--secondary)/0.06), hsl(var(--accent)/0.06))" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ background: "hsl(var(--secondary)/0.15)" }}
                  >
                    <CheckCircle2 size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-foreground font-bold text-xl mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Thank you for reaching out. Our team will review your inquiry
                    and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "", service: "", message: "" });
                    }}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                        style={{ "--tw-ring-color": "hsl(var(--primary)/0.3)" } as React.CSSProperties}
                        onFocus={(e) => (e.target.style.borderColor = "hsl(var(--primary)/0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "")}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm placeholder-muted-foreground focus:outline-none transition-all"
                        onFocus={(e) => (e.target.style.borderColor = "hsl(var(--primary)/0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "")}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm placeholder-muted-foreground focus:outline-none transition-all"
                        onFocus={(e) => (e.target.style.borderColor = "hsl(var(--primary)/0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "")}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm focus:outline-none transition-all appearance-none"
                        onFocus={(e) => (e.target.style.borderColor = "hsl(var(--primary)/0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "")}
                      >
                        <option value="">Select a Service</option>
                        <option>Web Development</option>
                        <option>App Development</option>
                        <option>Digital Marketing</option>
                        <option>Talent Acquisition</option>
                        <option>Staffing Solutions</option>
                        <option>Recruitment Support</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm placeholder-muted-foreground focus:outline-none transition-all"
                      onFocus={(e) => (e.target.style.borderColor = "hsl(var(--primary)/0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "")}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Please describe your project, requirements, or any questions you have..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm placeholder-muted-foreground focus:outline-none transition-all resize-none"
                      onFocus={(e) => (e.target.style.borderColor = "hsl(var(--primary)/0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-3.5 rounded-xl"
                    style={{ opacity: loading ? 0.8 : 1 }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Map + Info */}
            <AnimatedSection direction="right">
              <span className="green-badge">Find Us</span>
              <h2 className="section-title">Our Location</h2>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-border/60 shadow-sm mb-6 h-72">
  <iframe
    src="https://www.google.com/maps?q=18.1797859,78.7769592&hl=en&z=17&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Keezenix Office Location"
  />
</div>

              {/* Quick Info */}
              <div
                className="rounded-2xl p-6 border border-border/40"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)/0.04), hsl(var(--secondary)/0.06))",
                }}
              >
                <h4 className="font-bold text-foreground text-sm mb-4 uppercase tracking-wide">
                  Connect With Us
                </h4>
                <div className="space-y-3 mb-6">
                  <a
                    href="mailto:info@keezenix.com"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={15} className="text-primary flex-shrink-0" />
                    srikanth@keezenix.com
                  </a>
                  <a
                    href="tel:+9197043994488"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone size={15} className="text-primary flex-shrink-0" />
                    +91 97043 994488
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin size={15} className="text-primary flex-shrink-0" />
                    United States
                  </div>
                </div>

                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Facebook, label: "Facebook" },
                    { icon: Instagram, label: "Instagram" },
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 border border-border hover:border-primary hover:text-primary text-muted-foreground"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
