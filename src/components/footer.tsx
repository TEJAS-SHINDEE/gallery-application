import React from 'react'

export const Footer = () => {
  return (
    <div className='leading-8 bg-black border-t-1 text-white text-center h-28 flex items-center flex-col justify-center'>
      <p className=''>Thank you to Josh Edelson, Jenny Morgan, and Gary Sexton for the pictures.</p>
      <p>Proudly built with Next.js, Vercel, and Cloudinary. <span className='text-lg cursor-pointer font-semibold'> Clone and Deploy today. </span></p>
    </div>
  )
}
