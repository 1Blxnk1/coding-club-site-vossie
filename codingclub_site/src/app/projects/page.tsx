'use client'
import { motion } from 'framer-motion'
import { HoverEffect } from '@/components/ui/card-hover-effect'

const projects = [
  {
    title: "Web-dev-resources",
    description: "A curated list of web development resources, including tools, libraries, and tutorials.",
    link: "https://github.com/iamismile/web-dev-resources"
  },
  {
    title: "Coming Soon",
    description: "Stay tuned for more exciting projects from our coding club members.",
    link: "theresnothinghere"
  },
  {
    title: "Coming Soon",
    description: "Stay tuned for more exciting projects from our coding club members.",
    link: "heretoo"
  },
  {
    title: "Coming Soon",
    description: "Stay tuned for more exciting projects from our coding club members.",
    link: "comeonbro"
  },
  {
    title: "Coming Soon",
    description: "Stay tuned for more exciting projects from our coding club members.",
    link: "eheheheh"
  },
  {
    title: "Coming Soon",
    description: "Stay tuned for more exciting projects from our coding club members.",
    link: "lol"
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-black">
      {/* Projects */}
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="text-4xl font-bold text-white mb-6 text-center single-line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut"
            }
          }}
          style={{
            display: "block",
            textAlign: "center",
            position: "relative",
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px)"
          }}
        >
          Our Projects
        </motion.div>
        
        <motion.p 
          className="text-lg text-gray-300 mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5 }
          }}
        >
          Explore the innovative projects created by our coding club members
        </motion.p>

        <HoverEffect items={projects} />
      </div>
    </div>
  )
}