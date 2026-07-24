"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, MessageCircle, Briefcase, Camera, GitBranch, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#02040a] pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <Image src="/logo.png" alt="TeamLite Soft Solutions" width={48} height={48} className="object-contain hover:scale-105 transition-transform" />
              <span className="text-2xl font-bold tracking-tight text-white">TeamLite</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-8">
              Engineering Intelligent Software for the Future. We empower businesses through AI-driven automation, secure cloud infrastructure, and scalable digital transformation.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink icon={<Briefcase size={18} />} />
              <SocialLink icon={<MessageCircle size={18} />} />
              <SocialLink icon={<GitBranch size={18} />} />
              <SocialLink icon={<Camera size={18} />} />
              <SocialLink icon={<Globe size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/portfolio">Portfolio</FooterLink>
              <FooterLink href="/blog">Blog & News</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <FooterLink href="/services/software">Enterprise Software</FooterLink>
              <FooterLink href="/services/ai">Artificial Intelligence</FooterLink>
              <FooterLink href="/services/cybersecurity">Cybersecurity</FooterLink>
              <FooterLink href="/services/cloud">Cloud Engineering</FooterLink>
              <FooterLink href="/services/mobile">Mobile Development</FooterLink>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Global HQ: Vadodara, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary shrink-0" />
                <span>enterprise@teamlite.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Newsletter */}
        <div className="border-t border-b border-white/10 py-12 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Subscribe to our newsletter</h4>
            <p className="text-sm text-muted-foreground">Get the latest insights on AI, Enterprise Software, and Tech trends.</p>
          </div>
          <form className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Enter your enterprise email" 
              className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-white focus:outline-none focus:border-primary w-full md:w-72"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors shrink-0">
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TeamLite Soft Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all border border-white/10">
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
        {children}
      </Link>
    </li>
  );
}
