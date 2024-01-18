import React from 'react'
import { provisionalUserData } from '../../constants/provisionalUserData';
import PostCard from './PostCard';

function Feed() {
  return (
    <div className='w-full flex flex-col gap-5 px-5 lg:px-0 items-center border-2 border-solid border-red-400'>
      {provisionalUserData.map(user => {
        return (
          <PostCard key={user.id} user={user} />
        );
      })}
    </div>
  )
}

export default Feed