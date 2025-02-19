import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function LiveStream() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-black/30 p-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Events
          </Link>
        </div>
      </div>

      {/* Video Player */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Stream Info */}
        <div className="mt-6">
          <h1 className="text-2xl font-bold text-white mb-2">Live Music Festival 2024</h1>
          <p className="text-gray-400">
            Experience the energy and excitement of our annual music festival, streaming live from multiple stages.
          </p>
        </div>

        {/* Chat or Additional Features can be added here */}
      </div>
    </div>
  );
}