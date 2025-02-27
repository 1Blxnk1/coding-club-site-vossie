'use client'
import { Carousel, Card } from '@/components/ui/Carousel'
import { motion } from 'framer-motion'
import { 
  IconBrandTiktok, 
  IconBrandLinkedin, 
  IconBrandGithub, 
  IconBrandInstagram 
} from '@tabler/icons-react'
const cards = [
  {
    src: "/president.png", 
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
          href="https://www.linkedin.com/in/vusi-kunene-matlou/" 
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
    src: "/VicePres.png",
    title: "Tanatswanashe Mthembu",
    category: "Vice President",
    content: (
      <div className="text-black dark:text-white">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p className="text-lg">
          I am the Vice Presidnet... More Info coming soon.
        </p>
      </div>
    ),
  },
  {
    src: "/secretary.png",
    title: "Ayanda Dlamini",
    category: "Secretary",
    content: (
      <div className="text-black dark:text-white">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p className="text-lg">
          I am the Secretary... More Info coming soon.
        </p>
      </div>
    ),
  },
  {
    src: "/treasurer.png",
    title: "Thoriso Dibatana",
    category: "Treasurer",
    content: (
      <div className="text-black dark:text-white">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p className="text-lg">
        A final year BSc Computer Science student, with an interest in software development and engineering. 
        I am an independent thinker with a strong problem-solving orientation, adept at thriving under pressure and collaborating effectively in team settings. 
        Punctuality, integrity, and a commitment to continuous self-improvement are central to my work ethic. 
        My primary goal during this current phase of early career development is to explore the diverse opportunities within the tech industry to discover where my interests and strengths align best. 
        I am passionate about leveraging my education and practical experience in computer science to drive my career growth and contribute to a future where technology enhances our world.
        </p>

        <a 
          href="https://www.linkedin.com/in/thoriso-dibatana/" 
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
    src: "/eventsplanner.png",
    title: "Vuyisile Shokane",
    category: "Events Planner",
    content: (
      <div className="text-black dark:text-white">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p className="text-lg">
          I am the Events Planner... More Info coming soon.
        </p>
      </div>
    ),
  },
  {
    src: "/wellness.png",
    title: "Conquerant Lembindi",
    category: "Student Wellness",
    content: (
      <div className="text-black dark:text-white">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p className="text-lg">
         I am the Student Wellness... More Info coming soon.
        </p>
      </div>
    ),
  },
]

export default function About() {
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
        About Us
      </motion.div>
      <motion.p 
          className="text-lg text-gray-300 mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5 }
          }}
        >
          The Coding Club is a vibrant community of tech enthusiasts, beginners, and experienced programmers passionate about learning, collaboration, and innovation. Our mission is to create a supportive environment where members can develop coding skills, work on exciting projects, and participate in hackathons, workshops, and networking events. Whether you're just starting out or looking to refine your expertise, the club offers resources, mentorship, and opportunities to grow. Join us to code, create, and connect with like-minded individuals who share a passion for technology and problem-solving!
        </motion.p>
      </div>


      {/* Cards section */}
      <div className="py-20 bg-black">
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
        Meet the Team
      </motion.div>
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

      <motion.div 
          className="text-xl font-bold text-white mb-6 text-center single-line"
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
        You can find us all on
      </motion.div>
      {/* Social Media Links */}
      <div className="flex justify-center gap-8 mb-20">
        <motion.a
          href="https://www.tiktok.com/@codingclub404"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <IconBrandTiktok size={32} />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/coding-club-3841b1349"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <IconBrandLinkedin size={32} />
        </motion.a>

        <motion.a
          href="https://github.com/CODINGCLUB404"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <IconBrandGithub size={32} />
        </motion.a>

        <motion.a
          href="https://www.instagram.com/codingclub404/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-400 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <IconBrandInstagram size={32} />
        </motion.a>
      </div>
    </div>
  )
}