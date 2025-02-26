// src/app/about/page.tsx
'use client'
import { Carousel, Card } from '@/components/ui/Carousel'

const cards = [
  {
    src: "/president.png", // Add these images to your public folder
    title: "Vusi Kunene Matlou",
    category: "President",
    content: (
      <div className="text-black dark:text-white space-y-6">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        
        <div className="text-lg space-y-4">
          <p className="font-semibold">
            Aspiring Cybersecurity & Fintech Security Professional | Blockchain Enthusiast
          </p>
  
          <p>
            I'm a third-year Computer Science student at Eduvos University, passionate about 
            cybersecurity, fintech security, and blockchain technology. My expertise lies in 
            ethical hacking, penetration testing, API security, and financial fraud prevention.
          </p>
  
          <p>
            As the President of the Coding Club, I lead technical projects, mentor students, 
            and organize hackathons that focus on web development, fintech security, and 
            cybersecurity challenges.
          </p>
  
          <div>
            <h4 className="font-bold mb-2">What I'm Working On:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Cybersecurity & Ethical Hacking – Penetration testing, vulnerability assessments, 
                  and securing fintech applications (Kali Linux, Metasploit, Burp Suite)</li>
              <li>Fintech Security – Developing secure financial applications, implementing API 
                  security best practices, and working on fraud detection systems</li>
              <li>Blockchain & Smart Contract Security – Exploring vulnerabilities in DeFi platforms, 
                  Web3 security, and Solidity-based smart contracts</li>
              <li>CTF & Cybersecurity Challenges – Actively solving Capture The Flag (CTF) challenges 
                  on TryHackMe and HackTheBox</li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-bold mb-2">Skills & Technologies:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Ethical Hacking & Penetration Testing (Web & API Security)</li>
              <li>Fintech Security (Fraud Detection, Secure API Development)</li>
              <li>Cloud Security (AWS, IAM, Encryption)</li>
              <li>Blockchain & Smart Contract Auditing (Solidity, DeFi Security)</li>
              <li>Python for Cybersecurity & Machine Learning in Fraud Detection</li>
            </ul>
          </div>
        </div>
  
        <a 
          href="https://linkedin.com/in/your-profile" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-blue-600 text-white px-8 py-4 rounded-lg 
                    text-xl font-semibold transition-all duration-300 hover:bg-blue-700"
        >
          LINKEDIN
        </a>
      </div>
    ),
  },
  {
    src: "/hackathons.jpg",
    title: "Hackathons",
    category: "Events",
    content: (
      <div className="text-black dark:text-white">
        <h3 className="text-2xl font-bold mb-4">Regular Hackathons</h3>
        <p className="text-lg">
          Put your skills to the test in our themed hackathons. Build projects,
          solve problems, and win prizes!
        </p>
      </div>
    ),
  },
  {
    src: "/mentorship.jpg",
    title: "Mentorship",
    category: "Support",
    content: (
      <div className="text-black dark:text-white">
        <h3 className="text-2xl font-bold mb-4">1-on-1 Mentorship</h3>
        <p className="text-lg">
          Get guidance from experienced developers who can help you navigate
          your coding journey.
        </p>
      </div>
    ),
  },
  {
    src: "/projects.jpg",
    title: "Real Projects",
    category: "Experience",
    content: (
      <div className="text-black dark:text-white">
        <h3 className="text-2xl font-bold mb-4">Real-World Projects</h3>
        <p className="text-lg">
          Work on actual projects that solve real problems. Build your portfolio
          while making a difference.
        </p>
      </div>
    ),
  },
  {
    src: "/community.jpg",
    title: "Community",
    category: "Network",
    content: (
      <div className="text-black dark:text-white">
        <h3 className="text-2xl font-bold mb-4">Vibrant Community</h3>
        <p className="text-lg">
          Join a community of like-minded developers. Share knowledge, collaborate,
          and grow together.
        </p>
      </div>
    ),
  },
  {
    src: "/resources.jpg",
    title: "Resources",
    category: "Tools",
    content: (
      <div className="text-black dark:text-white">
        <h3 className="text-2xl font-bold mb-4">President</h3>
        <p className="text-lg">
          Access our curated collection of learning materials, tutorials, and
          coding challenges.
        </p>
      </div>
    ),
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      {/* Your existing about content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
        <p className="text-lg text-gray-300 mb-12">
          Welcome to the Eduvos Coding Club...
        </p>
      </div>

      {/* Cards section */}
      <div className="py-20 bg-black">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Meet the Team behind it
        </h2>
        <Carousel
          items={cards.map((card, index) => (
            <Card
              key={index}
              card={card}
              index={index}
              layout={true}
            />
          ))}
        />
      </div>
    </div>
  )
}