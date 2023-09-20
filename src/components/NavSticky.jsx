function NavSticky() {
  return (
    <div className='bg-greenDark flex h-12 justify-between px-4 items-center text-white'>
      <h3 className='font-bold text-[12px] flex items-center'>
        {`

        `}
        <span>STARBUCKS</span>
        <span className='text-[7px] ml-0.5 mb-1 mr-1.5'>®</span>

        <span> REWARDS</span>
      </h3>
      <button className='sm:hidden border rounded-full px-4 py-1'>
        Join the app
      </button>
    </div>
  )
}

export default NavSticky
