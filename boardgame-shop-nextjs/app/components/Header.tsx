import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (

    <section className='flex justify-content p-5 space-x-4'>
        <div>
            <Link href="/">Home</Link>
        </div>
        <div>
            <Link href="/games">Games</Link>
        </div>
        <div>
            <Link href="/">About</Link>
        </div>
        <div>
            <Link href="/">Shop</Link>
        </div>

    </section>
  )
}

export default Header