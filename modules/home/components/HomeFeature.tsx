import React from 'react'

const HomeFeature = () => {
    return (
        <div className='bg-white mb-3'>
            <div className="p-4 flex justify-items-center">
                <span className='font-semibold'>Home and Outdoor</span>
            </div>
            <div className='relative overflow-x-auto'>
                <div className="inline-flex">
                    <div className="flex h-56 w-44 border relative">
                        <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <img className='w-[98px] h-[98px]' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704252318/kris-store/ipgpubzf62fl7uagkuzt.jpg" alt="" />
                            <span className='text-center'>Clothes</span>
                            <span className='min-w-max p-1 text-center rounded-full bg-red-200 text-red-600 font-semibold'>-25%</span>
                        </div>
                    </div>
                    <div className="flex h-56 w-44 border relative">
                        <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <img className='w-[98px] h-[98px]' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704252486/kris-store/s2ik2gdqjvgxid3wlhyx.png" alt="" />
                            <span className='text-center'>Clothes</span>
                            <span className='min-w-max p-1 text-center rounded-full bg-red-200 text-red-600 font-semibold'>-25%</span>
                        </div>
                    </div>
                    <div className="flex h-56 w-44 border relative">
                        <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <img className='w-[98px] h-[98px]' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704252372/kris-store/vi6fecnlexutmwxtfsoy.png" alt="" />
                            <span className='text-center'>Clothes</span>
                            <span className='min-w-max p-1 text-center rounded-full bg-red-200 text-red-600 font-semibold'>-25%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 flex justify-items-center gap-3">
                <span className='font-semibold text-blue-600'>Source now</span>
                <img src="/assets/icons/arrow_forward.svg" alt="" style={{ fill: 'blue' }} />
            </div>
        </div>
    )
}

export default HomeFeature