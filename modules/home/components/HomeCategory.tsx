'use client'

import { Button } from '@/common/components/elements/Button'
import React from 'react'
import { CATEGORIES } from '@/common/constant/categories'
import Link from 'next/link'
import { Icon } from '@iconify/react';

const HomeCategory = () => {
    return (
        <>
            <div className='ml-5 overflow-x-auto relative'>
                <div className='inline-flex py-3 gap-3 lg:hidden'>
                    <Link href='/products'>
                        <Button
                            className='w-32 h-10 bg-slate-100 border border-slate-300 rounded-lg text-blue-400'>
                            All Categories
                        </Button>
                    </Link>
                    {CATEGORIES.map((category, index) => (
                        <Button
                            key={index}
                            className='max-w-full h-10 bg-slate-100 border border-slate-300 rounded-lg text-blue-400 p-2'>
                            {category.name}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="hidden lg:flex w-full h-14 border-t border-b bg-white items-center px-32 justify-between fixed z-20">
                <div className="flex gap-3">
                    <div className="flex hover:bg-blue-200 rounded-md p-1 cursor-pointer">
                        <Icon icon="lucide:menu" width="24" height="24" />
                        <span className='ml-2'>All Categories</span>
                    </div>
                    <div className="flex gap-5 max-[1160px]:hidden">
                        <Link href='/' className='hover:bg-blue-200 rounded-md p-1'>Hot offers</Link>
                        <Link href='/' className='hover:bg-blue-200 rounded-md p-1'>Gift boxes</Link>
                        <Link href='/' className='hover:bg-blue-200 rounded-md p-1'>Projects</Link>
                        <Link href='/' className='hover:bg-blue-200 rounded-md p-1'>Menu items</Link>
                        <div className="flex hover:bg-blue-200 rounded-md p-1 cursor-pointer">
                            <span className='ml-2'>Help</span>
                            <Icon icon="lucide:chevron-down" width="24" height="24" />
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <Button className="flex hover:bg-blue-200 rounded-md p-1">
                        <span>English, USD</span>
                        <Icon icon="lucide:chevron-down" width="24" height="24" />
                    </Button>
                    <Button className="flex items-center hover:bg-blue-200 rounded-md p-1">
                        <span>Ship to </span>
                        <img className='mx-1 w-6 h-4' src="/assets/icons/germany.png" alt="" />
                        <Icon icon="lucide:chevron-down" width="24" height="24" />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default HomeCategory