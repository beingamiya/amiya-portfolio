import React, { useState, useEffect, useRef } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    coffee: 0
  })
  const sectionRef = useRef(null)

  const stats = [
    { key: 'projects', target: 3, suffix: '+', label: 'Projects Completed', icon: '🚀', color: 'from-blue-500 to-cyan-500' },
    { key: 'experience', target: 1, suffix: '+', label: 'Years Experience', icon: '💼', color: 'from-purple-500 to-pink-500' },
    { key: 'coffee', target: 1000, suffix: '+', label: 'Cups of Coffee', icon: '☕', color: 'from-orange-500 to-red-500' }
  ]

  const animateCounter = (key, target) => {
    let current = 0
    const increment = Math.max(1, target / 50)
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
    }, 30)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Start counters only when section becomes visible
  useEffect(() => {
    if (!isVisible) return

    stats.forEach((stat, index) => {
      setTimeout(() => {
        animateCounter(stat.key, stat.target)
      }, index * 200)
    })
  }, [isVisible])

  const services = [
    {
      icon: '🧪',
      title: 'Windows Continuous Delivery and Automation',
      description: 'Azure, Manual Testing, Scripting',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Java, Node.js, APIs',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🎨',
      title: 'Frontend Development',
      description: 'HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            👋 About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get to Know <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me Better</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           A passionate developer and test engineer at Wipro, shaping digital experiences that matter.
          </p>
        </div>
        
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Story and Stats (make full height to match right) */}
          <div className="space-y-8 lg:h-full flex flex-col">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 flex-1 flex flex-col justify-between">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-4xl mr-3">🌟</span>
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With 1+ years of experience in both development and testing of web applications that address real-world challenges, 
                  I love building impactful solutions and enjoy working with modern technologies.
                </p>
                <p>
                  When I'm not coding, you can find me <span className="font-semibold text-purple-600">exploring new technologies</span>, contributing 
                  to open source projects, or sharing knowledge with the developer community.
                </p>
                <p>
                  I believe in <span className="font-semibold text-green-600">clean code</span>, <span className="font-semibold text-pink-600">user-centered design</span>, and 
                  continuous learning to stay ahead in this ever-evolving field.
                </p>
              </div>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.key}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 text-center group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {counters[stat.key]}{stat.suffix}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Services (make full height to match left) */}
          <div className="space-y-6 lg:h-full flex flex-col justify-start">
            <div className="text-center lg:text-left mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">What I Do</h4>
            </div>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`group relative bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1`}
                  style={{ transitionDelay: `${(index + 4) * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                        {service.title}
                      </h5>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay (parent is relative now) */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="mt-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl text-white text-center">
                <h5 className="text-xl font-bold mb-2">Ready to work together?</h5>
                <p className="text-blue-100 mb-4">Let's create something amazing together!</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Get In Touch</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
