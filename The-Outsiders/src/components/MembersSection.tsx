import { Github, Linkedin } from "lucide-react";

const MembersSection = () => {
  const members = [
    {
      name: "Joshua Thadi",
      role: "Founder & CEO",
      image: "user_icon.jpg",
      bio: "Visionary leader with 3+ years in tech",
      github: "https://github.com/joshuathadi",
      linkedin: "https://linkedin.com/in/joshuathadi",
    },
    {
      name: "Daniel Arulraj",
      role: "Founder & CTO",
      image: "hallowknight.png",
      bio: "Unreal engine developer, AI specialist",
      github: "https://github.com/CANVEXTER",
      linkedin: "https://linkedin.com/in/danielarulraj",
    },
    {
      name: "Aman Mishra",
      role: "Finance Manager",
      image: "th.png",
      bio: "Award-winning Finance specialist",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/in/",
    },
    {
      name: "Shubham Sharma",
      role: "Head of Engineering",
      image: "7.png",
      bio: "Open source advocate, Python enthusiast",
      github: "https://github.com/shubhamrsharma28",
      linkedin: "https://www.linkedin.com/in/shubham-sharma-969771297/",
    },
    {
      name: "Om Singh",
      role: "DevOps Lead",
      image: "os.jpeg",
      bio: "Cloud infrastructure and Backend Developer",
      github: "https://github.com/om",
      linkedin: "https://linkedin.com/in/om",
    },
    {
      name: "Piyush Shinde",
      role: "Product Manager",
      image: "py.png",
      bio: "User-centric product strategist",
      github: "https://github.com/piyush",
      linkedin: "https://linkedin.com/in/piyush",
    },
  ];

  return (
    <section id="members" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold">
            Meet The Outsiders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds behind our mission. Each member brings unique expertise and passion.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <div
              key={member.name}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="relative mb-4 flex justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover bg-secondary group-hover:scale-110 transition-transform"
                />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-accent text-sm font-medium">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Github size={18} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
