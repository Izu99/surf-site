import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Waves, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { label: "Home", href: "/" },
      { label: "Surf Lessons", href: "/lessons" },
      { label: "About Mali", href: "/about" },
      { label: "Blog", href: "/blog" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Contact Us", href: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-slate-50 text-slate-900 overflow-hidden border-t border-slate-200">
      <div className="container-padding section-padding-sm relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img
                src={logo.src}
                alt="Hiriketiya Surf with Mali"
                className="h-16 w-auto drop-shadow-sm hover:scale-105 transition-transform duration-300 filter"
              />
            </Link>
            <p className="text-slate-600 leading-relaxed font-body">
              Experience the thrill of surfing in Sri Lanka's most beautiful bay
              with expert guidance from Mali.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-subtitle font-bold text-lg mb-6 flex items-center gap-2 text-slate-900">
              <Waves className="w-5 h-5 text-teal-600" />
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-teal-600 font-subtitle font-medium text-sm transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-subtitle font-bold text-lg mb-6 text-slate-900">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-teal-600 font-subtitle font-medium text-sm transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-subtitle font-bold text-lg mb-6 text-slate-900">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Hiriketiya+Beach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-600 hover:text-teal-600 transition-colors group"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-teal-600" />
                  <span className="text-sm font-subtitle font-medium">Hiriketiya Beach, Dikwella, Sri Lanka</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+94705583277"
                  className="flex items-center gap-3 text-slate-600 hover:text-teal-600 transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-teal-600" />
                  <span className="text-sm font-subtitle font-medium">+94 70 558 3277</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hiriketiyasurf.com"
                  className="flex items-center gap-3 text-slate-600 hover:text-teal-600 transition-colors group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-teal-600" />
                  <span className="text-sm font-subtitle font-medium">info@hiriketiyasurf.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p className="flex items-center gap-2 font-subtitle">
              © {currentYear} Hiriketiya Surf with Mali. Made with
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              in Sri Lanka
            </p>
            <p className="flex items-center gap-2 font-subtitle font-semibold text-teal-600">
              <Waves className="w-4 h-4" />
              Ride the waves, live the dream
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;