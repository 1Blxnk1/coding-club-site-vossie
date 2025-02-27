// src/app/page.tsx
'use client'
import { CodeBlock } from '@/components/ui/code-block'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const [buttonText, setButtonText] = useState('Become a member')
  const [locationText, setLocationText] = useState('-26.02143009971126, 28.132987447379186')
  const [isLocationChanging, setIsLocationChanging] = useState(false)

  useEffect(() => {
    const interval = setInterval(toggleLocation, 5000) // Switch every 5 seconds
    return () => clearInterval(interval)
  }, [locationText])


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const spotlight = document.getElementById('spotlight-overlay')
    if (spotlight) {
      spotlight.style.background = `radial-gradient(
        circle 400px at ${e.clientX}px ${e.clientY}px,
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

  const shuffleLocation = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-@,.'
    return locationText.split('').map(() => 
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join('')
  }

  const toggleLocation = () => {
    setIsLocationChanging(true)
    let iterations = 0
    const interval = setInterval(() => {
      setLocationText(shuffleLocation())
      iterations++
      if (iterations > 10) {
        clearInterval(interval)
        setLocationText(locationText === '-26.02143009971126, 28.132987447379186' 
          ? '44 Alsatian Rd, Glen Austin AH, Midrand, 1685'
          : '-26.02143009971126, 28.132987447379186')
        setIsLocationChanging(false)
      }
    }, 50)
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

  const codeExample = `# Welcome to Coding Club!
  print("Hello, World!")
  # Join us to learn more :)`

  

  return (
    <div 
      className="h-screen bg-black overflow-hidden"
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
      <div className="h-full flex flex-col justify-center px-20">
        <div className="flex flex-col items-start">
          <h1 className="text-8xl font-bold text-white relative z-50 mb-8">
            Join the Club ;D
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
              inline-block
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

      {/* Code Block above location */}
      <div className="absolute bottom-1/3 right-8 z-50 w-[400px]">
        <CodeBlock
          language="python"
          filename="welcome.py"
          code={codeExample}
          highlightLines={[2]}
        />
      </div>

      {/* Bottom right content */}
      <div className="absolute bottom-1/4 right-8 flex gap-8 text-white z-50">
        <div>
          <h3 className="text-sm text-gray-400 mb-2">LOCATION OF CLUB</h3>
          <a 
            href="https://www.google.com/maps/place/44+Alsatian+Rd,+Glen+Austin+AH,+Midrand,+1685/@-26.0215651,28.1304359,999m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1e956de9bae57a35:0xb83ffc1db3f814ee!8m2!3d-26.0215651!4f28.1330108!16s%2Fg%2F11dzmgwqvk?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              text-lg 
              hover:text-blue-400 
              transition-colors
              cursor-pointer
              ${isLocationChanging ? 'select-none' : ''}
            `}
            onClick={(e) => {
              if (isLocationChanging) {
                e.preventDefault()
              }
            }}
          >
            {locationText}
          </a>
        </div>
        <div>
          <h3 className="text-sm text-gray-400 mb-2">CONTACT</h3>
          <p className="text-lg">admin@codingclub.com</p>
        </div>
      </div>
    </div>
  )
}