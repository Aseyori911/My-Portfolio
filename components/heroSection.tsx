import { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Mathematics Graduate & Frontend Developer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const target = document.querySelector("#projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen py-22 flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="floating-element absolute top-1/4 left-1/10 w-15 h-15 border-2 border-cyan-400 rounded-xl opacity-30 animate-float"
          style={{ animationDelay: "0s", transform: "rotate(45deg)" }}
        />
        <div
          className="floating-element absolute top-3/5 right-3/20 w-15 h-15 border-2 border-purple-500 rounded-full opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="floating-element absolute top-2/5 left-4/5 w-10 h-10 border-2 border-cyan-300 rounded-xl opacity-30 animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 flex-wrap">
          <div className="flex-1 min-w-80 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent animate-gradient-shift">
                ABDULATEEF
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent animate-gradient-shift">
                OGUNDEKO
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-white/90 animate-fade-in-up">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
            <p
              className="text-lg mb-10 text-white/80 max-w-2xl animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              A frontend developer who codes with mathematical rigor - crafting optimized Next.js interfaces where every component solves real user needs.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Explore My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-white hover:scale-105 transition-all duration-300"
              >
                Let&apos;s Connect
              </button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center min-w-60 px-4">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="https://images.unsplash.com/photo-1753109910060-ba1fa8fbd094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                alt="Abdulateef Ogundeko"
                fill
                className="rounded-full object-cover border-4 border-cyan-400/30 shadow-2xl shadow-cyan-400/20 hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
