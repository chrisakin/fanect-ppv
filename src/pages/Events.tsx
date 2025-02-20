import React, { useState } from 'react';
import { Calendar, Play, Clock, Ticket } from 'lucide-react';

interface EventsProps {
  onPurchaseClick?: () => void;
  onWatchEvent?: () => void;
}

export function Events({ onPurchaseClick, onWatchEvent }: EventsProps) {
  const [activeSection, setActiveSection] = useState('upcoming');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <div className="bg-black/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Live & Upcoming Events</h1>
          <p className="text-gray-400 mt-2">Discover and join amazing live events</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Event Sections */}
        <div className="mb-8">
          <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveSection('upcoming')}
              className={`px-6 py-3 rounded-full ${
                activeSection === 'upcoming'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transition whitespace-nowrap`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveSection('live')}
              className={`px-6 py-3 rounded-full ${
                activeSection === 'live'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transition whitespace-nowrap`}
            >
              Live Now
            </button>
            <button
              onClick={() => setActiveSection('past')}
              className={`px-6 py-3 rounded-full ${
                activeSection === 'past'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transition whitespace-nowrap`}
            >
              Past Events
            </button>
          </div>

          {/* Event Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeSection === 'upcoming' && (
              <>
                <div className="bg-gray-800 rounded-lg overflow-hidden group hover:ring-2 hover:ring-emerald-500 transition">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
                      alt="Event"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                      ₦49,999
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-emerald-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>March 15, 2024 - 8:00 PM EST</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Tech Conference 2024</h3>
                    <p className="text-gray-400 mb-4">
                      Join industry leaders for an exclusive live event discussing the future of technology.
                    </p>
                    <button 
                      onClick={onPurchaseClick}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-emerald-600 rounded-full hover:bg-emerald-700 transition"
                    >
                      <Ticket className="w-4 h-4" />
                      <span>Get Ticket</span>
                    </button>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg overflow-hidden group hover:ring-2 hover:ring-emerald-500 transition">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"
                      alt="Event"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                      ₦29,999
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-emerald-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>March 20, 2024 - 7:00 PM EST</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Digital Art Exhibition</h3>
                    <p className="text-gray-400 mb-4">
                      Experience a virtual gallery showcasing the most innovative digital artists of our time.
                    </p>
                    <button 
                      onClick={onPurchaseClick}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-emerald-600 rounded-full hover:bg-emerald-700 transition"
                    >
                      <Ticket className="w-4 h-4" />
                      <span>Get Ticket</span>
                    </button>
                  </div>
                </div>
              </>
            )}

            {activeSection === 'live' && (
              <>
                <div className="bg-gray-800 rounded-lg overflow-hidden group hover:ring-2 hover:ring-emerald-500 transition">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea"
                      alt="Live Event"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <span>LIVE</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Live Music Festival 2024</h3>
                    <p className="text-gray-400 mb-4">
                      Experience the energy and excitement of our annual music festival, streaming live from multiple stages.
                    </p>
                    <div className="flex items-center space-x-2 text-emerald-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Started 2 hours ago</span>
                      </div>
                    </div>
                    <button 
                      onClick={onWatchEvent}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 rounded-full hover:bg-red-700 transition"
                    >
                      <Play className="w-4 h-4" />
                      <span>Watch Now</span>
                    </button>
                  </div>
                </div>
              </>
            )}

            {activeSection === 'past' && (
              <>
                <div className="bg-gray-800 rounded-lg overflow-hidden group hover:ring-2 hover:ring-emerald-500 transition">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec"
                      alt="Past Event"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      4.8k views
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-gray-400 mb-2">
                      <Clock className="w-4 h-4" />
                      <span>February 28, 2024</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">AI Summit 2024</h3>
                    <p className="text-gray-400 mb-4">
                      A groundbreaking discussion on artificial intelligence and its impact on society.
                    </p>
                    <button 
                      onClick={onWatchEvent}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                    >
                      <Play className="w-4 h-4" />
                      <span>Watch Recording</span>
                    </button>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg overflow-hidden group hover:ring-2 hover:ring-emerald-500 transition">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
                      alt="Past Event"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      3.2k views
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-gray-400 mb-2">
                      <Clock className="w-4 h-4" />
                      <span>February 15, 2024</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Startup Pitch Night</h3>
                    <p className="text-gray-400 mb-4">
                      Watch innovative startups pitch their ideas to top investors and industry experts.
                    </p>
                    <button 
                      onClick={onWatchEvent}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                    >
                      <Play className="w-4 h-4" />
                      <span>Watch Recording</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}