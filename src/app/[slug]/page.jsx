import Gridview from '@/components/Gridview/Gridview'
import React from 'react'

export default function page({params}) {
    const {slug} = params

  return (
    <div className=' w-full'>
        <Gridview id={slug}/>
    </div>
  )
}
