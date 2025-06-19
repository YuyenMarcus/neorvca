import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon, MapPinIcon, ClockIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-orange-800">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            New England
            <span className="block text-orange-300">Sand Drags</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the thrill of high-speed sand drag racing in the heart of New England. 
            Where power meets precision on our world-class track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Schedule
            </Link>
            <Link
              href="/classes"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Racing Classes
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose New England Sand Drags?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the ultimate racing experience with world-class facilities and unmatched excitement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏁</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Track</h3>
              <p className="text-gray-600 leading-relaxed">
                300-foot sand drag track with multiple lanes, professional timing systems, and safety equipment.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Join a passionate community of racers and enthusiasts. Family-friendly events with something for everyone.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Competition</h3>
              <p className="text-gray-600 leading-relaxed">
                Multiple racing classes for all skill levels. From beginners to professionals, there's a class for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Don't miss out on the action. Check our schedule and register today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <span className="text-4xl text-white font-bold">JULY</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Summer Championship</h3>
                <p className="text-gray-600 mb-4">July 15-16, 2024</p>
                <p className="text-gray-600 mb-4">The biggest event of the summer with multiple classes and huge prizes.</p>
                <Link
                  href="/schedule"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-4xl text-white font-bold">AUG</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Night Racing Series</h3>
                <p className="text-gray-600 mb-4">August 5, 2024</p>
                <p className="text-gray-600 mb-4">Experience the thrill of racing under the lights. Spectacular night event.</p>
                <Link
                  href="/schedule"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <span className="text-4xl text-white font-bold">SEPT</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fall Finale</h3>
                <p className="text-gray-600 mb-4">September 23, 2024</p>
                <p className="text-gray-600 mb-4">The season finale with championship points on the line.</p>
                <Link
                  href="/schedule"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/schedule"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Full Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
              <p className="text-orange-100">Years of Excellence</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1,247</div>
              <p className="text-orange-100">Active Racers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24</div>
              <p className="text-orange-100">Events This Year</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <p className="text-orange-100">Annual Spectators</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Thrill?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the New England Sand Drags community and experience the excitement of high-speed racing. 
            Whether you're a seasoned racer or just getting started, we have a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Register for an Event
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 