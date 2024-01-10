import { Button } from '@/common/components/elements/Button'
import React from 'react'

const HomeBanner = () => {
    return (
        <>
            <div className='flex lg:hidden relative mb-3'>
                <img className='w-full h-72' src="/assets/images/banner.png" alt="" />
                <span className='absolute top-6 left-8 text-xl'>Latest trending</span>
                <span className='absolute top-12 left-8 text-xl font-semibold'>Electronic items</span>
                <div className='absolute top-24 left-8'>
                    <Button
                        className='max-w-full h-10 bg-slate-100 border border-slate-600 px-2 rounded-lg font-semibold text-blue-400'
                    >
                        Learn more
                    </Button>
                </div>
            </div>
            <div className="hidden lg:flex px-32 mt-20 mb-5">
                <div className="bg-white w-full h-96 border rounded-lg">
                    <div className="flex p-5 items-center justify-center gap-3">
                        <div className="flex flex-col w-56 h-full gap-3 max-[1400px]:hidden">
                            <div className='flex bg-blue-100 items-center rounded-lg'>
                                <span className='font-semibold p-2'>Automobiles</span>
                            </div>
                            <div className='flex items-center rounded-lg'>
                                <span className='ml-3'>Clothes and wear</span>
                            </div>
                            <div className='flex items-center rounded-lg'>
                                <span className='ml-3'>Home and interiors</span>
                            </div>
                            <div className='flex items-center rounded-lg'>
                                <span className='ml-3'>Computer and tech</span>
                            </div>
                            <div className='flex items-center rounded-lg'>
                                <span className='ml-3'>Tools, equipments</span>
                            </div>
                            <div className='flex items-center rounded-lg'>
                                <span className='ml-3'>Sports and outdors</span>
                            </div>
                            <div className='flex items-center rounded-lg'>
                                <span className='ml-3'>Animal and pets</span>
                            </div>
                            <div className='flex items-center rounded-lg'>
                                <span className='ml-3'>Machinary tools</span>
                            </div>
                            <div className='flex items-center rounded-lg'>
                                <span className='ml-3'>More category</span>
                            </div>
                        </div>
                        <img className='px-3 max-w-full h-[340px]' src="/assets/images/banner.png" alt="" />
                        <div className="flex flex-col w-60 h-full gap-3">
                            <div className='flex flex-col p-3 w-56 h-40 bg-blue-100 rounded-lg gap-2'>
                                <div className="flex gap-2">
                                    <img src="/assets/images/avatar.png" alt="" />
                                    <div className="flex flex-col">
                                        <span>Hi, User</span>
                                        <span className='text-sm'>Lets get started</span>
                                    </div>
                                </div>
                                <Button className='w-full h-10 bg-blue-600 text-white rounded-lg'>Join now</Button>
                                <Button className='w-full h-10 bg-white text-blue-600 rounded-lg border'>Log in</Button>
                            </div>
                            <div className='flex p-3 w-56 h-20 bg-orange-500 rounded-lg gap-2'>
                                <div className="flex flex-wrap">
                                    <span className='text-lg text-white'>Get US $10 off with a new supplier</span>
                                </div>
                            </div>
                            <div className='flex p-3 w-56 h-20 bg-[#55BDC3] rounded-lg gap-2'>
                                <div className="flex flex-wrap">
                                    <span className='text-lg text-white'>Send quotes with supplier preferences</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner