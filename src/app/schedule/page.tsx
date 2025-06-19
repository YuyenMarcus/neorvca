import Link from 'next/link'

const events = [
  {
    id: 1,
    title: "Summer Championship Series",
    date: "July 15-16, 2024",
    time: "Gates Open: 7:00 AM",
    description: "The biggest event of the summer! Multiple racing classes with championship points on the line. Huge prizes and non-stop action.",
    category: "Championship",
    status: "upcoming",
    registrationDeadline: "July 10, 2024",
    entryFee: "$75",
    classes: ["4x4 Street", "ATV Top", "ATV Trail", "Junior", "PeeWee", "Open"]
  },
  {
    id: 2,
    title: "Night Racing Under the Lights",
    date: "August 5, 2024",
    time: "Gates Open: 4:00 PM",
    description: "Experience the thrill of racing under the lights! Spectacular night event with special lighting and atmosphere.",
    category: "Special Event",
    status: "upcoming",
    registrationDeadline: "August 1, 2024",
    entryFee: "$60",
    classes: ["4x4 Street", "ATV Top", "ATV Trail", "Open"]
  },
  {
    id: 3,
    title: "Fall Finale Championship",
    date: "September 23, 2024",
    time: "Gates Open: 8:00 AM",
    description: "The season finale with championship points on the line. Don't miss this crucial event in the series.",
    category: "Championship",
    status: "upcoming",
    registrationDeadline: "September 18, 2024",
    entryFee: "$80",
    classes: ["4x4 Street", "ATV Top", "ATV Trail", "Junior", "PeeWee", "Open"]
  },
  {
    id: 4,
    title: "Halloween Havoc",
    date: "October 26, 2024",
    time: "Gates Open: 8:00 AM",
    description: "Spooky racing action! Costume contest and special prizes for this Halloween event. Family-friendly fun.",
    category: "Special Event",
    status: "upcoming",
    registrationDeadline: "October 22, 2024",
    entryFee: "$50",
    classes: ["4x4 Street", "ATV Top", "ATV Trail", "Junior", "PeeWee", "Open"]
  }
]

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-red-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Event Schedule
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Don't miss out on the action! Check out our upcoming events and register today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/classes"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Racing Classes
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar and join us for these exciting racing events. Early registration is recommended.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Event Header */}
                <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                        {event.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{event.entryFee}</div>
                      <div className="text-orange-200 text-sm">Entry Fee</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-orange-100">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Racing Classes */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Racing Classes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.classes.map((className, index) => (
                        <span
                          key={index}
                          className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {className}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Registration Info */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600">Registration Deadline:</p>
                        <p className="font-semibold text-gray-900">{event.registrationDeadline}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Entry Fee:</p>
                        <p className="font-semibold text-orange-600">{event.entryFee}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex-1">
                      Register Now
                    </button>
                    <button className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                      Event Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Early Registration</h3>
              <p className="text-gray-600">
                Register early to secure your spot and avoid disappointment. Limited entries available.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">
                All participants must follow safety guidelines. Helmets and proper safety equipment required.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Track Location</h3>
              <p className="text-gray-600">
                Located in the heart of New England with easy access and ample parking for all participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Race?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the New England Sand Drags community and experience the thrill of high-speed racing. 
            Whether you're a seasoned racer or just getting started, we have a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/classes"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Racing Classes
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 