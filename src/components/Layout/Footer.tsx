import React from 'react';
import { Play } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/30 mt-20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Play className="w-6 h-6 text-emerald-500" />
            <span className="font-bold">FaNect</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}