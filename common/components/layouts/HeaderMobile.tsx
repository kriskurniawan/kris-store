'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';

function NavLink({ to, children }: any) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({ open, setOpen }: any) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-full bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md`}>
            <div className="flex items-center justify-center filter bg-white h-16 shadow-sm md:hidden"> {/*logo container*/}
                <img src="/assets/icons/logo.svg" alt="" />
            </div>
            <div className='flex flex-col p-5 gap-5'>
                <div className="flex gap-2">
                    <Icon icon="lucide:home" width="24" height="24" />
                    <Link href="/products">
                        <span className="text-lg">Home</span>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Icon icon="lucide:list" width="24" height="24" />
                    <Link href="/">
                        <span className="text-lg">Categories</span>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Icon icon="lucide:heart" width="24" height="24" />
                    <Link href="/">
                        <span className="text-lg">Favorites</span>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Icon icon="lucide:archive" width="24" height="24" />
                    <Link href="/">
                        <span className="text-lg">My Orders</span>
                    </Link>
                </div>
                <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-300" />
                <div className="flex gap-2">
                    <Icon icon="lucide:globe" width="24" height="24" />
                    <Link href="/">
                        <span className="text-lg">Indonesia | IDR</span>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Icon icon="lucide:globe" width="24" height="24" />
                    <Link href="/">
                        <span className="text-lg">Contact us</span>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Icon icon="lucide:globe" width="24" height="24" />
                    <Link href="/">
                        <span className="text-lg">About</span>
                    </Link>
                </div>
                <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-300" />
                <div className="flex gap-2">
                    <Link href="/">
                        <span className="text-lg ml-7">User agreement</span>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Link href="/">
                        <span className="text-lg ml-7">Partnership</span>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Link href="/">
                        <span className="text-lg ml-7">Privacy policy</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const HeaderMobile = () => {

    const [open, setOpen] = useState(false)

    return (
        <nav className="flex filter bg-white p-5 h-16 items-center sticky top-0 z-50 justify-between">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="flex items-center">
                <div className="cursor-pointer z-50 flex relative w-8 h-6 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "opacity-0" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>
                <img className='ml-5' src="/assets/icons/logo.svg" alt="" />
                <div className="hidden md:flex">
                    <Link href="/products">
                        <span className="ml-5">Product</span>
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <Link href="/cart">
                    <img src="/assets/icons/shopping_cart.svg" alt="" />
                </Link>
                <img src="/assets/icons/person.svg" alt="" />
            </div>
        </nav>
    )
}

export default HeaderMobile