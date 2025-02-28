'use client'
import { Carousel, Card } from '@/components/ui/Carousel'
import { motion } from 'framer-motion'

const events = [
  {
    src: "/hackathon.jpg", 
    title: "Annual Hackathon 2025 (For show)",
    category: "Upcoming Event",
    content: (
      <div className="text-black dark:text-white space-y-6">
        <h3 className="text-2xl font-bold mb-4">48-Hour Coding Challenge</h3>
        
        <div className="text-lg space-y-4">
          <div className="flex items-center gap-2 text-blue-500">
            <span>📅 March 15-17, 2025</span>
            <span>|</span>
            <span>🏢 Eduvos Midrand Campus</span>
          </div>

          <p className="font-medium">
            Join us for an exciting weekend of coding, innovation, and problem-solving!
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Event Highlights:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>R10,000 in prizes</li>
              <li>Industry mentors</li>
              <li>Free food and drinks</li>
              <li>Networking opportunities</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Theme:</h4>
            <p>Building Solutions for Smart Cities</p>
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg 
                           hover:bg-blue-700 transition-colors">
            Register Now
          </button>
        </div>
      </div>
    ),
  },
  {
    src: "/workshop.jpg",
    title: "AI Workshop Series (For show)",
    category: "Workshop",
    content: (
      <div className="text-black dark:text-white space-y-6">
        <h3 className="text-2xl font-bold mb-4">Introduction to Machine Learning</h3>
        <div className="text-lg space-y-4">
          <div className="flex items-center gap-2 text-green-500">
            <span>📅 Weekly - Thursdays</span>
            <span>|</span>
            <span>⏰ 14:00 - 16:00</span>
          </div>
          <p>Learn the fundamentals of ML with hands-on projects.</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold mb-2">You'll Learn:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Python for ML</li>
              <li>Data preprocessing</li>
              <li>Model training</li>
              <li>Deployment basics</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    src: "/webdev.jpg",
    title: "Web Development Bootcamp (For show)",
    category: "Training",
    content: (
      <div className="text-black dark:text-white space-y-6">
        <h3 className="text-2xl font-bold mb-4">Full-Stack Development</h3>
        <div className="text-lg space-y-4">
          <div className="flex items-center gap-2 text-purple-500">
            <span>📅 Starting April 1st</span>
            <span>|</span>
            <span>📚 8-Week Program</span>
          </div>
          <p>From zero to deploying your first web application!</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Curriculum:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>HTML, CSS, JavaScript</li>
              <li>React & Next.js</li>
              <li>Node.js & Express</li>
              <li>Database Design</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
]

export default function Events() {
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
            }
          }
        >
          Upcoming Events
        </motion.div>
        
        <motion.p 
          className="text-lg text-gray-300 mb-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5 }
          }}
        >
          Join us for exciting workshops, hackathons, and learning sessions. 
          Stay updated with our latest events and activities.
        </motion.p>

        <Carousel
          items={events.map((event, index) => (
            <Card
              key={index}
              card={event}
              index={index}
              layout={true}
            />
          ))}
        />
      </div>
    </div>
  )
}