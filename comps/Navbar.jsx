import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <h1>Kaung Phyo Wai Demo Page</h1>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog/">Blog</Link>
        </div>
    )
}

export default Navbar
