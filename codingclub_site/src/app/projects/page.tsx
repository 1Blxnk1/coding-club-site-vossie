// src/app/projects/page.tsx
'use client'
import { motion } from 'framer-motion'
import { HoverEffect } from '@/components/ui/card-hover-effect' // We'll create this next

const projects = [
  {
    title: "Student Management System",
    description: "A comprehensive system built with Next.js and TypeScript for managing student records, attendance, and academic performance.",
    link: "/projects/student-management"
  },
  {
    title: "Blockchain Voting Platform",
    description: "A secure and transparent voting system using blockchain technology, built with Solidity and Web3.js.",
    link: "/projects/blockchain-voting"
  },
  {
    title: "AI Study Assistant",
    description: "An AI-powered study assistant that helps students organize their study materials and create personalized learning paths.",
    link: "/projects/ai-assistant"
  },
  {
    title: "Campus Events App",
    description: "A mobile-first web application for managing and discovering campus events, built with React Native and Firebase.",
    link: "/projects/events-app"
  },
  {
    title: "Code Review Platform",
    description: "A platform for peer code reviews and collaborative learning, featuring real-time collaboration tools.",
    link: "/projects/code-review"
  },
  {
    title: "Cybersecurity Training Hub",
    description: "An interactive platform for learning cybersecurity concepts through hands-on exercises and CTF challenges.",
    link: "/projects/security-hub"
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-black">
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