'use client';

import React from "react";
import { Input, TextArea, Button } from "@/components/ui/Form";
import { CalendarIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function EventsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Events</h1>
        <p className="mt-2 text-sm text-gray-700">
          Manage upcoming and past racing events.
        </p>
      </div>

      {/* Event List */}
      <div className="bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {/* Sample Event */}
          <li>
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <CalendarIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-indigo-600">
                      Summer Sand Drag Showdown
                    </p>
                    <p className="text-sm text-gray-500">August 15, 2024</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="secondary" className="p-2">
                    <PencilIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="danger" className="p-2">
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500 line-clamp-2">
                  Join us for an exciting day of sand drag racing! Gates open at
                  8:00 AM. Multiple racing categories available.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Add Event Form */}
      <div className="mt-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add New Event
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <Input
                  label="Event Title"
                  name="title"
                  required
                  placeholder="e.g., Summer Sand Drag Showdown"
                  register={() => ({})}
                />
              </div>

              <div className="sm:col-span-2">
                <Input
                  label="Date"
                  name="date"
                  type="date"
                  required
                  register={() => ({})}
                />
              </div>

              <div className="sm:col-span-6">
                <TextArea
                  label="Description"
                  name="description"
                  required
                  placeholder="Enter event details..."
                  register={() => ({})}
                />
              </div>

              <div className="sm:col-span-4">
                <Input
                  label="Registration Link"
                  name="registrationLink"
                  type="url"
                  placeholder="https://"
                  register={() => ({})}
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary" type="submit">
                Create Event
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 