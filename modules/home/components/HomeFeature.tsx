import React from 'react'

const HomeFeature = () => {
    return (
        <>
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
        </>
    )
}

export default HomeFeature