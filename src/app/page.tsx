import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/hero-bg.jpg"
          alt="Sand drag racing track"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            New England Sand Drags
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience the thrill of sand drag racing
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            View Race Schedule
          </button>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Upcoming Events
          </h2>
          {/* Event cards will be added here */}
        </div>
      </section>

      {/* Racing Categories Section */}
      <section className="w-full py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Racing Categories
          </h2>
          {/* Category cards will be added here */}
        </div>
      </section>

      {/* Track Info Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Professional Sand Drag Strip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600">300ft</div>
              <div className="text-gray-600">Track Length</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600">5,000+</div>
              <div className="text-gray-600">Spectator Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600">0.1s</div>
              <div className="text-gray-600">Timing Precision</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600">100+</div>
              <div className="text-gray-600">Racer Pit Spaces</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="w-full py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Race Day Action
          </h2>
          {/* Gallery grid will be added here */}
        </div>
      </section>
    </main>
  );
} 