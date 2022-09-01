import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {BiSearch} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsHandbag} from 'react-icons/bs';


const Navbar = () => {
  return (
  <div className=" bg-white  flex flex-col md:flex-row md:justify-start justify-center items-center py-5 shadow-md sticky top-0 z-10">
      <Link href={"/"}><a><Image src='/myntra.png' alt='logo' height={50} width={140}></Image></a></Link>
    <nav className=" md:border-gray-400 font-bold flex flex-wrap items-center justify-center text-lg ml-15">
    <Link href={"/men"}><a className="mr-7 hover:text-gray-900 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">MEN</a></Link>
    <Link href={"/women"}><a className="mr-7 hover:text-gray-900 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">WOMEN</a></Link>
    <Link href={"/kids"}><a className="mr-7 hover:text-gray-900 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">KIDS</a></Link>
    <Link href={"/living"}><a className="mr-7 hover:text-gray-900 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">HOME AND LIVING</a></Link>
    <Link href={"/beauty"}><a className="mr-7 hover:text-gray-900 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">BEAUTY</a></Link>
    <Link href={"#"}><a className="mr-7 hover:text-gray-900 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">STUDIO</a></Link>
    </nav>
    <div className="relative w-96 sm:mr-2rem mr-2rem mx-24 mb-2 mt-3" >
   <BiSearch className='absolute mt-4 ml-3' />
   <input className="placeholder:italic placeholder:text-slate-400 block bg-white h-11 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder= "Search for products, brands and more" type="text" name="search"/>
        </div >
        <div className='flex space-x-8 mb-2'>
        <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 text-slate-800 cursor-pointer">
          <CgProfile  class="h-6 w-6 ml-2" />
          <p className='font-normal absolute text-sm'>Profile</p>
        </div>
        <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 text-slate-800 cursor-pointer">
        <AiOutlineHeart className="h-6 w-6 ml-2" />
          <p className='font-normal absolute  text-sm'>Wishlist</p>
          </div>
          <div className=" transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 text-slate-800 cursor-pointer">
        <BsHandbag className="h-6 w-6" />
          <p className='font-normal absolute text-sm'>Bag</p>
          </div>
          </div>
  </div>
  )
}

export default Navbar