function GetStarted() {
  return (
    <div className='h-screen'>
      <h3 className='text-center text-2xl font-semibold pb-4'>
        Getting started is easy
      </h3>
      <p className='pb-4 text-center text-sm'>
        Earn Stars and get rewarded in a few easy steps
      </p>

      <ul>
        <li className=''>
          <div className='flex justify-start text-center items-center px-4 gap-4 pb-2'>
            <span>
              <img
                className='pt-2'
                src='https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg'
                width={'45'}
              />
            </span>
            <h4 className='font-semibold'>Download the Starbucks® app</h4>
          </div>
          <p className='ml-11 px-8 text-sm'>
            <a href='#' className='underline text-green'>
              Join in the app
            </a>{' '}
            to get access to the full range of Starbucks® Rewards benefits. You
            can also{' '}
            <a href='#' className='underline text-green'>
              join online
            </a>
            .
          </p>
        </li>
        <li className=''>
          <div className='flex justify-start text-center items-center px-4 gap-4 pb-2'>
            <span>
              <img
                src='https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg'
                width={'45'}
              />
            </span>
            <h4 className='font-semibold'>Order and pay how you’d like</h4>
          </div>
          <p className='ml-11 px-8 text-sm'>
            Order and pay how you’d like Use cash, credit/debit card or save
            some time and pay right through the app. You’ll collect Stars all
            ways.{' '}
            <a href='#' className='underline text-green'>
              Learn how
            </a>
            .
          </p>
        </li>
        <li className=''>
          <div className='flex justify-start text-center items-center px-4 gap-4 pb-2'>
            <span>
              <img
                src='https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg'
                width={'45'}
              />
            </span>
            <h4 className='font-semibold'>Earn Stars, get Rewards</h4>
          </div>
          <p className='ml-11 px-8 text-sm'>
            As you earn Stars, you can redeem them for Rewards—like free food,
            drinks, and more. Start redeeming with as little as 25 Stars!
          </p>
        </li>
      </ul>
    </div>
  )
}

export default GetStarted
