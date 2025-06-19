import Image from 'next/image'
import { useState } from 'react'

const categories = ['All', 'Racing', 'Events', 'Track', 'Crowd', 'Vehicles']

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/racing-1.jpg',
    alt: 'Sand drag racing action',
    category: 'Racing',
    title: 'High-Speed Action'
  },
  {
    id: 2,
    src: '/images/gallery/event-1.jpg',
    alt: 'Event crowd and atmosphere',
    category: 'Events',
    title: 'Event Atmosphere'
  },
  {
    id: 3,
    src: '/images/gallery/track-1.jpg',
    alt: 'Sand drag track',
    category: 'Track',
    title: 'Our Track'
  },
  {
    id: 4,
    src: '/images/gallery/vehicle-1.jpg',
    alt: 'Custom racing vehicle',
    category: 'Vehicles',
    title: 'Custom Builds'
  },
  {
    id: 5,
    src: '/images/gallery/crowd-1.jpg',
    alt: 'Excited spectators',
    category: 'Crowd',
    title: 'Fan Excitement'
  },
  {
    id: 6,
    src: '/images/gallery/racing-2.jpg',
    alt: 'Close racing finish',
    category: 'Racing',
    title: 'Photo Finish'
  },
  {
    id: 7,
    src: '/images/gallery/event-2.jpg',
    alt: 'Event setup and preparation',
    category: 'Events',
    title: 'Event Setup'
  },
  {
    id: 8,
    src: '/images/gallery/track-2.jpg',
    alt: 'Track maintenance',
    category: 'Track',
    title: 'Track Maintenance'
  },
  {
    id: 9,
    src: '/images/gallery/vehicle-2.jpg',
    alt: 'Another custom vehicle',
    category: 'Vehicles',
    title: 'Power Machines'
  },
  {
    id: 10,
    src: '/images/gallery/crowd-2.jpg',
    alt: 'Family enjoying the event',
    category: 'Crowd',
    title: 'Family Fun'
  },
  {
    id: 11,
    src: '/images/gallery/racing-3.jpg',
    alt: 'Night racing under lights',
    category: 'Racing',
    title: 'Night Racing'
  },
  {
    id: 12,
    src: '/images/gallery/event-3.jpg',
    alt: 'Award ceremony',
    category: 'Events',
    title: 'Award Ceremony'
  }
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Photo Gallery</h1>
            <p className="text-xl">Capturing the excitement and action of sand drag racing</p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square relative bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found for this category.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
            >
              ×
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video relative bg-gray-200">
                {/* Image would go here */}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Photos</h2>
          <p className="text-xl mb-8">Have great photos from our events? We'd love to see them!</p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Submit Photos
          </button>
        </div>
      </div>
    </div>
  )
} 