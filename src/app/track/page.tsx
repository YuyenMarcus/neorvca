import React from 'react';
import Link from 'next/link';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, UsersIcon, WrenchIcon } from '@heroicons/react/24/outline';

export default function TrackPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Track Information</h1>
            <p className="text-xl">World-class sand drag racing facility</p>
          </div>
        </div>
      </div>

      {/* Track Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Facility</h2>
            <p className="text-lg text-gray-600 mb-6">
              New England Sand Drags features a state-of-the-art sand drag racing facility 
              designed to provide the ultimate racing experience. Our track is meticulously 
              maintained and equipped with the latest safety features.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-6 w-6 text-orange-600 mr-3">🏁</div>
                <span className="text-gray-700">Multiple racing lanes</span>
              </div>
              <div className="flex items-center">
                <UsersIcon className="h-6 w-6 text-orange-600 mr-3" />
                <span className="text-gray-700">Spectator seating for 2,000+</span>
              </div>
              <div className="flex items-center">
                <WrenchIcon className="h-6 w-6 text-orange-600 mr-3" />
                <span className="text-gray-700">On-site maintenance facilities</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Track Aerial View</p>
          </div>
        </div>
      </div>

      {/* Track Specifications */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Track Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">300</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Length</h3>
              <p className="text-gray-600">300 feet of pure racing excitement</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Racing Lanes</h3>
              <p className="text-gray-600">Multiple lanes for simultaneous racing</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">60</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Width</h3>
              <p className="text-gray-600">60 feet wide for optimal racing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Track Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Pit Area</h3>
            <p className="text-gray-600">Spacious pit area with power hookups and water access for all racers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Spectator Area</h3>
            <p className="text-gray-600">Comfortable seating with excellent views of all racing action.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Concessions</h3>
            <p className="text-gray-600">Food and beverage vendors serving throughout race events.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Safety Equipment</h3>
            <p className="text-gray-600">On-site safety equipment rental and emergency medical services.</p>
          </div>
        </div>
      </div>

      {/* Location & Contact */}
      <div className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Track</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>123 Sand Drag Way<br />Racing City, NH 03000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>(603) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <EnvelopeIcon className="h-6 w-6 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>info@newenglandsanddrags.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="h-6 w-6 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p>Mon-Fri: 9AM-5PM<br />Sat-Sun: 8AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Interactive Map</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Race?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Book your spot at our next event and experience the thrill of sand drag racing!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/schedule"
            className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
          >
            View Schedule
          </Link>
          <Link
            href="/contact"
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors border border-orange-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 