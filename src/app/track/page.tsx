import React from 'react';
import Link from 'next/link';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, CarIcon, UsersIcon, WrenchIcon } from '@heroicons/react/24/outline';

export default function TrackPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Track Information
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              New England's premier sand drag racing facility with state-of-the-art equipment and amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Track Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Sand Drag Strip
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our facility features a professional 300-foot sand drag strip with state-of-the-art timing equipment, 
                capable of handling over 5,000 spectators and 100+ racer pit spaces. Whether you're a seasoned racer 
                or a first-time visitor, our track provides the perfect environment for sand drag racing.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With 0.1-second timing precision and comprehensive safety measures, we ensure fair competition 
                and maximum safety for all participants and spectators.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">300</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Foot Track</h3>
                  <p className="text-sm text-gray-600">Professional sand drag strip</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">5K+</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Spectator Capacity</h3>
                  <p className="text-sm text-gray-600">Over 5,000 spectators</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">0.1s</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Timing Precision</h3>
                  <p className="text-sm text-gray-600">Accurate timing system</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">100+</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Pit Spaces</h3>
                  <p className="text-sm text-gray-600">Racer pit spaces</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPinIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Track Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Amenities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Facility Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need for a great racing experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CarIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pit Area</h3>
              <p className="text-gray-600">
                Spacious pit area with over 100 individual spaces, electrical hookups, and easy access to the track.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Spectator Area</h3>
              <p className="text-gray-600">
                Comfortable seating areas with excellent views of the track, food vendors, and restroom facilities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <WrenchIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Support</h3>
              <p className="text-gray-600">
                On-site technical support and safety inspection services for all vehicles.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Timing System</h3>
              <p className="text-gray-600">
                Professional timing system with 0.1-second precision and real-time results display.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Parking</h3>
              <p className="text-gray-600">
                Ample parking for spectators, racers, and support vehicles with easy access to the facility.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <EnvelopeIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Concessions</h3>
              <p className="text-gray-600">
                Food and beverage vendors on-site during events, with a variety of options for all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Track Rules and Safety */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Track Rules and Safety
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Safety is our top priority. Please familiarize yourself with our track rules and safety requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">General Rules</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  All participants must sign a waiver and release form
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  No alcohol or drugs before or during racing
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  Follow all instructions from track officials
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  Speed limit in pit area is 5 mph
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  No burnouts outside designated areas
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  Clean up your pit area before leaving
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Requirements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  Helmets required for all drivers and passengers
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  Seat belts must be worn at all times
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  Vehicles must pass technical inspection
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  Fire extinguishers recommended
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  Proper safety gear for your racing class
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2 mt-1">•</span>
                  Follow all class-specific safety requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Directions and Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Getting Here
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Address</h3>
                  <p className="text-gray-600">
                    NEORVCA Sand Drag Track<br />
                    123 Racing Lane<br />
                    New England, NE 12345
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Directions</h3>
                  <p className="text-gray-600 mb-4">
                    From Interstate 95:<br />
                    Take Exit 123 and head west on Racing Road for 2 miles. Turn right onto Racing Lane. 
                    The track will be on your left.
                  </p>
                  <p className="text-gray-600">
                    From Route 1:<br />
                    Take Racing Road north for 5 miles. Turn left onto Racing Lane. 
                    The track will be on your left.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">GPS Coordinates</h3>
                  <p className="text-gray-600">
                    Latitude: 42.3601° N<br />
                    Longitude: -71.0589° W
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <PhoneIcon className="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <EnvelopeIcon className="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@neorvca.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <ClockIcon className="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">Office Hours</p>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 8:00 AM - 6:00 PM<br />
                      Sunday: Closed (except during events)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Visit Our Track?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Come experience the thrill of sand drag racing at New England's premier facility!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              View Schedule
            </Link>
            <Link
              href="/classes"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Racing Classes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 