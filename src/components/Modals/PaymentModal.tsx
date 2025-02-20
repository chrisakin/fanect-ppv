import React from 'react';
import { PaystackButton } from 'react-paystack';

interface PaymentModalProps {
  email: string;
  onEmailChange: (email: string) => void;
  onClose: () => void;
}

export function PaymentModal({ email, onEmailChange, onClose }: PaymentModalProps) {
  const componentProps = {
    email,
    amount: 49999 * 100,
    publicKey: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    text: "Proceed to Payment",
    onSuccess: () => {
      console.log('Payment successful');
      onClose();
    },
    onClose: () => {
      console.log('Payment cancelled');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md text-white">
        <h2 className="text-2xl font-bold mb-6">Enter Your Email</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="flex space-x-3">
            {email && (
              <PaystackButton
                {...componentProps}
                className="flex-1 py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition font-medium text-white"
              />
            )}
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 rounded-lg border border-gray-600 hover:border-emerald-500 transition text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}