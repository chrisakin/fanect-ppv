import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, MessageCircle, Share2, Heart, Volume2, Settings, Maximize2 } from 'lucide-react';

export function LiveStream() {
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [message, setMessage] = useState('');
  const [likes, setLikes] = useState(1234);
  const [viewers, setViewers] = useState(3456);

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);
  const toggleChat = () => setShowChat(!showChat);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message sending
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="bg-black/30 p-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/events" className="inline-flex items-center text-gray-400 hover:text-white">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Events
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-4">
          {/* Main Content */}
          <div className={`flex-1 ${showChat ? 'w-3/4' : 'w-full'}`}>
            {/* Video Player */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-red-500 font-semibold mb-2">LIVE</p>
                  <p className="text-sm">Stream will start soon...</p>
                </div>
              </div>

              {/* Video Controls Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-4">
                      <button onClick={toggleMute} className="hover:text-emerald-500 transition">
                        <Volume2 className="w-6 h-6" />
                      </button>
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5" />
                        <span>{viewers.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="hover:text-emerald-500 transition">
                        <Settings className="w-6 h-6" />
                      </button>
                      <button onClick={toggleFullscreen} className="hover:text-emerald-500 transition">
                        <Maximize2 className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stream Info */}
            <div className="mt-6">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-2">Live Music Festival 2024</h1>
                  <p className="text-gray-400">
                    Experience the energy and excitement of our annual music festival, streaming live from multiple stages.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => setLikes(prev => prev + 1)}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                  >
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-white">{likes.toLocaleString()}</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                    <Share2 className="w-5 h-5 text-white" />
                    <span className="text-white">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Section */}
          {showChat && (
            <div className="w-1/4 min-w-[300px] bg-gray-800 rounded-lg p-4 h-[calc(100vh-200px)] flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Live Chat</h3>
                <button onClick={toggleChat} className="text-gray-400 hover:text-white">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {/* Example messages */}
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
                    <span className="text-white text-sm">JD</span>
                  </div>
                  <div>
                    <p className="text-sm text-emerald-400">John Doe</p>
                    <p className="text-sm text-white">This is amazing! 🎉</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white text-sm">AS</span>
                  </div>
                  <div>
                    <p className="text-sm text-purple-400">Alice Smith</p>
                    <p className="text-sm text-white">Can't wait for the next performance!</p>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="mt-auto">
                <div className="relative">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-emerald-500 hover:text-emerald-400"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}