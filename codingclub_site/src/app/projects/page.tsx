// src/app/about/page.tsx or wherever you want to use it
'use client'
import { Carousel, Card } from '@/components/ui/Carousel' // adjust the import path

const cards = [
  {
    src: "/image1.jpg", // Make sure these images exist in your public folder
    title: "Web Development",
    category: "Programming",
    content: (
      <div>
        <p>Learn modern web development techniques...</p>
      </div>
    ),
  },
  {
    src: "/image2.jpg",
    title: "Mobile Apps",
    category: "Development",
    content: (
      <div>
        <p>Create cutting-edge mobile applications...</p>
      </div>
    ),
  },
  // Add more cards as needed
]

export default function CarouselDemo() {
  return (
    <div className="min-h-screen bg-black p-4">
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
  )
}