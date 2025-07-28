// components/AboutSection.tsx
import { Target, Laptop, Rocket  } from "lucide-react";
import { useEffect, useRef } from 'react'

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-24 flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent reveal">
            About Me
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto reveal">
            Where mathematical rigor meets technological innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Mathematical Mind, Digital Solutions</h3>
            <div className="space-y-6 text-white/90 leading-relaxed">
              <p>
                I&apos;m a Mathematics graduate with a passion for solving complex problems through analytical thinking and modern technology. 
                My journey combines rigorous mathematical training from Tai Solarin University with cutting-edge frontend development skills.
              </p>
              <p>
                My expertise spans statistical modeling, optimization techniques, and linear programming, which I&apos;ve applied to real-world 
                challenges like fish farming optimization. I bring this analytical mindset to web development, creating responsive, 
                user-focused applications with React, Next.js, and modern CSS frameworks.
              </p>
              <p>
                Whether it&apos;s building educational platforms, e-commerce solutions, or tackling optimization problems, I&apos;m driven by 
                the desire to create meaningful impact through data-driven insights and elegant code.
              </p>
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Current Focus:</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex gap-2"><Target className="w-7 h-7 text-purple-500" /> Mathematical Science</p>
                <p className="flex gap-2"><Laptop  className="w-7 h-7 text-cyan-400 animate-pulse" /> Front-End Development</p>
                {/* <p>📊 Data Analysis & Optimization</p> */}
                <p className="flex gap-2"><Rocket className="w-7 h-7 text-red-400 hover:scale-110 transition-all" /> Continuous Learning & Innovation</p>
              </div>
            </div>

            {/* <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '15+', label: 'Projects Completed' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '∞', label: 'Learning Journey' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          <div className="reveal relative">
            <div className="relative h-96 flex items-center justify-center">
              {/* Tech Orbit Animation */}
              <div className="absolute w-72 h-72 border-2 border-cyan-400/20 rounded-full animate-spin-slow">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-900 border-2 border-cyan-400 rounded-full flex items-center justify-center font-semibold text-cyan-400 animate-counter-spin">
                  JS
                </div>
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gray-900 border-2 border-purple-500 rounded-full flex items-center justify-center font-semibold text-purple-400 animate-counter-spin">
                  React
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-900 border-2 border-yellow-400 rounded-full flex items-center justify-center font-semibold text-yellow-400 animate-counter-spin">
                  Next
                </div>
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gray-900 border-2 border-pink-500 rounded-full flex items-center justify-center font-semibold text-pink-400 animate-counter-spin">
                  Math
                </div>
              </div>

              {/* Floating Math Formulas */}
              {/* <div className="absolute top-1/10 left-1/10 bg-cyan-400/10 border border-cyan-400/30 rounded-xl p-4 backdrop-blur animate-float">
                <div className="font-bold text-cyan-400">∫f(x)dx</div>
                <div className="text-sm text-white/70">Calculus & Analysis</div>
              </div>
              <div className="absolute top-1/2 right-1/10 bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 backdrop-blur animate-float" style={{ animationDelay: '1s' }}>
                <div className="font-bold text-purple-400">max Z = Σc<sub>i</sub>x<sub>i</sub></div>
                <div className="text-sm text-white/70">Linear Programming</div>
              </div>
              <div className="absolute bottom-1/10 left-1/5 bg-pink-500/10 border border-pink-500/30 rounded-xl p-4 backdrop-blur animate-float" style={{ animationDelay: '2s' }}>
                <div className="font-bold text-pink-400">P(A|B) = P(B|A)P(A)/P(B)</div>
                <div className="text-sm text-white/70">Probability & Statistics</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection