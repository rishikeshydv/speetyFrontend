import React from 'react';

const LeftmostBar = () => {
  return (

    // <div className={`fixed flex flex-col h-screen left-12`}>
    <div> 
    <div className="flex-grow bg-black w-40 mx-auto my-10 rounded-2xl shadow-lg">
        <div className='mt-40'>
    <img
            src="/speety_logo_revert.png"
            alt="Speety Logo"
            width={100}
            height={100}
            className="ml-7 mt-10"
          />
          <div>
            <img src="/profile.png" alt="user_profile" className='mt-10 ml-8' width={100} height={80} />
          </div>
          <div className='flex flex-col items-center mt-10 py-10'>
            <div><img src="/speech-balloon.png" alt="chat" width={50} height={50} /><h1 className='text-white'>Chat</h1></div>
            <div className='mt-10'><img src="/people.png" alt="people" width={50} height={50}  /><h1 className='text-white'>People</h1></div>
            <div className='mt-10'><img src="/hourglass-not-done.png" alt="requests" width={50} height={50}  /><h1 className='text-white'>Request</h1></div>
            <div></div>
          </div>
          </div>
    </div>
  </div>

  );
};

export default LeftmostBar;
