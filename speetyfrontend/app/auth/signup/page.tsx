"use client"

import React from 'react'
import Typist from "react-typist-component";
import poppins from "@/font/font";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillYahoo } from "react-icons/ai";
import { FaMicrosoft } from "react-icons/fa6";
import Header from '@/components/Header';

export default function SignUp() {
  return (
    <div className={poppins.className}>
        <div className={`fixed bottom-32 top-32 left-1/3 right-1/3 flex flex-col items-center justify-center bg-gray-100 shadow-sm rounded-2xl`}>{/* This div is for the right side of the page */}
      <img
            src="/speety_logo.png"
            alt="Speety Logo"
            width={250}
            height={130}
            className="py-4"
          />
          <h1 className="text-xl text-gray-400"><Typist> Begin the journey with us ...</Typist></h1>
        <button className="bg-gray-300 rounded-xl w-96 h-16 mt-4 text-2xl font-bold"><div className="flex flex-row items-center px-5"><AiFillGoogleCircle className="w-12 h-12"/><p className="ml-5">Continue with Google</p></div></button>
        <button className="bg-gray-300 rounded-xl w-96 h-16 mt-2 text-2xl font-bold"><div className="flex flex-row items-center px-5"><AiFillYahoo className="w-16 h-16"/><p className="ml-2">Continue with Yahoo</p></div></button>
        <button className="bg-gray-300 rounded-xl w-96 h-16 mt-2 text-2xl font-bold"><div className="flex flex-row items-center px-5"><FaMicrosoft className="w-10 h-10"/><p className="ml-2">Continue with Microsoft</p></div></button>
        <div className="flex flex-row gap-2 items-center">
            {/* This is for the horizontal line */}
            <hr className="mt-3 border-gray-400 border-2 flex-grow w-44"/>
            <p className="text-gray-500 text-xl mt-3 ">Or</p>
            <hr className="border-2 border-gray-400 mt-3 flex-grow w-44"/>
        </div>
        <div className="flex flex-col">
        <label className="block uppercase tracking-wide text-lg font-semibold text-gray-800">Email</label>
        <input type="text" required className="rounded-md bg-gray-200 h-16 w-96" />
        <label className="block uppercase tracking-wide text-lg font-semibold text-gray-800">Name</label>
        <input type="text" required className="rounded-md bg-gray-200 h-16 w-96" />
        <label className="block uppercase tracking-wide text-lg font-semibold text-gray-800">Password</label>
        <input type="text" required className="rounded-md bg-gray-200 h-16 w-96" />
        <label className="block uppercase tracking-wide text-lg font-semibold text-gray-800">Confirm Password</label>
        <input type="text" required className="rounded-md bg-gray-200 h-16 w-96" />
        <a href="#" className="mt-2 text-gray-500">Password must be 8 characters in length. </a>
        <p className=" text-gray-500">Must contain an uppercase letter, a lowercase </p>
        <p className=" text-gray-500">letter, one number and one special character.</p>
        <button className="bg-gray-900 text-white mt-2 rounded-md h-12 w-96 font-bold text-xl">Get Started</button>
        <h3 className="mt-2 text-center text-xl">Already have an account <a href="#" className="text-blue-600">Login!</a></h3>
        </div>
      </div>
    </div>
  )
}
