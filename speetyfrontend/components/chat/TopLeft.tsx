import React from 'react'

export default function TopLeft() {
  return (
<div className="bg-gray-100 rounded-lg shadow-lg">
      <div className="flex items-center p-4">
        <img
          src=""
          alt="Image description"
          className="w-16 h-16 rounded-full mr-4"
        />
        <h2 className="text-xl font-semibold text-gray-800">title</h2>
      </div>
      <div className="border-t p-4">
        <div className="flex items-center border-b pb-2">
          <svg
            className="w-6 h-6 text-gray-400 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 8L21 12L15 16M6 5L10 9L15 4Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Search..."
          />
        </div>
        <p className="text-gray-600 mt-2">description</p>
      </div>
    </div>

  )
}
