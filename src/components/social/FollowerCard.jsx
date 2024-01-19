import React from 'react'

function FollowerCard({ follower }) {

  const { image, name, city } = follower;
  return (

    <div class="w-full max-w-[19rem] rounded-2xl bg-white ">
      <div class="pl-4 flex flex-row gap-5 items-center justify-start py-1 ">
        <div class="">
          <div class="h-[55px] w-[55px] overflow-hidden rounded-[50%] bg-cover bg-center">
            <img class="h-[100%] w-[100%] rounded-[50%] object-cover object-center" src={image} alt="" />
          </div>
        </div>
        <div class="flex flex-col justify-center items-start ">
          <h5 class=" text-[.9rem] font-['Open_Sans_Medium'] text-main-text-color">{name}</h5>
          <p class="text-left text-[0.75rem] font-['Open_Sans_Semi'] text-gray-500">{city}</p>
        </div>
      </div>
    </div>
  )
}

export default FollowerCard