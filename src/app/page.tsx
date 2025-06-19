import React from 'react';
import Link from 'next/link';
import { CalendarIcon, MapPinIcon, ClockIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              New England Sand Drags
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience the thrill of sand drag racing in New England's premier racing facility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/schedule" 
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Schedule
              </Link>
              <Link 
                href="#events" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Scroll Down
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Race Events */}
      <section id="events" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Race Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss out on the action! Check out our upcoming events and register today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Event Cards */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white p-4">
                <h3 className="text-xl font-semibold">Summer Sand Drag Showdown</h3>
                <p className="text-red-100">August 15, 2024</p>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-4">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  <span>Gates open at 8:00 AM</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Join us for an exciting day of sand drag racing! Multiple racing categories available.
                </p>
                <Link 
                  href="/schedule" 
                  className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white p-4">
                <h3 className="text-xl font-semibold">Fall Championship Series</h3>
                <p className="text-red-100">September 20, 2024</p>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-4">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  <span>Gates open at 7:30 AM</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Championship points on the line! Don't miss this crucial event in the series.
                </p>
                <Link 
                  href="/schedule" 
                  className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white p-4">
                <h3 className="text-xl font-semibold">Halloween Havoc</h3>
                <p className="text-red-100">October 26, 2024</p>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-600 mb-4">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  <span>Gates open at 8:00 AM</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Spooky racing action! Costume contest and special prizes for this Halloween event.
                </p>
                <Link 
                  href="/schedule" 
                  className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/schedule" 
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View Full Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Racing Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Racing Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From beginners to professionals, we have racing classes for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4x4 Street Trucks</h3>
              <p className="text-gray-600 mb-4">
                Modified street trucks with enhanced performance for competitive racing.
              </p>
              <Link 
                href="/classes#4x4" 
                className="text-red-600 font-semibold hover:text-red-700"
              >
                View Class Details →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ATV Top Racing</h3>
              <p className="text-gray-600 mb-4">
                High-performance ATVs competing for the fastest times on the strip.
              </p>
              <Link 
                href="/classes#atv-top" 
                className="text-red-600 font-semibold hover:text-red-700"
              >
                View Class Details →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ATV Trail</h3>
              <p className="text-gray-600 mb-4">
                Trail ATVs competing in a more recreational racing environment.
              </p>
              <Link 
                href="/classes#atv-trail" 
                className="text-red-600 font-semibold hover:text-red-700"
              >
                View Class Details →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Junior Racing</h3>
              <p className="text-gray-600 mb-4">
                Young racers aged 12-16 competing in age-appropriate vehicles.
              </p>
              <Link 
                href="/classes#junior" 
                className="text-red-600 font-semibold hover:text-red-700"
              >
                View Class Details →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">PeeWee Racing</h3>
              <p className="text-gray-600 mb-4">
                Our youngest racers aged 6-11 in specially designed vehicles.
              </p>
              <Link 
                href="/classes#peewee" 
                className="text-red-600 font-semibold hover:text-red-700"
              >
                View Class Details →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Open Class</h3>
              <p className="text-gray-600 mb-4">
                Unlimited modifications for the most competitive racers.
              </p>
              <Link 
                href="/classes#open" 
                className="text-red-600 font-semibold hover:text-red-700"
              >
                View Class Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Sand Drag Strip */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Sand Drag Strip
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              New England's premier sand drag racing facility with state-of-the-art equipment and amenities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">300</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Foot Track</h3>
              <p className="text-gray-300">Professional 300-foot sand drag strip</p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">5K+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Spectator Capacity</h3>
              <p className="text-gray-300">Over 5,000 spectators can enjoy the action</p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">0.1s</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Timing Precision</h3>
              <p className="text-gray-300">Accurate to 0.1 second timing system</p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">100+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pit Spaces</h3>
              <p className="text-gray-300">Over 100 racer pit spaces available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Race Day Action Gallery Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Race Day Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check out the excitement from our recent events and see what you're missing!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Gallery Images */}
            <div className="relative group cursor-pointer">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                  <span className="text-white font-semibold">4x4 Action</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                  View Gallery
                </span>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-semibold">ATV Racing</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                  View Gallery
                </span>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-white font-semibold">Junior Racing</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                  View Gallery
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/gallery" 
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Thrill?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us for the next race event and become part of the New England Sand Drags family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/schedule" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Schedule
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 