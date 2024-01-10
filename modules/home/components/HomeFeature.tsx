import { Button } from '@/common/components/elements/Button'
import React from 'react'

const HomeFeature = () => {
    return (
        <>
            <div className='lg:hidden'>
                <div className='bg-white mb-3'>
                    <div className="p-3 flex justify-items-center">
                        <span className='font-semibold'>Home and outdoor</span>
                    </div>
                    <div className='relative overflow-x-auto'>
                        <div className="flex">
                            <div className="flex shrink-0 h-56 w-44 border relative">
                                <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704252318/kris-store/ipgpubzf62fl7uagkuzt.jpg" alt="" />
                                    <span className='text-center'>Clothes</span>
                                    <span className='text-center font-normal text-sm text-slate-500'>Form USD 19</span>
                                </div>
                            </div>
                            <div className="flex shrink-0 h-56 w-44 border relative">
                                <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704252486/kris-store/s2ik2gdqjvgxid3wlhyx.png" alt="" />
                                    <span className='text-center'>Clothes</span>
                                    <span className='text-center font-normal text-sm text-slate-500'>Form USD 19</span>
                                </div>
                            </div>
                            <div className="flex shrink-0 h-56 w-44 border relative">
                                <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704252372/kris-store/vi6fecnlexutmwxtfsoy.png" alt="" />
                                    <span className='text-center'>Clothes</span>
                                    <span className='text-center font-normal text-sm text-slate-500'>Form USD 19</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 flex justify-items-center gap-3 border">
                        <span className='font-semibold text-blue-600'>Source now</span>
                        <img src="/assets/icons/arrow_forward.svg" alt="" style={{ fill: 'blue' }} />
                    </div>
                </div>
                <div className='bg-white mb-3'>
                    <div className="p-3 flex justify-items-center">
                        <span className='font-semibold'>Consumer electronics</span>
                    </div>
                    <div className='relative overflow-x-auto'>
                        <div className="flex">
                            <div className="flex shrink-0 h-56 w-44 border relative">
                                <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256590/kris-store/msftp0eeck4oablglala.png" alt="" />
                                    <span className='text-center'>Clothes</span>
                                    <span className='text-center font-normal text-sm text-slate-500'>Form USD 19</span>
                                </div>
                            </div>
                            <div className="flex shrink-0 h-56 w-44 border relative">
                                <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256589/kris-store/sxev2grn5nyhtnqqaucp.png" alt="" />
                                    <span className='text-center'>Clothes</span>
                                    <span className='text-center font-normal text-sm text-slate-500'>Form USD 19</span>
                                </div>
                            </div>
                            <div className="flex shrink-0 h-56 w-44 border relative">
                                <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256590/kris-store/kyfbnsl6sch5ophxz445.png" alt="" />
                                    <span className='text-center'>Clothes</span>
                                    <span className='text-center font-normal text-sm text-slate-500'>Form USD 19</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 flex justify-items-center gap-3 border">
                        <span className='font-semibold text-blue-600'>Source now</span>
                        <img src="/assets/icons/arrow_forward.svg" alt="" style={{ fill: 'blue' }} />
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex px-32 mb-5">
                <div className="bg-white w-full h-80 border flex rounded-lg">
                    <div className="w-80 h-80 border relative bg-yellow-200 shrink-0">
                        <img className='object-cover w-80 h-80 m-auto opacity-70' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704851092/kris-store/ruuufqm9fnnivdinhi4w.jpg" alt="" />
                        <span className='absolute top-6 left-8 text-xl w-32 h-full flex flex-wrap font-semibold'>Home and outdoor</span>
                        <Button className='absolute top-24 left-8 bg-white rounded-lg max-w-full h-10 px-2'>Source now</Button>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="flex h-40 w-64 border justify-between shrink-0">
                                <div className="flex flex-col p-3">
                                    <span className='font-semibold'>Soft chairs</span>
                                    <span className='text-sm text-slate-500'>Form</span>
                                    <span className='text-sm text-slate-500'>USD 19</span>
                                </div>
                                <div className="flex flex-col p-2">
                                    <div className='w-24 h-full relative'>
                                        <img className='object-contain bottom-0 absolute' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704252486/kris-store/s2ik2gdqjvgxid3wlhyx.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-40 w-64 border justify-between shrink-0">
                                <div className="flex flex-col p-3">
                                    <span className='font-semibold'>Soft & chairs</span>
                                    <span className='text-sm text-slate-500'>Form</span>
                                    <span className='text-sm text-slate-500'>USD 19</span>
                                </div>
                                <div className="flex flex-col p-2">
                                    <div className='w-24 h-full relative'>
                                        <img className='object-contain bottom-0 absolute' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704853632/kris-store/pnpaqh62ytr9fu4wrb2k.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-40 w-64 border justify-between shrink-0">
                                <div className="flex flex-col p-3">
                                    <span className='font-semibold'>Kitchen dishes</span>
                                    <span className='text-sm text-slate-500'>Form</span>
                                    <span className='text-sm text-slate-500'>USD 19</span>
                                </div>
                                <div className="flex flex-col p-2">
                                    <div className='w-24 h-full relative'>
                                        <img className='object-contain bottom-0 absolute' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704853776/kris-store/vb1mgca2m44bnoxunzb1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HomeFeature