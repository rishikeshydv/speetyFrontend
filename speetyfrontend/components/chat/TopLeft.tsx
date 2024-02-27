import React from 'react'

export default function TopLeft() {
  return (
//<div className={`fixed flex flex-col items-center bg-gray-200 rounded-3xl shadow-lg w-100 h-40 ml-60 top-10`}>
<div  className={`fixed bg-gray-200 rounded-3xl shadow-lg w-100 h-40`}>
      <div className="flex items-center px-5 py-5 mt-5">
      <h2 className="text-4xl font-semibold text-gray-800 ml-5">Chat</h2>
      <input
            type="text"
            className="w-80 h-16 ml-5 px-4 py-2 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Search..."
          />
        <img
          src="/add.webp"
          alt="Image description"
          className="w-12 h-12 rounded-full ml-5"
        />
      </div>
    </div>

  )
}
