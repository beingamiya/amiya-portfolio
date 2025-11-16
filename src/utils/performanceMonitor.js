// 120fps Performance Monitor
class PerformanceMonitor {
  constructor() {
    this.frameCount = 0
    this.lastTime = performance.now()
    this.fps = 0
    this.isMonitoring = false
    this.rafId = null
  }

  start() {
    if (this.isMonitoring) return
    
    this.isMonitoring = true
    this.frameCount = 0
    this.lastTime = performance.now()
    this.measureFPS()
  }

  stop() {
    this.isMonitoring = false
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
  }

  measureFPS() {
    if (!this.isMonitoring) return

    this.rafId = requestAnimationFrame(() => {
      this.frameCount++
      const currentTime = performance.now()
      const deltaTime = currentTime - this.lastTime

      if (deltaTime >= 1000) { // Update every second
        this.fps = Math.round((this.frameCount * 1000) / deltaTime)
        this.frameCount = 0
        this.lastTime = currentTime

        // Log performance info
        if (this.fps >= 100) {
          console.log(`🚀 Excellent performance: ${this.fps}fps`)
        } else if (this.fps >= 60) {
          console.log(`✅ Good performance: ${this.fps}fps`)
        } else {
          console.warn(`⚠️ Performance issue: ${this.fps}fps`)
        }
      }

      this.measureFPS()
    })
  }

  getFPS() {
    return this.fps
  }
}

// Create global instance
window.performanceMonitor = new PerformanceMonitor()

// Auto-start monitoring in development
if (process.env.NODE_ENV === 'development') {
  window.performanceMonitor.start()
}

export default PerformanceMonitor

