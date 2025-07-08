"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
function Navbar() {
    const pathname = usePathname();
    const navLinks = [
        {name : 'Movies', path: '/'},
        {name : 'Tv Shows', path: '/TvShows'}
    ]
    const isActive = (path: string) => {
        return pathname === path ? 'text-yellow-500' : 'text-white';
    }
  return (
    <div className='flex items-center justify-between bg-black text-white py-4 px-12'>
      <Link href="/">
        <h1 className='text-3xl font-bold'>Flixx</h1>
      </Link>
      
        <div className="flex justify-between items-center">
            {navLinks.map((link)=> {
                return (
                    <Link 
                        key={link.name} 
                        href={link.path} 
                        className={`mx-4 text-lg font-semibold ${isActive(link.path)} hover:text-yellow-500 transition duration-300`}
                    >
                        {link.name}
                    </Link>
                )
            })}

        </div>
    </div>
  )
}

export default Navbar
