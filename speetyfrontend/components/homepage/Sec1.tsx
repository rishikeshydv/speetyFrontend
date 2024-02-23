"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Typist from "react-typist-component";
export default function Sec1() {
  return (
    <div>
      <section>
        {/* Here we will be adding the : LOGO, GET STARTED button */}
        <div className="flex flex-row justify-between mt-5 mb-5 mr-9">
          <img
            src="/speety_logo.png"
            alt="Speety Logo"
            width={250} // Slightly larger than original
            height={130} // Slightly larger than original
            className="ml-14"
          />

          <button className="bg-black hover:bg-gray-900 text-white py-1 px-9 rounded-2xl h-20 flex items-center space-x-2 text-2xl font-poppins">
            <span>Get started</span>
            &nbsp; &nbsp; &nbsp;
            <AiOutlineDoubleRight />
          </button>
        </div>
        {/* In this div tag, I will be adding the rolling text, slogan, and get started button */}
        <div className="flex flex-col justify-center items-center py-">
          <button className="py-1 px-4 border border-blue-200 border-opacity-20 text-blue-500 bg-blue-50 text-xl">
            <Typist>Introducing safety enhanced brokerage ...</Typist>
          </button>
          <h1 className="text-7xl font-bold flex items-center">
            <span>Selling fast, buying</span>
            &nbsp;
            <h1 className="text-transparent bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-7xl font-bold">
              smart{" "}
            </h1>
            <img
              src="/home.png"
              width={120} // Slightly larger than original
              height={60} // Slightly larger than original
              className="mb-5 ml-5"
            />
          </h1>

          <h1 className="text-black-500 font-bold text-xl flex items-center">
            <button className="py-1 px-4 border border-blue-200 border-opacity-20  bg-violet-100 ">
              Buy
            </button>
            , &nbsp;
            <button className="py-1 px-4 border border-blue-200 border-opacity-20  bg-blue-100 ">
              Sell
            </button>{" "} &nbsp;
            & &nbsp;
            <button className="py-1 px-4 border border-blue-200 border-opacity-20  bg-pink-100 ">
              Rent
            </button>{" "} &nbsp;
            with &nbsp;
            <button className="py-1 px-2 border border-blue-200 border-opacity-20  bg-gray-200 ">
              Speety
            </button>
            <img
              src="/sparkle.png"
              width={30} // Slightly larger than original
              height={20} // Slightly larger than original
              className="mb-5 ml-5"
            />
          </h1>
          <br />
          <button className="bg-black hover:bg-gray-900 text-white py-1 px-9 rounded-2xl h-20 flex items-center space-x-2 text-2xl font-poppins mb-2">
            <span>Get started</span>
            &nbsp; &nbsp; &nbsp;
            <AiOutlineDoubleRight />
          </button>
          <h1 className="text-gray-500">(No Credit Card Required)</h1>
        </div>
      </section>
    </div>
  );
}
