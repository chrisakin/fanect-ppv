import React, { useState } from 'react';
import { User, CreditCard, Calendar, Settings, Camera } from 'lucide-react';

type TabType = 'events' | 'profile' | 'payment' | 'settings';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('events');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Profile Header */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-700 overflow-hidden">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <User className="w-12 h-12" />
                  </div>
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-emerald-600 p-2 rounded-full cursor-pointer hover:bg-emerald-700 transition">
                <Camera className="w-4 h-4" />
                <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
              </label>
            </div>
            <div>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-gray-400">john.doe@example.com</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('events')}
            className={`px-6 py-3 rounded-full whitespace-nowrap ${
              activeTab === 'events'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            } transition flex items-center space-x-2`}
          >
            <Calendar className="w-4 h-4" />
            <span>My Events</span>
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-3 rounded-full whitespace-nowrap ${
              activeTab === 'profile'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            } transition flex items-center space-x-2`}
          >
            <User className="w-4 h-4" />
            <span>Profile</span>
          </button>
          <button
            onClick={() => setActiveTab('payment')}
            className={`px-6 py-3 rounded-full whitespace-nowrap ${
              activeTab === 'payment'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            } transition flex items-center space-x-2`}
          >
            <CreditCard className="w-4 h-4" />
            <span>Payment</span>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-6 py-3 rounded-full whitespace-nowrap ${
              activeTab === 'settings'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            } transition flex items-center space-x-2`}
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </div>

        {/* Content Sections */}
        <div className="bg-gray-800 rounded-lg p-6">
          {activeTab === 'events' && (
            <div>
              <h2 className="text-xl font-bold mb-6">My Events</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example Event Card */}
                <div className="bg-gray-700 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
                    alt="Event"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Tech Conference 2024</h3>
                    <p className="text-sm text-gray-400 mb-4">March 15, 2024 - 8:00 PM EST</p>
                    <button className="w-full bg-emerald-600 text-white py-2 rounded-full hover:bg-emerald-700 transition">
                      Watch Stream
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div>
              <h2 className="text-xl font-bold mb-6">Profile Information</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
                    placeholder="Tell us about yourself..."
                  />
                </div>
                <button type="submit" className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition">
                  Save Changes
                </button>
              </form>
            </div>
          )}

          {activeTab === 'payment' && (
            <div>
              <h2 className="text-xl font-bold mb-6">Payment Methods</h2>
              <div className="space-y-6">
                {/* Saved Cards */}
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <CreditCard className="w-8 h-8 text-emerald-500" />
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-gray-400">Expires 12/24</p>
                      </div>
                    </div>
                    <button className="text-red-500 hover:text-red-400 transition">Remove</button>
                  </div>
                </div>

                {/* Add New Card */}
                <button className="w-full bg-gray-700 border-2 border-dashed border-gray-600 rounded-lg p-4 text-center hover:border-emerald-500 transition">
                  <CreditCard className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <span className="block text-gray-400">Add New Payment Method</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-xl font-bold mb-6">Account Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Change Password</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Current Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <button type="submit" className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition">
                      Update Password
                    </button>
                  </form>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Notification Settings</h3>
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="form-checkbox text-emerald-500" defaultChecked />
                      <span>Email notifications for upcoming events</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="form-checkbox text-emerald-500" defaultChecked />
                      <span>SMS notifications for live events</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="form-checkbox text-emerald-500" />
                      <span>Marketing communications</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Danger Zone</h3>
                  <button className="text-red-500 hover:text-red-400 transition">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}