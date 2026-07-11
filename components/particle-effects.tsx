"use client"
import { useEffect, useRef } from "react"

export function ParticleEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Skip particles entirely on mobile — not worth the continuous rAF cost
    const isMobile = window.innerWidth < 768
    if (isMobile) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const PARTICLE_COUNT = 20

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.12 + 0.04,
    }))

    let animationId: number
    let isVisible = true

    const handleVisibility = () => {
      isVisible = !document.hidden
      if (isVisible) animate()
    }
    document.addEventListener("visibilitychange", handleVisibility)

    const animate = () => {
      if (!isVisible) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(249, 115, 22, ${p.opacity})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      cancelAnimationFrame(animationId)
      document.removeEventListener("visibilitychange", handleVisibility)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 hidden md:block"
      style={{ opacity: 0.6 }}
    />
  )
}
