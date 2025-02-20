import React from 'react';
import { X } from 'lucide-react';

interface TicketModalProps {
  formData: {
    ticketEmail: string;
    ticketCode: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
}

export function TicketModal({ formData, onInputChange, onSubmit, onClose }: TicketModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-6">Enter Ticket Details</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="ticketEmail" className="block text-sm font-medium mb-1">Email Address</label>
            <input
              id="ticketEmail"
              name="ticketEmail"
              type="email"
              value={formData.ticketEmail}
              onChange={onInputChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="ticketCode" className="block text-sm font-medium mb-1">Ticket Code</label>
            <input
              id="ticketCode"
              name="ticketCode"
              type="text"
              value={formData.ticketCode}
              onChange={onInputChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
              placeholder="Enter your ticket code"
            />
          </div>
          <div className="flex space-x-3">
            <button
              type="submit"
              className="flex-1 py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition font-medium"
            >
              Watch Stream
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 rounded-lg border border-gray-600 hover:border-emerald-500 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}