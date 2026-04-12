import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpg"; // ✅ ADD YOUR LOGO

const Footer = () => {
  return (
    <footer className="bg-primary-dark" style={{ background: "hsl(231, 68%, 14%)" }}>
      <div className="container max-w-7xl mx-auto px-4">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">

              {/* 🔥 LOGO INSTEAD OF "K" */}
              <img
                src={logo}
                alt="Keezenix Logo"
                className="w-10 h-10 object-contain rounded-lg bg-white p-1"
              />

              <div>
                <span className="text-white font-bold text-base tracking-wide block leading-none">
                  KEEZENIX
                </span>
                <span className="text-white/40 text-[9px] tracking-widest uppercase">
                  Global
                </span>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Empowering businesses with cutting-edge IT solutions and premier
              recruitment services. Your growth is our mission.
            </p>

            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/company/keezenixglobal/"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-secondary hover:text-white transition">
                <Linkedin size={15} />
              </a>
              <a 
                href="https://www.instagram.com/keezenixglobal/?utm_source=ig_web_button_share_sheet"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-secondary hover:text-white transition">
                <Instagram size={15} />
              </a>
              <a 
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-secondary hover:text-white transition">
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 text-sm hover:text-secondary transition flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "App Development",
                "Digital Marketing",
                "Talent Acquisition",
                "Staffing Solutions",
                "Recruitment Support",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white/60 text-sm hover:text-secondary transition flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Mail size={14} className="text-secondary" />
                </div>
                <div>
                  <p className="text-white/40 text-xs">Email</p>
                  <a href="mailto:info@keezenix.com" className="text-white/70 text-sm hover:text-secondary">
                    
Srikanth@Keezenix.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Phone size={14} className="text-secondary" />
                </div>
                <div>
                  <p className="text-white/40 text-xs">Phone</p>
                  <a href="tel:+9197043994488" className="text-white/70 text-sm hover:text-secondary">
                    +91 97043 99488
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <MapPin size={14} className="text-secondary" />
                </div>
                <div>
                  <p className="text-white/40 text-xs">Location</p>
                  <p className="text-white/70 text-sm">Hyderabad,Telangana </p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Keezenix Global. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a className="text-white/40 text-xs hover:text-white/70">Privacy Policy</a>
            <a className="text-white/40 text-xs hover:text-white/70">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;