import React from 'react';
import { Play, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/30 mt-12 sm:mt-20 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
              <span className="font-bold">FaNect</span>
            </div>
            <p className="text-sm text-gray-400">
              Connect with your favorite creators and experience exclusive live events.
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold mb-4">Follow Our Pages</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-white transition">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Twitter</span>
              </a>
            </div>
          </div>

          {/* Mobile Apps */}
          <div>
            <h3 className="font-semibold mb-4">Get Premium Content</h3>
            <p className="text-sm text-gray-400 mb-4">
              Download our app to access exclusive content from your favorite celebrities.
            </p>
            <div className="space-y-3">
              <a href="#" className="block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                     alt="Download on App Store" 
                     className="h-8 sm:h-10" />
              </a>
              <a href="#" className="block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                     alt="Get it on Google Play" 
                     className="h-8 sm:h-10" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Terms</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Privacy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Support</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} FaNect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}