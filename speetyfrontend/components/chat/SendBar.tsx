import React from 'react'
import { BiPaperclip } from "react-icons/bi";
import { BsMicFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

export default function SendBar() {
  return (
    <div className='bg-gray-200'>
        <div>
         <button className={`fixed left-3`}><BiPaperclip className="mt-1 h-5 w-5 rounded-3xl transform -rotate-45" /></button>
        <input type="text" placeholder="Write Messages" className='px-10 rounded-3xl' />
        <button className={`fixed left-80`}><img src="/emoji.png" className="mt-1 mr-5 h-5 w-5 rounded-3xl" /></button>
        </div>
        <div className='flex flex-col'>
            <button className='bg-white rounded-3xl py-2 px-2'><BsMicFill /></button>
            <button className='bg-white rounded-3xl py-2 px-2'><FiSend /></button>
        </div>
    </div>
  )
}
