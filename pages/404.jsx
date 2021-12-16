import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {useEffect} from 'react'
const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])
    return (
        
        <div>
            <p>Not Found</p>
            <p>Go back to <Link href='/'><a>Home page</a></Link> </p>
        </div>
    )
}

export default NotFound
