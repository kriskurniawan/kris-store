'use client'

import React from 'react'
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <>
            <div className='flex flex-row gap-5 h-12 w-full border sticky bottom-0 z-50 bg-white lg:hidden'>
                <div className="flex flex-col m-auto">
                    <img className='h-4 w-14' src="/assets/icons/home.svg" alt="" />
                    <span className='text-center text-sm'>Home</span>
                </div>
                <div className="flex flex-col m-auto">
                    <img className='h-4 w-14' src="/assets/icons/grid_view.svg" alt="" />
                    <span className='text-center text-sm'>Menu</span>
                </div>
                <div className="flex flex-col m-auto">
                    <img className='h-4 w-14' src="/assets/icons/account_circle.svg" alt="" />
                    <span className='text-center text-sm'>Account</span>
                </div>
                <div className="flex flex-col m-auto">
                    <img className='h-4 w-14' src="/assets/icons/settings.svg" alt="" />
                    <span className='text-center text-sm'>Settings</span>
                </div>
            </div>
            <div className="hidden lg:flex bg-white w-full h-56 justify-center items-center">
                <div className="flex gap-16">
                    <div className="flex h-full w-72 py-5">
                        <div className="flex flex-col gap-3">
                            <img className='h-12 w-32' src="/assets/icons/logo.svg" alt="" />
                            <div className="flex flex-wrap w-full h-12">
                                <span>Best information about the company gies here but now lorem ipsum is</span>
                            </div>
                            <div className="flex gap-3">
                                <div className="bg-slate-400 rounded-full p-2 text-white">
                                    <Icon icon="lucide:facebook" width="20" height="20" />
                                </div>
                                <div className="bg-slate-400 rounded-full p-2 text-white">
                                    <Icon icon="lucide:twitter" width="20" height="20" />
                                </div>
                                <div className="bg-slate-400 rounded-full p-2 text-white">
                                    <Icon icon="lucide:linkedin" width="20" height="20" />
                                </div>
                                <div className="bg-slate-400 rounded-full p-2 text-white">
                                    <Icon icon="lucide:instagram" width="20" height="20" />
                                </div>
                                <div className="bg-slate-400 rounded-full p-2 text-white">
                                    <Icon icon="lucide:youtube" width="20" height="20" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full w-28 py-5">
                        <div className="flex flex-col">
                            <span className='font-semibold mb-2'>About</span>
                            <span className='text-slate-400'>About Us</span>
                            <span className='text-slate-400'>Find store</span>
                            <span className='text-slate-400'>Categories</span>
                            <span className='text-slate-400'>Blogs</span>
                        </div>
                    </div>
                    <div className="flex h-full w-28 py-5">
                        <div className="flex flex-col">
                            <span className='font-semibold mb-2'>Partnership</span>
                            <span className='text-slate-400'>About Us</span>
                            <span className='text-slate-400'>Find store</span>
                            <span className='text-slate-400'>Categories</span>
                            <span className='text-slate-400'>Blogs</span>
                        </div>
                    </div>
                    <div className="flex h-full w-28 py-5">
                        <div className="flex flex-col">
                            <span className='font-semibold mb-2'>Information</span>
                            <span className='text-slate-400'>Help Center</span>
                            <span className='text-slate-400'>Money Refund</span>
                            <span className='text-slate-400'>Shipping</span>
                            <span className='text-slate-400'>Contact Us</span>
                        </div>
                    </div>
                    <div className="flex h-full w-28 py-5">
                        <div className="flex flex-col">
                            <span className='font-semibold mb-2'>For Users</span>
                            <span className='text-slate-400'>Login</span>
                            <span className='text-slate-400'>Register</span>
                            <span className='text-slate-400'>Settings</span>
                            <span className='text-slate-400'>My Orders</span>
                        </div>
                    </div>
                    <div className="flex h-full w-28 py-5">
                        <div className="flex flex-col">
                            <span className='font-semibold mb-2'>Get App</span>
                            <span className='text-slate-400'>Apple Store</span>
                            <span className='text-slate-400'>Google Play</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex bg-gray-200 w-full h-16">
                <div className="flex w-full h-full mx-32 gap-16 justify-between">
                    <div className="flex items-center">
                        <span className='text-slate-400'>© 2023 Kris Store</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                        <img className='w-8' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704944100/kris-store/rbn4ilulffnzpkqkttu3.png" alt="" />
                        <span>English</span>
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer