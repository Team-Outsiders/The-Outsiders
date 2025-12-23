import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import ProjectSection from "@/components/ProjectSection";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Changelog", "Roadmap"],
    Resources: ["Documentation", "Blog", "Community", "Support"],
    Company: ["About", "Careers", "Press", "Contact"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <ProjectSection />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Logo Section - Large */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              {/* <div className="w-16 h-16 rounded-full bg-primary-foreground text-primary flex items-center justify-center text-3xl font-bold">
                O
              </div> */}
              <img src="pot.png" className="w-40" />
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              The<br />Outsiders
            </h2>
            </div>

              <p className="text-primary-foreground/70 max-w-sm mb-8">
              Building the future, one line of code at a time. Join us on our journey to redefine what's possible.
            </p>

            
            {/* Social Links */}
            {/* <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div> */}
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group"
                      >
                        {link}
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

            

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2025 The Outsiders. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
