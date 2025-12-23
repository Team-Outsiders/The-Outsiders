import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16">
      {/* Floating Mascot */}
       <div className="mb-8">
        <div className="relative">
          <img src="among.png" className="w-40"/>
          {/*<svg
            viewBox="0 0 200 200"
            className="w-48 h-48 md:w-64 md:h-64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          > */}
            {/* Cloud body */}
            {/* <ellipse cx="100" cy="140" rx="70" ry="40" stroke="currentColor" strokeWidth="3" fill="none" />
            <ellipse cx="70" cy="120" rx="35" ry="25" stroke="currentColor" strokeWidth="3" fill="none" />
            <ellipse cx="130" cy="115" rx="40" ry="30" stroke="currentColor" strokeWidth="3" fill="none" />
            <ellipse cx="100" cy="95" rx="45" ry="35" stroke="currentColor" strokeWidth="3" fill="none" />
             */}
            {/* Character head */}
            {/* <circle cx="100" cy="65" r="35" stroke="currentColor" strokeWidth="3" fill="none" /> */}
            
            {/* Ears */}
            {/* <ellipse cx="72" cy="42" rx="12" ry="18" stroke="currentColor" strokeWidth="3" fill="none" />
            <ellipse cx="128" cy="42" rx="12" ry="18" stroke="currentColor" strokeWidth="3" fill="none" /> */}
            
            {/* VR Headset */}
            {/* <rect x="70" y="55" width="60" height="25" rx="5" stroke="currentColor" strokeWidth="3" fill="none" />
            <line x1="65" y1="67" x2="70" y2="67" stroke="currentColor" strokeWidth="3" />
            <line x1="130" y1="67" x2="135" y2="67" stroke="currentColor" strokeWidth="3" />
             */}
            {/* Headset strap */}
            {/* <path d="M 70 60 Q 55 50 65 35" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M 130 60 Q 145 50 135 35" stroke="currentColor" strokeWidth="2" fill="none" /> */}
            
            {/* Waving arm */}
            {/* <path d="M 145 110 Q 160 90 175 75" stroke="currentColor" strokeWidth="3" fill="none" />
            <circle cx="175" cy="72" r="6" stroke="currentColor" strokeWidth="2" fill="none" /> */}
          {/* </svg>*/}
        </div>
      </div> 

      {/* Badge */}
      <div className="opacity-0 animate-fade-in-up animation-delay-100">
        <a
          href="#about"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="text-accent font-medium">New</span>
          <span>We're building the future</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Headline */}
      <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold text-center max-w-4xl leading-tight opacity-0 animate-fade-in-up animation-delay-200">
        Think different.
        <br />
        <span className="text-muted-foreground">Build different.</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg md:text-xl text-muted-foreground text-center max-w-2xl opacity-0 animate-fade-in-up animation-delay-300">
        We are a collective of developers, designers, and dreamers pushing the boundaries of what's possible.
      </p>

      {/* CTA */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-fade-in-up animation-delay-400">
        <Button variant="hero" size="lg">
          Get Started
        </Button>
        <p className="text-sm text-muted-foreground">
          Join 6+ members worldwide
        </p>
      </div>
    </section>
  );
};

export default Hero;
