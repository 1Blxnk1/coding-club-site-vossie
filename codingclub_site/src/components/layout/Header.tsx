'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/events', label: 'Events' },
  ]

  return (
    <header className="bg-opacity-0 text-white relative z-50">
      <div className="container mx-auto px-4 py-6 bg-opacity-0">
        <nav className="flex items-center justify-between"> 
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/Group 1.svg" 
                alt="Logo" 
                width={32} 
                height={32} 
              />
              <span className="text-xl md:text-3xl font-bold">Eduvos Coding Club</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-grow justify-center space-x-12">
            {navItems.map(({ href, label }) => (
              <Link 
                key={href}
                href={href} 
                className={`
                  relative
                  group
                  transition-colors
                  ${pathname === href ? 'text-white' : 'text-gray-300'}
                `}
              >
                {label}
                <span 
                  className={`
                    absolute 
                    -bottom-1 
                    left-0 
                    w-full 
                    h-0.5 
                    bg-white
                    transform
                    origin-left
                    transition-transform
                    duration-300
                    ${pathname === href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                  `}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 file relative z-[9998]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-2">
              <span className={`block w-8 h-0.5 bg-white transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-95 md:hidden z-[9999]"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    text-2xl font-bold
                    relative
                    transition-colors
                    ${pathname === href ? 'text-white' : 'text-gray-300'}
                  `}
                >
                  {label}
                  {pathname === href && (
                    <motion.span 
                      layoutId="underline"
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-white"
                    />
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header