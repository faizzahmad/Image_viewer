import Gridview from '@/components/Gridview/Gridview'
import React from 'react'

export default function page({params}) {
    const {slug} = params

  return (
    <div>
        <Gridview id={slug}/>
    </div>
  )
}
