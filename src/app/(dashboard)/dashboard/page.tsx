'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function DashboardPage() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  const isCustomer = session.user.role === 'CUSTOMER';
  const isVendor = session.user.role === 'VENDOR';

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome back, {session.user.name}!
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8">
          {isCustomer ? (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Your Events
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Manage your events and find vendors
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      Create your first event
                    </h4>
                    <p className="mt-1 text-sm text-gray-900">
                      Start by creating an event and let us match you with the perfect vendors.
                    </p>
                  </div>
                  <Link
                    href="/dashboard/events/new"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create Event
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Your Vendor Profile
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Complete your profile to get matched with events
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">
                      Set up your vendor profile
                    </h4>
                    <p className="mt-1 text-sm text-gray-900">
                      Add your business details, services, and pricing to start getting matched with events.
                    </p>
                  </div>
                  <Link
                    href="/dashboard/profile"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Complete Profile
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 