import React from 'react';
import Link from 'next/link';
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function ClassesPage() {
  const racingClasses = [
    {
      id: '4x4',
      name: '4x4 Street Trucks',
      description: 'Modified street trucks with enhanced performance for competitive racing.',
      image: '/images/4x4-trucks.jpg',
      rules: [
        'Must be a 4-wheel drive vehicle',
        'Street legal modifications allowed',
        'Safety equipment required (helmet, seat belts)',
        'Maximum tire size restrictions apply',
        'No nitrous oxide systems allowed'
      ],
      requirements: [
        'Valid driver\'s license',
        'Vehicle registration and insurance',
        'Safety inspection required',
        'Minimum age: 18 years old'
      ],
      restrictions: [
        'No alcohol or drugs before or during racing',
        'Must follow all track safety rules',
        'Vehicle must pass technical inspection'
      ]
    },
    {
      id: 'atv-top',
      name: 'ATV Top Racing',
      description: 'High-performance ATVs competing for the fastest times on the strip.',
      image: '/images/atv-top.jpg',
      rules: [
        'Must be a 4-wheel ATV',
        'Performance modifications allowed',
        'Safety equipment required (helmet, protective gear)',
        'Maximum engine displacement limits',
        'No nitrous oxide systems allowed'
      ],
      requirements: [
        'Valid driver\'s license or ATV certification',
        'Safety gear (helmet, gloves, boots)',
        'Vehicle inspection required',
        'Minimum age: 16 years old'
      ],
      restrictions: [
        'No alcohol or drugs before or during racing',
        'Must follow all track safety rules',
        'ATV must pass technical inspection'
      ]
    },
    {
      id: 'atv-trail',
      name: 'ATV Trail',
      description: 'Trail ATVs competing in a more recreational racing environment.',
      image: '/images/atv-trail.jpg',
      rules: [
        'Must be a trail ATV',
        'Limited modifications allowed',
        'Safety equipment required (helmet, protective gear)',
        'Stock or near-stock configurations preferred',
        'No performance-enhancing modifications'
      ],
      requirements: [
        'Valid driver\'s license or ATV certification',
        'Safety gear (helmet, gloves, boots)',
        'Vehicle inspection required',
        'Minimum age: 16 years old'
      ],
      restrictions: [
        'No alcohol or drugs before or during racing',
        'Must follow all track safety rules',
        'ATV must pass technical inspection'
      ]
    },
    {
      id: 'junior',
      name: 'Junior Racing',
      description: 'Young racers aged 12-16 competing in age-appropriate vehicles.',
      image: '/images/junior-racing.jpg',
      rules: [
        'Age-appropriate vehicles only',
        'Parental consent required',
        'Safety equipment mandatory (helmet, protective gear)',
        'Limited speed and power restrictions',
        'Supervision required'
      ],
      requirements: [
        'Age: 12-16 years old',
        'Parental consent form',
        'Safety gear (helmet, gloves, boots, protective clothing)',
        'Vehicle inspection required',
        'Safety training completion'
      ],
      restrictions: [
        'No alcohol or drugs',
        'Must follow all track safety rules',
        'Parent or guardian must be present',
        'Vehicle must pass technical inspection'
      ]
    },
    {
      id: 'peewee',
      name: 'PeeWee Racing',
      description: 'Our youngest racers aged 6-11 in specially designed vehicles.',
      image: '/images/peewee-racing.jpg',
      rules: [
        'Specially designed vehicles only',
        'Parental consent required',
        'Safety equipment mandatory (helmet, protective gear)',
        'Strict speed and power limitations',
        'Constant supervision required'
      ],
      requirements: [
        'Age: 6-11 years old',
        'Parental consent form',
        'Safety gear (helmet, gloves, boots, protective clothing)',
        'Vehicle inspection required',
        'Safety training completion'
      ],
      restrictions: [
        'No alcohol or drugs',
        'Must follow all track safety rules',
        'Parent or guardian must be present at all times',
        'Vehicle must pass technical inspection',
        'Limited to designated areas only'
      ]
    },
    {
      id: 'open',
      name: 'Open Class',
      description: 'Unlimited modifications for the most competitive racers.',
      image: '/images/open-class.jpg',
      rules: [
        'Unlimited modifications allowed',
        'Safety equipment required (helmet, fire suit, etc.)',
        'Roll cage and safety harness mandatory',
        'No restrictions on engine modifications',
        'Nitrous oxide and other power adders allowed'
      ],
      requirements: [
        'Valid driver\'s license',
        'Extensive safety equipment (helmet, fire suit, gloves, boots)',
        'Vehicle must pass rigorous safety inspection',
        'Minimum age: 18 years old',
        'Experience in other racing classes recommended'
      ],
      restrictions: [
        'No alcohol or drugs before or during racing',
        'Must follow all track safety rules',
        'Vehicle must pass comprehensive technical inspection',
        'Safety equipment must meet NHRA standards'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Racing Classes
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              From beginners to professionals, we have racing classes for everyone. Find your perfect category and start racing!
            </p>
          </div>
        </div>
      </section>

      {/* Racing Classes Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {racingClasses.map((racingClass) => (
              <div key={racingClass.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{racingClass.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {racingClass.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {racingClass.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <CheckIcon className="h-5 w-5 mr-2 text-green-600" />
                      Key Rules
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {racingClass.rules.slice(0, 3).map((rule, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <ExclamationTriangleIcon className="h-5 w-5 mr-2 text-yellow-600" />
                      Requirements
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {racingClass.requirements.slice(0, 2).map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/classes#${racingClass.id}`}
                    className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors w-full text-center"
                  >
                    View Full Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Class Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Detailed Class Information
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Click on any class above or scroll down to see complete rules, requirements, and restrictions for each racing category.
            </p>
          </div>

          <div className="space-y-16">
            {racingClasses.map((racingClass) => (
              <div key={racingClass.id} id={racingClass.id} className="scroll-mt-20">
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {racingClass.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    {racingClass.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <CheckIcon className="h-6 w-6 mr-2 text-green-600" />
                        Rules
                      </h4>
                      <ul className="space-y-2">
                        {racingClass.rules.map((rule, index) => (
                          <li key={index} className="flex items-start text-gray-700">
                            <span className="text-green-600 mr-2 mt-1">•</span>
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <ExclamationTriangleIcon className="h-6 w-6 mr-2 text-yellow-600" />
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {racingClass.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-gray-700">
                            <span className="text-yellow-600 mr-2 mt-1">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <ExclamationTriangleIcon className="h-6 w-6 mr-2 text-red-600" />
                        Restrictions
                      </h4>
                      <ul className="space-y-2">
                        {racingClass.restrictions.map((restriction, index) => (
                          <li key={index} className="flex items-start text-gray-700">
                            <span className="text-red-600 mr-2 mt-1">•</span>
                            {restriction}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Choose Your Class?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Find the perfect racing category for your skill level and vehicle. Still have questions? Contact us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              View Schedule
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