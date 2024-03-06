"use client"
import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function Help() {
  const [searchVal,setSearchVal] = useState<string>('')
  const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(event.target.value)
  }
  const onSubmitHandler = (event:React.FormEvent) => {
      event.preventDefault();

  }
  return (
    <div>
        <Header/>
        <div>
          <form onSubmit={onSubmitHandler} className="flex items-center">
            <input type="text" onChange={onChangeHandler} className="bg-gray-100"/>
            <button type="submit" className='bg-gray-300'>Search</button>
          </form>

        </div>
        <Footer />
    </div>
  )
}