'use client'
import { CodeBlock } from '@/components/ui/code-block'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const [buttonText, setButtonText] = useState('Become a member')
  const [locationText, setLocationText] = useState('-26.02143009971126, 28.132987447379186')
  const [isLocationChanging, setIsLocationChanging] = useState(false)
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0)
  const [displayedCode, setDisplayedCode] = useState('')
  const [isCodeChanging, setIsCodeChanging] = useState(false)
  const [isMobile, setIsMobile] = useState(false)


useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768)
  }
  checkMobile()
  window.addEventListener('resize', checkMobile)
  return () => window.removeEventListener('resize', checkMobile)
}, [])

  {/* Update the rotation effect to use the shuffle */}
  useEffect(() => {
    const interval = setInterval(toggleLocation, 5000) 
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

  {/* This is location effect*/}
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
  
  {/* This is button effect to scramble the words*/}
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
  {/* Code examples */}
  const codeExamples = [
    {
      language: "python",
      filename: "hello.py",
      code: `# Python
print("Hello, World!")
# Simple and clean :)`
    },
    {
      language: "javascript",
      filename: "hello.js",
      code: `// JavaScript
console.log("Hello, World!");
// Join us to learn more!`
    },
    {
      language: "java",
      filename: "Hello.java",
      code: `// Java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
} // Code with us!`
    },
    {
      language: "cpp",
      filename: "hello.cpp",
      code: `// C++
#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
} // Let's build together`
    },
    {
      language: "rust",
      filename: "hello.rs",
      code: `// Rust
fn main() {
    println!("Hello, World!");
} // Innovation starts here`
    },
    {
      language: "go",
      filename: "hello.go",
      code: `// Go
package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
} // Join the future`
    }
  ]
  {/* This is the code effect, that scrambles it*/}
  const shuffleCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]<>,.;:'
    return codeExamples[currentCodeIndex].code.split('').map(() => 
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join('')
  }
  
  const changeCode = () => {
    setIsCodeChanging(true)
    let iterations = 0
    const interval = setInterval(() => {
      setDisplayedCode(shuffleCode())
      iterations++
      if (iterations > 10) {
        clearInterval(interval)
        setCurrentCodeIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % codeExamples.length
          setDisplayedCode(codeExamples[newIndex].code)
          return newIndex
        })
        setIsCodeChanging(false)
      }
    }, 50)
  }

  // Change code every 3 seconds
  useEffect(() => {
    const interval = setInterval(changeCode, 3000) 
    return () => clearInterval(interval)
  }, [currentCodeIndex])

  // Initialize displayed code
  useEffect(() => {
    setDisplayedCode(codeExamples[0].code)
  }, [])


  

  return (
    <div 
      className="h-screen bg-black overflow-hidden relative" 
      onMouseMove={handleMouseMove}
    >
      {/* Matrix Background */}
      <div className="
        fixed 
        inset-0 
        text-teal-700/90 
        font-mono
        z-0
      ">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap">
            {'01'.repeat(200)}
          </div>
        ))}
      </div>

      {/* Spotlight overlay */}
      <div 
        id="spotlight-overlay"
        className="fixed inset-0 bg-black z-10"
      />

      {/* Mobile tap message */}
        {isMobile && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="
              fixed 
              top-15
              left-1/2 
              -translate-x-1/2 
              z-50 
              bg-black/80 
              px-4 
              py-2 
              rounded-full 
              pointer-events-none
              text-center
            "
          >
            <p className="text-white text-sm">
              Tap and move to reveal matrix
            </p>
          </motion.div>
        )}

      {/* Main content */}
      <div className="relative h-full flex flex-col justify-center px-4 md:px-20 z-[15]">
        <div className="flex flex-col items-start">
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut"
              }
            }}
          >
            Join the Club :)
          </motion.h1>
          <button 
            onClick={() => window.open('https://global-calendula-7ee.notion.site/1a7d341fe25780d2bf4be2e65c158d30?pvs=105', '_blank')}
            className={`
              bg-blue-600 
              text-white 
              px-6 
              py-3 
              md:px-8 
              md:py-4 
              rounded-lg 
              text-base 
              md:text-xl 
              font-semibold 
              transition-all 
              duration-300
              inline-block
              w-full 
              md:w-auto
              text-center
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

      {/* Code Block - Hidden on mobile, visible from medium screens */}
      <div className="
        fixed 
        hidden 
        md:block 
        bottom-1/2 
        right-20 
        z-[40] 
        w-[400px]
      ">
        <CodeBlock
          language={codeExamples[currentCodeIndex].language}
          filename={codeExamples[currentCodeIndex].filename}
          code={displayedCode}
          highlightLines={[2]}
        />
      </div>

      {/* Location and Contact - Adjusted for mobile */}
      <div className="
        fixed 
        bottom-4 
        md:bottom-1/4 
        left-4 
        right-4 
        md:right-8 
        md:left-auto
        flex 
        flex-col 
        md:flex-row 
        gap-4 
        md:gap-8 
        text-white 
        z-[40]
        bg-black/50
        md:bg-transparent
        p-4
        md:p-0
        rounded-lg
        md:rounded-none
      ">
        <div>
          <h3 className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2">
            LOCATION OF CLUB
          </h3>
          <a 
            href="https://www.google.com/maps/place/44+Alsatian+Rd,+Glen+Austin+AH,+Midrand,+1685/@-26.0215651,28.1304359,999m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1e956de9bae57a35:0xb83ffc1db3f814ee!8m2!3d-26.0215651!4f28.1330108!16s%2Fg%2F11dzmgwqvk?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              text-sm
              md:text-lg 
              hover:text-blue-400 
              transition-colors
              cursor-pointer
              break-all
              md:break-normal
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
          <h3 className="text-xs md:text-sm text-gray-400 mb-1 md:mb-2">
            CONTACT
          </h3>
          <p className="text-sm md:text-lg">admin@codingclub.com</p>
        </div>
      </div>
    </div>
  )

}