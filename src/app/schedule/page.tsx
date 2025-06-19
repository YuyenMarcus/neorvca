import React from 'react';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function SchedulePage() {
  const events = [
    {
      id: 1,
      title: "Summer Sand Drag Showdown",
      date: "August 15, 2024",
      time: "Gates open at 8:00 AM",
      location: "NEORVCA Track",
      description: "Join us for an exciting day of sand drag racing! Multiple racing categories available including 4x4 Street Trucks, ATV Top Racing, ATV Trail, Junior Racing, and PeeWee Racing.",
      registrationLink: "https://example.com/register",
      isUpcoming: true,
      categories: ["4x4 Street Trucks", "ATV Top Racing", "ATV Trail", "Junior Racing", "PeeWee Racing"]
    },
    {
      id: 2,
      title: "Fall Championship Series",
      date: "September 20, 2024",
      time: "Gates open at 7:30 AM",
      location: "NEORVCA Track",
      description: "Championship points on the line! Don't miss this crucial event in the series. All classes will be competing for season championships.",
      registrationLink: "https://example.com/register",
      isUpcoming: true,
      categories: ["All Classes"]
    },
    {
      id: 3,
      title: "Halloween Havoc",
      date: "October 26, 2024",
      time: "Gates open at 8:00 AM",
      location: "NEORVCA Track",
      description: "Spooky racing action! Costume contest and special prizes for this Halloween event. Dress up and race for fun prizes!",
      registrationLink: "https://example.com/register",
      isUpcoming: true,
      categories: ["4x4 Street Trucks", "ATV Top Racing", "ATV Trail", "Junior Racing", "PeeWee Racing"]
    },
    {
      id: 4,
      title: "Spring Season Opener",
      date: "April 12, 2025",
      time: "Gates open at 8:00 AM",
      location: "NEORVCA Track",
      description: "Kick off the 2025 racing season with our Spring Season Opener! New season, new opportunities to set records.",
      registrationLink: "https://example.com/register",
      isUpcoming: true,
      categories: ["All Classes"]
    }
  ];

  const upcomingEvents = events.filter(event => event.isUpcoming);
  const pastEvents = events.filter(event => !event.isUpcoming);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Race Schedule
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Check out our upcoming events and mark your calendar for the best sand drag racing in New England!
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Don't miss out on the action! Register early to secure your spot.
            </p>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-red-600 text-white p-6 flex flex-col justify-center">
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      <div className="flex items-center justify-center md:justify-start mb-2">
                        <CalendarIcon className="h-5 w-5 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start mb-2">
                        <ClockIcon className="h-5 w-5 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start">
                        <MapPinIcon className="h-5 w-5 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Racing Categories:</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.categories.map((category, index) => (
                          <span 
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
                      >
                        Register Now
                      </a>
                      <Link
                        href={`/events/${event.id}`}
                        className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
                      >
                        Event Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Event Information
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about attending our events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Event Schedule</h3>
              <p className="text-gray-600">
                Gates typically open at 7:30-8:00 AM. Racing begins around 10:00 AM and continues throughout the day.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Spectator Info</h3>
              <p className="text-gray-600">
                Spectators are welcome! Bring your family and friends to enjoy the excitement of sand drag racing.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">
                All events are held at the NEORVCA track. Check our Track Info page for directions and facility details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Race?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait to register! Spots fill up quickly for our popular events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/classes"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              View Racing Classes
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 