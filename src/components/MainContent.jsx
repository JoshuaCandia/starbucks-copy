import React from 'react'

function MainContent() {
  return (
    <div
      className='h-[76vh] mb-16 flex flex-col pt-12 text-center bg-no-repeat bg-cover items-center'
      style={{
        backgroundImage:
          'url(https://www.starbucks.com/weblx/images/rewards/hero/hero-mobile_2021.jpg)',
      }}
    >
      <h2 className='flex flex-col font-semibold text-black/90 text-2xl pb-4'>
        <span>FREE COFFEE</span>
        <span>IS A TAP AWAY</span>
      </h2>
      <p className='pb-4'>Join now to start earning Rewards.</p>
      <button className='bg-green w-32 text-sm text-white font-semibold px-4 py-1 mb-2 rounded-full'>
        Join the app
      </button>
      <a href='#' className='underline font-medium'>
        Or join online
      </a>
    </div>
  )
}

export default MainContent
