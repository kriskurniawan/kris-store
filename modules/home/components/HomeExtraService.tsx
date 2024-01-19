'use client'

import React from 'react'
import { Icon } from '@iconify/react';

const HomeExtraService = () => {
    return (
        <>
            <div className='hidden lg:block mb-3'>
                <div className='flex'>
                    <span className='mb-2 font-semibold text-xl'>Our extra services</span>
                </div>
                <div className='flex gap-5'>
                    <div className="flex flex-col h-64 w-96 border rounded-lg bg-white relative">
                        <div className="flex h-40 w-full">
                            <img className='h-40 w-full object-cover rounded-t-lg' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704885258/kris-store/efhegd3jkq2xo0hfx66w.png" alt="" />
                        </div>
                        <div className="flex flex-wrap h-full w-44 p-3">
                            <span className='font-semibold'>Source from Industry Hubs</span>
                        </div>
                        <div className="flex absolute rounded-full bg-blue-200 p-3 right-5 bottom-16 border-slate-100 border-2 h-16 w-16">
                            <div className="flex m-auto">
                                <Icon icon="lucide:search" width="24" height="24" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-64 w-96 border rounded-lg bg-white relative">
                        <div className="flex h-40 w-full">
                            <img className='h-40 w-full object-cover rounded-t-lg' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704889391/kris-store/dkwmagfp6ljc4feqpb4p.png" alt="" />
                        </div>
                        <div className="flex flex-wrap h-full w-44 p-3">
                            <span className='font-semibold'>Customize Your Products</span>
                        </div>
                        <div className="flex absolute rounded-full bg-blue-200 p-3 right-5 bottom-16 border-slate-100 border-2 h-16 w-16">
                            <div className="flex m-auto">
                                <Icon icon="lucide:archive" width="24" height="24" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-64 w-96 border rounded-lg bg-white relative">
                        <div className="flex h-40 w-full">
                            <img className='h-40 w-full object-cover rounded-t-lg' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704889391/kris-store/wupsdypckqn8qbjspinn.png" alt="" />
                        </div>
                        <div className="flex flex-wrap h-full w-44 p-3">
                            <span className='font-semibold'>Fast, reliable shipping by ocean or air</span>
                        </div>
                        <div className="flex absolute rounded-full bg-blue-200 p-3 right-5 bottom-16 border-slate-100 border-2 h-16 w-16">
                            <div className="flex m-auto">
                                <Icon icon="lucide:send-horizontal" width="24" height="24" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-64 w-96 border rounded-lg bg-white relative">
                        <div className="flex h-40 w-full">
                            <img className='h-40 w-full object-cover rounded-t-lg' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704889394/kris-store/cl46sagjws2lqqixuuuf.png" alt="" />
                        </div>
                        <div className="flex flex-wrap h-full w-44 p-3">
                            <span className='font-semibold'>Product monitoring and inspection</span>
                        </div>
                        <div className="flex absolute rounded-full bg-blue-200 p-3 right-5 bottom-16 border-slate-100 border-2 h-16 w-16">
                            <div className="flex m-auto">
                                <Icon icon="lucide:shield" width="24" height="24" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeExtraService