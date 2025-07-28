import { useEffect, useRef } from "react";
import { BookOpen, ShoppingCart } from "lucide-react";
import { ReactNode } from "react";

interface Project {
  icon: ReactNode;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  status?: string;
}

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    // {
    //   icon: "🐟",
    //   title: "Fish Farming Optimization",
    //   description:
    //     "Mathematical optimization model using linear programming to maximize profit and minimize waste in fish farming operations.",
    //   technologies: [
    //     "Linear Programming",
    //     "Mathematical Modeling",
    //     "Data Analysis",
    //     "Excel",
    //   ],
    // },
    {
      icon: <BookOpen className="text-blue-500" size={150} />,
      title: "Islamic Educational Platform",
      description:
        "Fully responsive Arabic educational website with focus on accessibility and user experience.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Responsive Design",
        "Accessibility",
      ],
      link: "https://giqmis-eight.vercel.app",
    },
    {
      icon: <ShoppingCart className="text-blue-500" size={150} />,
      title: "E-Commerce Platform",
      description:
        "Scalable shopping platform with product management, search functionality, and secure authentication.",
      technologies: [
        "Next.js",
        "Sanity CMS",
        "Clerk Auth",
        "Responsive Design",
      ],
      link: "https://e-shop-9sui.vercel.app",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".project-card");
    elements?.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${index * 0.15}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-24 flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Live Projects
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Showcasing the intersection of mathematics and technology
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 hover:border-cyan-400/50 group cursor-pointer opacity-0 translate-y-12 w-full max-w-md"
            >
              <div className="h-48 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center text-6xl relative overflow-hidden">
                {project.icon}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-xs text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-cyan-400 font-semibold transition-all duration-300 hover:translate-x-2"
                  >
                    View Live Site →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
