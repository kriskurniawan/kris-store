import { Button } from '@/common/components/elements/Button'
import Link from 'next/link'
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
                <div className="bg-white w-full h-[400px] border rounded-lg">
                    <div className="flex p-5 items-center justify-center gap-3">
                        <div className="flex flex-col w-full h-full max-[1400px]:hidden">
                            <Button className='flex bg-blue-200 items-center rounded-lg'>
                                <span className='font-semibold p-2'>Automobiles</span>
                            </Button>
                            <Button className='flex items-center rounded-lg hover:bg-blue-200'>
                                <span className='p-2'>Clothes and wear</span>
                            </Button>
                            <Button className='flex items-center rounded-lg hover:bg-blue-200'>
                                <span className='p-2'>Home and interiors</span>
                            </Button>
                            <Button className='flex items-center rounded-lg hover:bg-blue-200'>
                                <span className='p-2'>Computer and tech</span>
                            </Button>
                            <Button className='flex items-center rounded-lg hover:bg-blue-200'>
                                <span className='p-2'>Tools, equipments</span>
                            </Button>
                            <Button className='flex items-center rounded-lg hover:bg-blue-200'>
                                <span className='p-2'>Sports and outdors</span>
                            </Button>
                            <Button className='flex items-center rounded-lg hover:bg-blue-200'>
                                <span className='p-2'>Animal and pets</span>
                            </Button>
                            <Button className='flex items-center rounded-lg hover:bg-blue-200'>
                                <span className='p-2'>Machinary tools</span>
                            </Button>
                            <Button className='flex items-center rounded-lg hover:bg-blue-200'>
                                <span className='p-2'>More category</span>
                            </Button>
                        </div>
                        <Link href='/'>
                            <img className='w-[2800px] h-[360px] object-fill max-[1180px]:w-[500px]' src="/assets/images/banner.png" alt="" />
                        </Link>
                        <div className="flex flex-col w-64 h-full gap-4">
                            <div className='flex flex-col p-3 w-60 h-40 bg-blue-100 rounded-lg gap-2'>
                                <div className="flex gap-2">
                                    <img src="/assets/images/avatar.png" alt="" />
                                    <div className="flex flex-col">
                                        <span>Hi, User</span>
                                        <span className='text-sm'>Lets get started</span>
                                    </div>
                                </div>
                                <Button className='w-full h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>Join now</Button>
                                <Button className='w-full h-10 bg-white text-blue-600 rounded-lg border hover:bg-blue-700 hover:text-white'>Log in</Button>
                            </div>
                            <Link href='/' className='flex p-3 w-60 h-20 bg-orange-500 rounded-lg gap-2 hover:bg-orange-600'>
                                <div className="flex flex-wrap">
                                    <span className='text-lg text-white'>Get US $10 off with a new supplier</span>
                                </div>
                            </Link>
                            <Link href='/' className='flex p-3 w-60 h-20 bg-[#55BDC3] rounded-lg gap-2 hover:bg-cyan-600'>
                                <div className="flex flex-wrap">
                                    <span className='text-lg text-white'>Send quotes with supplier preferences</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner