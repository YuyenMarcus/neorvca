'use client'

import Link from 'next/link'
import { useState } from 'react'

const stats = [
  {
    name: 'Total Events',
    value: '24',
    change: '+12%',
    changeType: 'positive'
  },
  {
    name: 'Active Racers',
    value: '1,247',
    change: '+8%',
    changeType: 'positive'
  },
  {
    name: 'Revenue',
    value: '$45,231',
    change: '+23%',
    changeType: 'positive'
  },
  {
    name: 'Website Visits',
    value: '12,847',
    change: '+19%',
    changeType: 'positive'
  }
]

const quickActions = [
  {
    name: 'Add New Event',
    description: 'Create a new racing event',
    href: '/admin/events',
    icon: '📅'
  },
  {
    name: 'Manage Racers',
    description: 'View and edit racer information',
    href: '/admin/racers',
    icon: '🏁'
  },
  {
    name: 'Update Schedule',
    description: 'Modify event schedule',
    href: '/admin/schedule',
    icon: '📋'
  },
  {
    name: 'Content Management',
    description: 'Edit website content',
    href: '/admin/content',
    icon: '✏️'
  }
]

const recentEvents = [
  {
    id: 1,
    name: 'Spring Championship',
    date: '2024-04-15',
    participants: 156,
    status: 'Completed'
  },
  {
    id: 2,
    name: 'Summer Series #1',
    date: '2024-05-20',
    participants: 89,
    status: 'Upcoming'
  },
  {
    id: 3,
    name: 'Night Racing Special',
    date: '2024-06-10',
    participants: 203,
    status: 'Upcoming'
  }
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your New England Sand Drags website</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Quick Add Event
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      href={action.href}
                      className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="text-2xl mr-4">{action.icon}</div>
                      <div>
                        <h3 className="font-medium text-gray-900">{action.name}</h3>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Events */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Events</h2>
                  <Link
                    href="/admin/events"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                  >
                    View All
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-medium text-gray-900">{event.name}</h3>
                        <p className="text-sm text-gray-600">{event.date} • {event.participants} participants</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          event.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {event.status}
                        </span>
                        <button className="text-gray-400 hover:text-gray-600">
                          ✏️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">System Status</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-gray-900">Website</p>
                  <p className="text-sm text-gray-600">All systems operational</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-gray-900">Database</p>
                  <p className="text-sm text-gray-600">Connected and healthy</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium text-gray-900">Email System</p>
                  <p className="text-sm text-gray-600">Sending normally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 