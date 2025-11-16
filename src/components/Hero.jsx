import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    let animationFrameId
    let lastTime = 0
    const targetFPS = 120
    const frameInterval = 1000 / targetFPS
    
    const handleMouseMove = (e) => {
      const now = performance.now()
      
      // Throttle to 120fps
      if (now - lastTime >= frameInterval) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
        }
        
        animationFrameId = requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY })
          lastTime = now
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen flex items-center overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-6000"></div>
      </div>

      {/* 120fps optimized floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-15 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 1}s`,
              transform: 'translateZ(0)',
              willChange: 'opacity, transform'
            }}
          ></div>
        ))}
      </div>

      {/* 120fps optimized mouse follower effect */}
      <div 
        className="absolute w-48 h-48 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full filter blur-xl pointer-events-none transition-all duration-200 ease-out will-change-transform"
        style={{
          left: mousePosition.x - 96,
          top: mousePosition.y - 96,
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform'
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main heading with enhanced animation */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Amiya
            </span>
          </h1>
          
          {/* Animated job title */}
          <div className="text-3xl md:text-4xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 font-light">
            <span className="inline-block animate-bounce animation-delay-100">F</span>
            <span className="inline-block animate-bounce animation-delay-200">u</span>
            <span className="inline-block animate-bounce animation-delay-300">l</span>
            <span className="inline-block animate-bounce animation-delay-400">l</span>
            <span className="inline-block animate-bounce animation-delay-500"> </span>
            <span className="inline-block animate-bounce animation-delay-600">S</span>
            <span className="inline-block animate-bounce animation-delay-700">t</span>
            <span className="inline-block animate-bounce animation-delay-800">a</span>
            <span className="inline-block animate-bounce animation-delay-900">c</span>
            <span className="inline-block animate-bounce animation-delay-1000">k</span>
            <span className="inline-block animate-bounce animation-delay-1100"> </span>
            <span className="inline-block animate-bounce animation-delay-1200">D</span>
            <span className="inline-block animate-bounce animation-delay-1300">e</span>
            <span className="inline-block animate-bounce animation-delay-1400">v</span>
            <span className="inline-block animate-bounce animation-delay-1500">e</span>
            <span className="inline-block animate-bounce animation-delay-1600">l</span>
            <span className="inline-block animate-bounce animation-delay-1700">o</span>
            <span className="inline-block animate-bounce animation-delay-1800">p</span>
            <span className="inline-block animate-bounce animation-delay-1900">e</span>
            <span className="inline-block animate-bounce animation-delay-2000">r</span>
          </div>
          
          {/* Enhanced description */}
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed">
            I craft <span className="text-cyan-400 font-bold">beautiful</span>, <span className="text-purple-400 font-bold">responsive</span> web experiences with cutting-edge technologies. 
            Passionate about <span className="text-pink-400 font-bold">clean code</span>, <span className="text-yellow-400 font-bold">user experience</span>, and 
            <span className="text-green-400 font-bold"> innovation</span>.
          </p>
          
          {/* Enhanced buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a 
              href="#projects" 
              className="group relative px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-white/20 transform hover:scale-105"
            >
              <span className="flex items-center gap-3">
                <span>View My Work</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            
            <a 
              href="#contact" 
              className="group relative px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-500 backdrop-blur-sm hover:shadow-2xl hover:shadow-white/20 transform hover:scale-105"
            >
              <span className="flex items-center gap-3">
                <span>Get In Touch</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center hover:border-white/60 transition-colors duration-300">
              <div className="w-1 h-4 bg-gradient-to-b from-white to-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
