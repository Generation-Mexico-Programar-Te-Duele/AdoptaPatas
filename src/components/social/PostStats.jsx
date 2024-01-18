import React from 'react'
import Liked from '../icons/Liked'
import Like from '../icons/Like'

function PostStats() {
  return (
    <div className='flex justify-between items-center z-20'>
      <div className='flex gap-2 mr-5 items-center'>
        <Like size={25} onClick={() => { }} cursor={'cursor-pointer'} color={"#4b5563"} />
        <p className='text-[14px] font-medium leading-[140%]lg:text-[16px]'>0</p>
      </div>
    </div>
  )
}

export default PostStats