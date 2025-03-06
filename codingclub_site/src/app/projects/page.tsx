'use client'
import { motion } from 'framer-motion'
import { HoverEffect } from '@/components/ui/card-hover-effect'

const projects = [
  {
    title: "AI-Powered Chatbot",
    description: "Enhancing customer interactions with an intelligent AI chatbot.",
    link: "https://github.com/example/ai-powered-chatbot"
  },
  {
    title: "Responsive Web Design",
    description: "Creating seamless user experiences with responsive web design.",
    link: "https://github.com/example/responsive-web-design"
  },
  {
    title: "Machine Learning Models",
    description: "Developing predictive models using advanced machine learning techniques.",
    link: "https://github.com/example/machine-learning-models"
  },
  {
    title: "Real-Time Data Visualization",
    description: "Visualizing data in real-time for better decision making.",
    link: "https://github.com/example/real-time-data-visualization"
  },
  {
    title: "Collaborative Coding Platform",
    description: "Facilitating collaborative coding with an innovative platform.",
    link: "https://github.com/example/collaborative-coding-platform"
  },
  {
    title: "Blockchain-Based Solutions",
    description: "Implementing secure and transparent blockchain-based solutions.",
    link: "https://github.com/example/blockchain-based-solutions"
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
          Our Projects & Resources
        </motion.div>
        
        <motion.p 
          className="text-lg text-gray-300 mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5 }
          }}
        >
          Explore the vast resources and innovative projects created by our coding club members
        </motion.p>

        <HoverEffect items={projects} />
      </div>
    </div>
  )
}