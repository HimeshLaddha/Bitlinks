import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 text-white bg-purple-700 flex justify-between px-7 items-center'>
        <Link className="logo font-bold text-lg"  href= "/">Bitlinks</Link>
        <ul className='flex justify-center gap-4 items-center'>
            <Link href= "/"><li>Home</li></Link>
            <Link href= "/about"><li>About</li></Link>
            <Link href= "/shorten"><li>Shorten</li></Link>
            <Link href= "/contact"><li>Contact Us</li></Link>

            <li className='flex gap-3'>
                <Link href="/shorten"><button className='bg-purple-400 shadow-lg px-3 py-2 rounded-lg font-bold'>Try now</button></Link>
                <Link href="/github"><button className='bg-purple-400 shadow-lg px-3 py-2 rounded-lg font-bold'>Github</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
