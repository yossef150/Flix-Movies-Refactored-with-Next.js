import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram } from "lucide-react"

function Footer() {
  return (
    <div className="w-full flex justify-between bg-black text-white p-4">
        <Link href="/">
        <span className='text-3xl font-bold'>Flixx</span>
      </Link>
      <div className="flex justify-between items-center gap-3">
        <Link href="/"> <Facebook className='w-6 h-6 text-white hover:text-blue-500'/></Link>
        <Link href="/"> <Twitter className='w-6 h-6 text-white hover:text-blue-500'/></Link>
        <Link href="/"> <Instagram className='w-6 h-6 text-white hover:text-blue-500'/></Link>
      </div>
    </div>
  )
}

export default Footer
