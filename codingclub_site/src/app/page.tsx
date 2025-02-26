// src/app/page.tsx
'use client'
import { useState } from 'react'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const [buttonText, setButtonText] = useState('Become a member')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const spotlight = document.getElementById('spotlight-overlay')
    if (spotlight) {
      spotlight.style.background = `radial-gradient(
        circle 100px at ${e.clientX}px ${e.clientY}px,
        transparent 0%,
        black 100%
      )`
    }
  }

  const shuffleText = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    return 'Become a member'.split('').map(() => 
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join('')
  }

  const handleButtonHover = () => {
    setIsHovered(true)
    let iterations = 0
    const interval = setInterval(() => {
      setButtonText(shuffleText())
      iterations++
      if (iterations > 10) {
        clearInterval(interval)
        setButtonText('Become a member')
      }
    }, 50)
  }

  return (
    <div 
      className="min-h-screen bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Layer 1: Matrix Background */}
      <div className="
        fixed 
        inset-0 
        text-green-500/20 
        font-mono
      ">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap">
            {'01'.repeat(200)}
          </div>
        ))}
      </div>

      {/* Layer 2: Black overlay with spotlight */}
      <div 
        id="spotlight-overlay"
        className="fixed inset-0 bg-black"
      />

      {/* Layer 3: Main content */}
{/* Layer 3: Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-7xl px-20"> {/* Container with padding */}
          <h1 className="text-8xl font-bold text-white relative z-50 mb-8">
            Welcome to the Coding Club
          </h1>
          <button
            className={`
              relative
              z-50
              bg-blue-600 
              text-white 
              px-8 
              py-4 
              rounded-lg 
              text-xl 
              font-semibold 
              transition-all 
              duration-300
              ${isHovered ? 'scale-95' : 'scale-100'}
              hover:bg-blue-700
            `}
            onMouseEnter={handleButtonHover}
            onMouseLeave={() => setIsHovered(false)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>)
}