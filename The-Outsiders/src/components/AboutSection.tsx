import { Zap, Users, Rocket, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and unconventional approaches to solve complex problems.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our strength lies in our diverse community of passionate individuals from around the globe.",
    },
    {
      icon: Rocket,
      title: "Launch Fast",
      description: "We believe in rapid iteration, learning from failures, and shipping products that matter.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our projects reach millions of users worldwide, making technology accessible to everyone.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            About Us
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Who are The Outsiders?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just another tech organization. We're a movement of rebels, innovators, and visionaries who refuse to accept the status quo.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-white p-8 rounded-2xl bg-black border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border
              group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Projects Shipped" },
            { value: "1K+", label: "Active Members" },
            { value: "25", label: "Countries" },
            { value: "∞", label: "Possibilities" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
