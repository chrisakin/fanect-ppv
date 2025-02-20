import React from 'react';
import { CreditCard, Mail, Lock } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="mt-12 sm:mt-20 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2">Purchase Ticket</h3>
          <p className="text-sm sm:text-base text-gray-400">
            Buy your one-time access ticket securely through our payment system.
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2">Receive Code</h3>
          <p className="text-sm sm:text-base text-gray-400">
            Get your unique access code via email or SMS instantly.
          </p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2">Join Stream</h3>
          <p className="text-sm sm:text-base text-gray-400">
            Enter your code and enjoy high-quality live streaming content.
          </p>
        </div>
      </div>
    </section>
  );
}