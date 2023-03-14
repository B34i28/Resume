import Image from 'next/image'
import React from 'react'

export default function Sidebar() {
  return (
    <div className=' bg-black h-screen max-w-xs'>
      <div className='text-white flex flex-col p-10 items-center'>
        <Image className='bg-white mb-6 rounded-full h-full' height={250} width={250} alt="Bilal Afridi" src="/public/bilal.jpg" />
        <h1 className='mb-2'>Bilal Afridi</h1>
        <h2 className='mb-4'>Role</h2>
        <p className='mb-4'>Education</p>
        <p className='mb-4'>Education 2</p>
        <div>
          <h3 className='mb-4'>CONTACT ME</h3>
          <div className='flex flex-row justify-center gap-1'>
          <a href=''>Youtube</a>
          <a href=''>Linkedin</a>
          <a href=''>Facebook</a>
          <a  href=''>twitter</a>
          </div>
        </div>
      </div>
    </div>
  )
}
