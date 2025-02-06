'use client';
import {  Search } from 'lucide-react'
import  { useState } from 'react'
import Link  from 'next/link';

export const Header = () => {
  const [query, setQuery] = useState<string>('');
  return (
    <div className='w-full h-24 bg-black flex items-center justify-between text-white px-8 border-b-1 border-grey-400'>
      <div className='text-3xl font-bold'>
        Image Gallery
      </div>
      <div className='flex items-center gap-10 text-2xl  self-center hidden md:inline-flex'>
      <Link href="/home">
          <p>
            Home
          </p>
        </Link>
        <Link href="/sort">
          <p>
            Sort
          </p>
        </Link>
      </div>
      <div className='flex gap-4 items-center bg-white text-black rounded-full p-2'>
        <p><Search size={20} strokeWidth={2} /></p>
        <form 
        action={`/search/${query}`}
        >
            <input className='focus:none outline-none' type="text" placeholder='Search' onChange={(e)=>{setQuery(e.target.value)}}/>
        </form>
      </div>
    </div>
  )
}
