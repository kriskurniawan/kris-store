'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { InputField } from '../elements/InputField';
import { Button } from '../elements/Button';

function NavLink({ to, children }: any) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({ open, setOpen }: any) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-full bg-white transform ${open ? "-translate-x-0" : "-translate-x-full opacity-0"} transition-transform duration-300 ease-in-out filter drop-shadow-md`}>
            <div className="flex items-center justify-center filter bg-white h-16 shadow-sm md:hidden"> {/*logo container*/}
                <img src="/assets/icons/logo.svg" alt="" />
            </div>
            <div className='flex flex-col p-5 gap-5'>
                <div className="flex gap-2 bg-blue">
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

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className="flex filter bg-white px-5 lg:px-32 h-16 items-center sticky top-0 z-50 justify-between">
                <MobileNav open={open} setOpen={setOpen} />
                <div className="flex items-center">
                    <div className="cursor-pointer z-50 flex relative w-8 h-6 flex-col justify-between items-center lg:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "opacity-0" : ""}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                    </div>
                    <img className='ml-5 md:ml-3' src="/assets/icons/logo.svg" alt="" />
                    <div className="hidden lg:flex">
                        <InputField className='ml-10 lg:w-80 w-60 border rounded-l-lg border-blue-600 focus:border-1 h-10' type="text" name="search" id="search" placeholder="Search" />
                        <select className='border border-blue-600 focus:border-1 border-l-0 h-10 max-[1150px]:hidden flex' name="category" id="">
                            <option value="">All Categories</option>
                        </select>
                        <Button className='focus:border-1 border-l-0 h-10 bg-blue-600 text-white w-24 rounded-r-lg' type="submit">Search</Button>
                    </div>
                </div>
                <div className="hidden lg:flex items-center gap-3">
                    <div className="flex flex-col justify-center items-center h-14 w-14">
                        <Icon icon="lucide:user" width="24" height="24" />
                        <span className="text-sm">Profile</span>
                    </div>
                    <div className="flex flex-col justify-center items-center h-14 w-14 max-[1266px]:hidden">
                        <Icon icon="lucide:message-square-text" width="24" height="24" />
                        <span className="text-sm">Message</span>
                    </div>
                    <div className="flex flex-col justify-center items-center h-14 w-14 max-[1266px]:hidden">
                        <Icon icon="lucide:heart" width="24" height="24" />
                        <span className="text-sm">Orders</span>
                    </div>
                    <div className="flex flex-col justify-center items-center h-14 w-14">
                        <Icon icon="lucide:shopping-cart" width="24" height="24" />
                        <span className="text-sm">My cart</span>
                    </div>
                </div>
                <div className="flex lg:hidden items-center">
                    <div className="flex flex-col justify-center items-center h-14 w-14">
                        <Icon icon="lucide:shopping-cart" width="24" height="24" />
                    </div>
                    <div className="flex flex-col justify-center items-center h-14 w-14">
                        <Icon icon="lucide:user" width="24" height="24" />
                    </div>
                </div>
            </nav>
            <div className='lg:hidden px-5 py-2 relative'>
                <img src="/assets/icons/search.svg" alt="" className='absolute top-1/2 -translate-y-1/2 ml-3' style={{ filter: 'brightness(4) invert(1)' }} />
                <InputField
                    type="text"
                    name="search"
                    id="search"
                    placeholder='Search'
                    className="w-full h-10 rounded-lg border border-slate-300 bg-slate-100 pl-10"
                />
            </div>
        </>
    )
}

export default Header