import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-opacity-0 text-white">
      <div className="container mx-auto px-4 py-6 bg-opacity-0">
        
        <nav className="flex items-start"> {/* Changed to items-start */}
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/Group 1.svg" 
                alt="Logo" 
                width={32} 
                height={32} 
              />
              <span className="text-3xl font-bold">Eduvos Coding Club</span>
            </Link>
          </div>
          
          {/* Centered Links */}
          <div className="hidden md:flex flex-grow justify-center space-x-12"> {/* increased space-x and added justify-center */}
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

          {/* Empty div to balance the layout */}
          <div className="flex-shrink-0 w-[200px]"></div> {/* Width matches logo section */}
        </nav>
      </div>
    </header>
  )
}

export default Header