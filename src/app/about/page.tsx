import Image from 'next/image'

const teamMembers = [
  {
    name: 'Mike Johnson',
    role: 'Founder & President',
    bio: 'With over 20 years of racing experience, Mike founded New England Sand Drags to bring the excitement of sand drag racing to the Northeast.',
    image: '/images/team/mike.jpg'
  },
  {
    name: 'Sarah Williams',
    role: 'Event Director',
    bio: 'Sarah oversees all event operations, ensuring every race day runs smoothly and safely for participants and spectators.',
    image: '/images/team/sarah.jpg'
  },
  {
    name: 'Tom Rodriguez',
    role: 'Track Manager',
    bio: 'Tom maintains our world-class sand drag track, ensuring optimal racing conditions and safety standards.',
    image: '/images/team/tom.jpg'
  },
  {
    name: 'Lisa Chen',
    role: 'Marketing Director',
    bio: 'Lisa handles all marketing and communications, helping grow our community and promote the sport of sand drag racing.',
    image: '/images/team/lisa.jpg'
  }
]

const values = [
  {
    title: 'Safety First',
    description: 'We prioritize the safety of all participants, spectators, and staff at every event.',
    icon: '🛡️'
  },
  {
    title: 'Community',
    description: 'Building a strong, inclusive community of racing enthusiasts and families.',
    icon: '🤝'
  },
  {
    title: 'Excellence',
    description: 'Striving for excellence in track conditions, event organization, and customer service.',
    icon: '⭐'
  },
  {
    title: 'Innovation',
    description: 'Continuously improving our facilities and events to provide the best racing experience.',
    icon: '🚀'
  }
]

const milestones = [
  {
    year: '2018',
    title: 'Founded',
    description: 'New England Sand Drags was established with a vision to bring sand drag racing to the Northeast.'
  },
  {
    year: '2019',
    title: 'First Event',
    description: 'Successfully hosted our inaugural racing event with over 200 participants and 1,000 spectators.'
  },
  {
    year: '2020',
    title: 'Track Expansion',
    description: 'Expanded our facility with additional racing lanes and improved spectator areas.'
  },
  {
    year: '2021',
    title: 'Championship Series',
    description: 'Launched our annual championship series with multiple race categories and point standings.'
  },
  {
    year: '2022',
    title: 'National Recognition',
    description: 'Gained recognition as one of the premier sand drag racing facilities in the Northeast.'
  },
  {
    year: '2023',
    title: 'Community Growth',
    description: 'Reached over 5,000 registered racers and 50,000 annual spectators.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl">Bringing the excitement of sand drag racing to New England since 2018</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            New England Sand Drags is dedicated to providing the ultimate sand drag racing experience 
            for enthusiasts of all skill levels. We strive to create a safe, exciting, and inclusive 
            environment where racers can push their limits and families can enjoy thrilling entertainment.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our History</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24 h-24 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                  {/* Member image would go here */}
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-orange-100">Years of Excellence</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <p className="text-orange-100">Registered Racers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <p className="text-orange-100">Annual Spectators</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-orange-100">Events Hosted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-xl text-gray-600 mb-8">
          Whether you're a seasoned racer or just getting started, we welcome you to be part of our growing community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors">
            Register to Race
          </button>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors border border-orange-600">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
} 