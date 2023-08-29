import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='text-center'>
        <h1 className='text-[60px]'>WIP - Winton Is Phere</h1>
        <Image className='m-auto' src='/Winton.webp' alt='Winton' width={500} height={600}/>
    </div>
  )
}

export default page;