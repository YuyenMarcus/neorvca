import React from 'react';
import Link from 'next/link';
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function ClassesPage() {
  const racingClasses = [
    {
      id: 1,
      name: "4x4 Street Trucks",
      description: "Modified street trucks with enhanced performance for competitive racing. Perfect for those who want to race their daily driver with some modifications.",
      requirements: ["Valid driver's license", "Safety equipment", "Vehicle inspection"],
      entryFee: "$75",
      maxSpeed: "60+ MPH",
      ageRequirement: "16+",
      icon: "🚗",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      id: 2,
      name: "ATV Top Racing",
      description: "High-performance ATVs competing for the fastest times on the strip. For experienced riders looking for maximum speed and performance.",
      requirements: ["ATV safety certification", "Full safety gear", "Machine inspection"],
      entryFee: "$60",
      maxSpeed: "70+ MPH",
      ageRequirement: "18+",
      icon: "🏍️",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100"
    },
    {
      id: 3,
      name: "ATV Trail",
      description: "Trail ATVs competing in a more recreational racing environment. Great for families and casual racers.",
      requirements: ["Basic ATV experience", "Safety equipment", "Vehicle inspection"],
      entryFee: "$50",
      maxSpeed: "45+ MPH",
      ageRequirement: "16+",
      icon: "🛵",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      id: 4,
      name: "Junior Racing",
      description: "Young racers aged 12-16 competing in age-appropriate vehicles. Designed to introduce young people to the sport safely.",
      requirements: ["Parental consent", "Safety training", "Age-appropriate vehicle"],
      entryFee: "$40",
      maxSpeed: "35+ MPH",
      ageRequirement: "12-16",
      icon: "👦",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      id: 5,
      name: "PeeWee Racing",
      description: "Our youngest racers aged 6-11 in specially designed vehicles. Focus on fun and safety for the littlest racers.",
      requirements: ["Parental supervision", "Safety training", "Age-appropriate vehicle"],
      entryFee: "$30",
      maxSpeed: "25+ MPH",
      ageRequirement: "6-11",
      icon: "👶",
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100"
    },
    {
      id: 6,
      name: "Open Class",
      description: "Unlimited modifications for the most competitive racers. Anything goes in this high-performance class.",
      requirements: ["Advanced racing experience", "Full safety equipment", "Technical inspection"],
      entryFee: "$100",
      maxSpeed: "80+ MPH",
      ageRequirement: "18+",
      icon: "🏁",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-red-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Racing Classes
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              From beginners to professionals, we have racing classes for everyone. 
              Find your perfect class and start your racing journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/schedule"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Schedule
              </Link>
              <Link
                href="/track"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Track Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Class
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each class is designed to provide a safe and competitive racing experience for different skill levels and vehicle types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {racingClasses.map((racingClass) => (
              <div key={racingClass.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Class Header */}
                <div className={`bg-gradient-to-r ${racingClass.color} text-white p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{racingClass.icon}</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{racingClass.entryFee}</div>
                      <div className="text-sm opacity-90">Entry Fee</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{racingClass.name}</h3>
                  <div className="flex items-center space-x-4 text-sm opacity-90">
                    <div className="flex items-center">
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                      <span>{racingClass.maxSpeed}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                      <span>{racingClass.ageRequirement}</span>
                    </div>
                  </div>
                </div>

                {/* Class Details */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {racingClass.description}
                  </p>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {racingClass.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="text-gray-600">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <button className={`bg-gradient-to-r ${racingClass.color} hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200`}>
                      Register for Class
                    </button>
                    <button className="bg-transparent border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Class Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare different classes to find the perfect fit for your experience level and vehicle.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 border-b border-gray-200 font-semibold text-gray-900">Class</th>
                  <th className="text-center p-4 border-b border-gray-200 font-semibold text-gray-900">Entry Fee</th>
                  <th className="text-center p-4 border-b border-gray-200 font-semibold text-gray-900">Max Speed</th>
                  <th className="text-center p-4 border-b border-gray-200 font-semibold text-gray-900">Age Requirement</th>
                  <th className="text-center p-4 border-b border-gray-200 font-semibold text-gray-900">Experience Level</th>
                </tr>
              </thead>
              <tbody>
                {racingClasses.map((racingClass, index) => (
                  <tr key={racingClass.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 border-b border-gray-200">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{racingClass.icon}</span>
                        <span className="font-medium text-gray-900">{racingClass.name}</span>
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-200 text-center font-semibold text-orange-600">
                      {racingClass.entryFee}
                    </td>
                    <td className="p-4 border-b border-gray-200 text-center text-gray-600">
                      {racingClass.maxSpeed}
                    </td>
                    <td className="p-4 border-b border-gray-200 text-center text-gray-600">
                      {racingClass.ageRequirement}
                    </td>
                    <td className="p-4 border-b border-gray-200 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        racingClass.name.includes('PeeWee') ? 'bg-green-100 text-green-800' :
                        racingClass.name.includes('Junior') ? 'bg-blue-100 text-blue-800' :
                        racingClass.name.includes('Open') ? 'bg-red-100 text-red-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {racingClass.name.includes('PeeWee') ? 'Beginner' :
                         racingClass.name.includes('Junior') ? 'Intermediate' :
                         racingClass.name.includes('Open') ? 'Advanced' :
                         'Intermediate'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Safety Information */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Safety First
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your safety is our top priority. All participants must follow our safety guidelines and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Required Equipment</h3>
              <p className="text-gray-300">
                Helmets, safety gear, and proper vehicle modifications are mandatory for all classes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Safety Training</h3>
              <p className="text-gray-300">
                All participants must complete safety training before competing in any class.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Insurance</h3>
              <p className="text-gray-300">
                All participants must have proper insurance coverage for their vehicles and equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Racing?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Choose your class, register for an event, and experience the thrill of sand drag racing!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Event Schedule
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 