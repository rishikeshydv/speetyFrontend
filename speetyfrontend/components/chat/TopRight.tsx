import React from "react";

export default function TopRight() {
  //use realtime firebase to get the status
  var onlineStatus = "•Online";
  //parse these personal information while clicking on them on the left side
  //no need to hardcode them
  var user = "Mary";
  var imageUrl = "/old-woman.png";
  return (
//  <div className={`fixed flex bg-gray-200 rounded-3xl shadow-lg h-40 right-10 top-10 flex-grow`}>
<div className={`fixed flex bg-gray-200 rounded-3xl shadow-lg h-40`}>   
      <div className="flex items-center px-5 py-5 mt-5">
        <img
          src="/user.png"
          alt="Image description"
          className="w-30 h-20 rounded-full ml-5"
        />
        <div className="flex flex-col">
        <h2 className="text-4xl font-semibold text-gray-800 ml-5">{user}</h2>
        <h3 className="text-green-600 ml-5 font-bold">{onlineStatus}</h3>
        </div>
        <img
          src="/facetime.png"
          alt="Image description"
          className="w-30 h-20 rounded-full ml-40"
        />

<img
          src="/map.png"
          alt="Image description"
          className="w-30 h-20 rounded-full ml-9"
        />

<img
          src="/about.png"
          alt="Image description"
          className="w-30 h-20 rounded-full ml-12"
        />
      </div>
    </div>
  );
}
