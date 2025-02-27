'use client'
import { Carousel, Card } from '@/components/ui/Carousel' 

const cards = [
  {
    src: "/Theres.jpg", 
    title: "Nothing here",
    category: "coming soon",
    content: (
      <div>
        <p>Some cool event info will be here soon...</p>
      </div>
    ),
  },
  {
    src: "/nothing.jpg",
    title: "Nothing here",
    category: "coming soon",
    content: (
      <div>
        <p>Some cool event info will be here soon...</p>
      </div>
    ),
  },
  
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