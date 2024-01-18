import React from 'react'
import { Link } from 'react-router-dom'
import PostStats from './PostStats'

function PostCard({ user }) {
  return (
    <div className='bg-white rounded-3xl border border-dark-4 p-5 lg:p-7 w-full max-w-screen-sm'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <Link to={`/profile/${user.id}`}>
            <img src={user.imageUrl} alt="" className='rounded-full w-12 h-12 object-cover object-center' />
          </Link>
          <div className='flex flex-col'>
            <p className='text-[16px] font-medium leading-[140%] lg:text-[18px] lg:font-bold text-main-text-color'>{user.username}</p>
            <div className='flex justify-center items-center gap-2 text-gray-600'>
              <p className='text-[12px] font-semibold leading-[140%] lg:text-[14px] lg:font-normal'>{user.createdAt}</p>
              -
              <p className='text-[12px] font-semibold leading-[140%] lg:text-[14px] lg:font-normal'>{user.location}</p>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/posts/${user.id}`}>
        <div className='text-[14px] font-medium leading-[140%] lg:text-[16px] lg:font-medium py-5'>
          <p>{user.caption}</p>
        </div>
        <img src={user.postImage} className='h-80 xs:h-[400px] lg:h-[400px] w-full rounded-[24px] object-cover mb-5' />
      </Link>
      <PostStats />
    </div>
  )
}

export default PostCard