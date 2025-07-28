import { useEffect, useRef } from 'react'

interface ContactInfo {
  icon: string
  title: string
  details: string
}

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const contactInfo: ContactInfo[] = [
    {
      icon: '📧',
      title: 'Email',
      details: 'ogundekoabdulateef@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      details: '+234 706 133 9954'
    },
    {
      icon: '📍',
      title: 'Location',
      details: 'Oshodi Isolo, Lagos State, Nigeria'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.contact-item')
    elements?.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${index * 0.1}s`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen py-24 flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let&apos;s Collaborate
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Ready to transform your complex challenges into elegant solutions? 
            Let&apos;s discuss how mathematical precision can elevate your next project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="contact-item bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/10 cursor-pointer opacity-0 translate-y-12"
            >
              <div className="text-4xl mb-4 text-cyan-400">
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {info.title}
              </h3>
              <p className="text-white/80 break-words">
                {info.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactSection