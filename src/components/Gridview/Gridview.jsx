"use client"
import React, { useState } from 'react'
import ReactImageGallery from 'react-image-gallery';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { projectimagePaths } from '@/utils/data';

export default function Gridview({ id }) {
  const dataimages = projectimagePaths.filter(item => item.id === id)[0].images.map((item, index) => {
    return { img: item, id: index }
  }
  )
  const projectname = projectimagePaths.filter(item => item.id === id)[0].name;


  const [getimage, setgetimage] = useState({ img: '', i: 0 });
  const viewimage = (img, i) => {
    setgetimage({ img, i })
  }

  const imageaction = (action) => {
    let i = getimage.i;
    if (action === "next-img") {
      setgetimage({
        img: dataimages.map(item => {
          return item.img
        })[i + 1], i: i + 1
      })

    }
    if (action === "previous-img") {
      setgetimage({
        img: dataimages.map(item => {
          return item.img
        })[i - 1], i: i - 1
      })
    }
    if (!action) {
      setgetimage({ img: '', i: 0 })
    }
  }


  console.log({
    "getimage" : getimage.img,
  })
  return (
    <div className={`relative ${getimage.img ? ' overflow-y-hidden' : ' overflow-y-auto'}`} >

<div className={` absolute left-0 bottom-0 w-full  bg-white p-10 lg:p-0 h-[100vh] ${getimage.img ? 'block' : 'hidden'}`}>
          <button className=' text-theme-text-color text-3xl fixed  left-1 top-[50%]' onClick={() => imageaction('previous-img')}> <FaChevronLeft /></button>
          <button onClick={() => imageaction()} className=' text-theme-text-color text-3xl fixed  right-[10px]  top-[10px]'><FaXmark /></button>
          <img src={getimage.img} className=' w-[100%]  '></img>
          <button className=' text-theme-text-color text-3xl fixed  right-1 top-[50%]' onClick={() => imageaction('next-img')}><FaChevronRight /></button>
        </div>

      <div className=' lg:p-16 p-5'>
        <h5 className=' mb-10 headtext text-[40px] font-[700] text-center'>{projectname}</h5>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter={'20px'} >
            {
              dataimages.map((items, index) => (
                <img src={items.img} key={index} className='w-full block cursor-pointer' alt="" onClick={() => viewimage(items.img, items.id)} />
              ))
            }
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}
