"use client"
import React from 'react'
import Image from 'next/image'
import {Navbar} from '@/components/Navbar'


const page = () => {
  return (
    <div className='-mt-24'>
      <Navbar />
      <Image 
        src="/hh.avif"
        alt="hero"
        width={1000}
        height={1000}
        className='w-full h-full object-cover' />
        
    </div>
  )
}

export default page
