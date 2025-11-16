import React, { useState, useEffect, useRef } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState([])
  const sectionRef = useRef(null)

 const skills = [
  // Frontend
  { name: 'HTML', level: 95, color: 'from-orange-400 to-yellow-500', icon: '🌐' },
  { name: 'CSS', level: 75, color: 'from-blue-400 to-sky-500', icon: '🎨' },
  { name: 'JavaScript', level: 60, color: 'from-yellow-400 to-orange-500', icon: '🟨' },
  { name: 'Tailwind CSS', level: 55, color: 'from-sky-400 to-teal-500', icon: '🍃' },
  { name: 'Bootstrap', level: 60, color: 'from-purple-500 to-indigo-500', icon: '🚀' },

  // Backend
  { name: 'Node.js', level: 50, color: 'from-green-500 to-emerald-600', icon: '🟢' },
  { name: 'Java', level: 75, color: 'from-red-500 to-orange-600', icon: '☕' },
  { name: 'Spring Boot', level: 65, color: 'from-green-600 to-green-700', icon: '🌿' },
  { name: 'Microservices', level: 55, color: 'from-cyan-500 to-blue-600', icon: '🔗' },

  // Database
  { name: 'SQL', level: 70, color: 'from-indigo-500 to-blue-600', icon: '🧩' },
  { name: 'PostgreSQL', level: 55, color: 'from-blue-600 to-indigo-700', icon: '🐘' },

  // Automation
  { name: 'Selenium', 
  level: 40, color: 'from-green-600 to-emerald-600', icon: '🧪'  }
]


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skills with delay
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, { ...skill, animated: true }])
            }, index * 200)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            🛠️ Technical Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div ref={sectionRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const animatedSkill = animatedSkills.find(s => s.name === skill.name)
            const isAnimated = animatedSkill?.animated || false
            
            return (
              <div 
                key={index} 
                className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {isAnimated ? skill.level : 0}%
                  </span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out transform origin-left ${
                        isAnimated ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      style={{ 
                        width: `${skill.level}%`,
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                  
                  {/* Animated glow effect */}
                  <div 
                    className={`absolute top-0 h-3 rounded-full bg-gradient-to-r ${skill.color} opacity-30 blur-sm transition-all duration-1000 ease-out transform origin-left ${
                      isAnimated ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    style={{ 
                      width: `${skill.level}%`,
                      transitionDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )
          })}
        </div>

        {/* Additional skills showcase */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Additional Tools & Technologies I Am Familiar With
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {['Git', 'Cursor.ai', 'Trae.ai', 'Postman', 'VS Code', 'REST APIs', 'STS','VibeCoding'].map((tool, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white/50 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-600 transition-all duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
