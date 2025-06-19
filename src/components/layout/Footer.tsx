import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">NE</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">New England Sand Drags</h3>
                <p className="text-orange-400 font-semibold">Premier Racing Facility</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience the thrill of high-speed sand drag racing in the heart of New England. 
              Our world-class facility offers professional racing events, multiple classes for all skill levels, 
              and a passionate community of racers and enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.369-.315-.49-.753-.49-1.243 0-.49.121-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.369.315.49.753.49 1.243 0 .49-.121.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/schedule" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Event Schedule
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Racing Classes
                </Link>
              </li>
              <li>
                <Link href="/track" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Track Information
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-orange-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="h-5 w-5 text-orange-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <p className="text-gray-300">123 Racing Lane</p>
                  <p className="text-gray-300">New England, NE 12345</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+1234567890" className="text-gray-300 hover:text-orange-400 transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-orange-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:info@nesanddrags.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                  info@nesanddrags.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 New England Sand Drags. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/safety" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Safety Guidelines
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 