import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className=" bg-opacity-0 text-white">
      <div className="container mx-auto px-4 py-6 bg-opacity-0">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/globe.svg" 
              alt="Logo" 
              width={32} 
              height={32} 
            />
            <span className="text-xl font-bold">Eduvos Coding Club</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className="hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="hover:text-gray-300 transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/events" 
              className="hover:text-gray-300 transition-colors"
            >
              Events
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header