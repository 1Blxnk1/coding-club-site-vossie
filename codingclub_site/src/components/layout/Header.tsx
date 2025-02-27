'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="bg-opacity-0 text-white">
      {/* Navbar */}
      <div className="container mx-auto px-4 py-6 bg-opacity-0">
        {/* Logo */}
        <nav className="flex items-start px-1"> 
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/Group 1.svg" 
                alt="Logo" 
                width={32} 
                height={32} 
              />
              {/* Logo Text */}
              <span className="text-3xl font-bold">Eduvos Coding Club</span>
            </Link>
          </div>
          
          {/* Centered Links */}
          <div className="hidden md:flex flex-grow justify-center space-x-12">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/projects', label: 'Projects' },
              { href: '/events', label: 'Events' },
            ].map(({ href, label }) => (
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

          {/* Empty div to balance the layout */}
          <div className="flex-shrink-0 w-[200px]"></div>
        </nav>
      </div>
    </header>
  )
}

export default Header