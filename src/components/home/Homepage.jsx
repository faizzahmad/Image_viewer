import { porjects } from '@/utils/data'
import Link from 'next/link'
import React from 'react'

export default function Homepage() {
  return (
    <div className='w-full h-[100vh] flex items-center gap-10'>
      <div className='w-[50%] px-10'>
       <h1 className=' headtext font-[700] text-[40px]'> F-Dev Dashboard Project Lists</h1>

       <ul className=' flex flex-col gap-4 mt-10' >
   {
    porjects.map((items,index) => (
      <li className=' context text-lg font-[400]' key={index}><Link href={items.id}> {index+1}) {items.name}  <span className=' text-sky-500 underline text-sm'> View </span></Link></li>
    ))
   }
       </ul>
      </div>

      <div className='w-[50%]'>
      <img src="./images/web/map1.gif" className='w-full' alt="" />
      </div>
    </div>
  )
}
