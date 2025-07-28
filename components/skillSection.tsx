// components/SkillsSection.tsx
"use client";
import { BarChart4, Zap, Monitor, Wrench, TrendingUp, Target } from "lucide-react";
import { useEffect, useRef } from "react";

import { ReactNode } from "react";

interface Skill {
  icon: ReactNode;
  title: string;
  description: string;
}

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    {
      icon: (
        <BarChart4 className="w-7 h-7 text-indigo-500 hover:scale-110 transition-all" />
      ),
      title: "Mathematical Analysis",
      description:
        "Statistical modeling, regression analysis, ANOVA, hypothesis testing, forecasting, and advanced probability theory",
    },
    {
      icon: <Zap className="w-7 h-7 text-yellow-400 animate-pulse" />,
      title: "Optimization",
      description:
        "Linear programming, operations research, decision science, and mathematical modeling for real-world problems",
    },
    {
      icon: <Monitor className="w-7 h-7 text-cyan-500" />,
      title: "Frontend Development",
      description:
        "React.js, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS with focus on responsive design and user experience",
    },
    {
      icon: <Wrench className="w-6 h-6 text-gray-400" />,
      title: "Development Tools",
      description:
        "Git, GitHub, Vercel, Visual Studio Code, and modern development workflows",
    },
    {
      icon: <Target className="w-7 h-7 text-purple-500" /> ,
      title: "Problem Solving",
      description:
        "Critical thinking, analytical reasoning, data interpretation, and transforming complex challenges into actionable solutions",
    },
    {
      icon:  <TrendingUp className="w-7 h-7 text-green-500" />,
      title: "Research & Analysis",
      description:
        "Research design, data collection, quantitative analysis, and comprehensive reporting with attention to detail",
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

    const elements = sectionRef.current?.querySelectorAll(".skill-card");
    elements?.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${index * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-24 flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A comprehensive toolkit for mathematical and technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/10 group opacity-0 translate-y-12"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 flex items-center justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
