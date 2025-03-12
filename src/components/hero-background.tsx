'use client'

import { useEffect, useRef } from 'react'

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Create blobs
    const blobs = [
      { x: '10%', y: '20%', size: 300, color: 'rgba(238, 210, 255, 0.6)' }, // Light purple
      { x: '80%', y: '60%', size: 250, color: 'rgba(173, 216, 230, 0.5)' }, // Light blue
      { x: '60%', y: '15%', size: 200, color: 'rgba(255, 222, 173, 0.4)' }, // Light orange
      { x: '30%', y: '70%', size: 280, color: 'rgba(152, 251, 152, 0.3)' }, // Light green
    ]
    
    // Draw blobs
    const drawBlobs = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      blobs.forEach(blob => {
        const x = parseFloat(blob.x) / 100 * canvas.width / window.devicePixelRatio
        const y = parseFloat(blob.y) / 100 * canvas.height / window.devicePixelRatio
        
        ctx.filter = 'blur(80px)'
        ctx.beginPath()
        ctx.fillStyle = blob.color
        ctx.ellipse(x, y, blob.size, blob.size * 0.6, Math.PI / 4, 0, 2 * Math.PI)
        ctx.fill()
      })
    }
    
    drawBlobs()
    
    // Animate blobs slightly
    let animationFrame: number
    let time = 0
    
    const animate = () => {
      time += 0.005
      
      blobs.forEach((blob, i) => {
        const x = parseFloat(blob.x) / 100
        const y = parseFloat(blob.y) / 100
        
        const newX = (x + Math.sin(time + i) * 0.02) * 100 + '%'
        const newY = (y + Math.cos(time + i) * 0.01) * 100 + '%'
        
        blob.x = newX
        blob.y = newY
      })
      
      drawBlobs()
      animationFrame = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full -z-10 opacity-70"
      aria-hidden="true"
    />
  )
}
