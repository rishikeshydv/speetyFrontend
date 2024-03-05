"use client"
import React,{useState} from 'react'
import poppins from "@/font/font";
import SearchBar from '@/components/SearchBar';
import PropertyProp from '@/services/property/PropertyProp';


export default function Property() {
    //write a logic to run a query on the database and retrieve the results
    //use the PropertyProp for each returns
  return (
    <div className={poppins.className}>
        <SearchBar/>
        <div className='mt-4 ml-4'>
        <PropertyProp 
         videoUrl= '/house.jpeg'
         price= '$100,000'
         beds= '5'
         baths= '3'
         houseType= 'Condo'
         address= '43 Roseland Ave, Caldwell, NJ, 07006'
         listedBy= 'Speety Realty Office'
        />
        </div>
    </div>
  )
}
