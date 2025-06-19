import React from "react";
import {
  CalendarIcon,
  PhotoIcon,
  UserGroupIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const stats = [
  {
    name: "Upcoming Events",
    value: "3",
    href: "/admin/events",
    icon: CalendarIcon,
    color: "bg-blue-500",
  },
  {
    name: "Active Announcements",
    value: "5",
    href: "/admin/announcements",
    icon: MegaphoneIcon,
    color: "bg-green-500",
  },
  {
    name: "Racing Categories",
    value: "6",
    href: "/admin/categories",
    icon: UserGroupIcon,
    color: "bg-purple-500",
  },
  {
    name: "Gallery Images",
    value: "124",
    href: "/admin/gallery",
    icon: PhotoIcon,
    color: "bg-red-500",
  },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-700">
          Welcome to the New England Sand Drags admin dashboard.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link
            key={stat.name}
            href={stat.href}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow hover:shadow-lg transition-shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className={`absolute rounded-md p-3 ${stat.color}`}>
                <stat.icon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {stat.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </dd>
            <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <span className="font-medium text-indigo-600 hover:text-indigo-500">
                  View all
                  <span className="sr-only"> {stat.name}</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 