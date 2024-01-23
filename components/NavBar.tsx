import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { CustomButton } from '.'

const Navbar = () => {
  return (
    <header className='w-full z-10'>
      <nav className='max-w-[1440px] max-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href="/" className='flex justify-center items-center'>
          <Image 
            src="/logo.svg"
            alt='Logo'
            width={59}
            height={9}
            className='object-contain'
          />
        </Link>
        {/* <CustomButton
          title='Sign In'
          btnType='button'
          containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
        /> */}
      </nav>
    </header>
  )
}

export default Navbar