import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo1.svg'
const Header = () => {
  return (
   <>
   <header className='flex justify-between items-center border'>
    <img src={logo} alt="" className='ml-5 2xl:w-96 xl:w-72 lg:w-64 md:w-52 sm:w-44 w-36 ' />
        <div >
            <ul className='flex list-none mr-2 2xl:mr-16 xl:mr-8 lg:mr-6 md:mr-4 sm:mr-2   2xl:text-3xl xl:text-lg lg:text-lg md:text-xs sm:text-sm  text-md'>
                <li className='2xl:mr-20 xl:mr-12 lg:mr-10 md:mr-8 sm:mr-8 mr-4'><Link to="/">Home</Link></li>
                <li className='2xl:mr-20 xl:mr-12 lg:mr-10 md:mr-8 sm:mr-8 mr-4'><Link to="/help">Help</Link></li>
            </ul>
        </div>
   </header>
   </>
  )
}

export default Header
