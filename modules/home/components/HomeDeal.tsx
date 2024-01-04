import React from 'react'

const HomeDeal = () => {
    return (
        <div className='bg-white mb-3'>
            <div className='flex justify-between p-4'>
                <div className="flex flex-col justify-items-center">
                    <span className='font-semibold'>Deals and offers</span>
                    <span className='font-normal'>Electronic equipments</span>
                </div>
                <div className="flex gap-1">
                    <div className="w-14 h-14 flex flex-col bg-slate-200 justify-center items-center">
                        <span className='font-semibold text-slate-400'>13</span>
                        <span className='font-normal text-slate-400'>Hour</span>
                    </div>
                    <div className="w-14 h-14 flex flex-col bg-slate-200 justify-center items-center">
                        <span className='font-semibold text-slate-400'>64</span>
                        <span className='font-normal text-slate-400'>Min</span>
                    </div>
                    <div className="w-14 h-14 flex flex-col bg-slate-200 justify-center items-center">
                        <span className='font-semibold text-slate-400'>56</span>
                        <span className='font-normal text-slate-400'>Sec</span>
                    </div>
                </div>
            </div>
            <div className='relative overflow-x-auto'>
                <div className="flex">
                    <div className="flex shrink-0 h-56 w-44 border relative">
                        <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704249255/kris-store/piqoxfsxygjong30kmfh.png" alt="" />
                            <span className='text-center'>Clothes</span>
                            <span className='min-w-max p-1 text-center rounded-full bg-red-200 text-red-600 font-semibold'>-25%</span>
                        </div>
                    </div>
                    <div className="flex shrink-0 h-56 w-44 border relative">
                        <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704249540/kris-store/trza0kqss8vegyjrjug0.png" alt="" />
                            <span className='text-center'>Headphones</span>
                            <span className='min-w-max p-1 text-center rounded-full bg-red-200 text-red-600 font-semibold'>-25%</span>
                        </div>
                    </div>
                    <div className="flex shrink-0 h-56 w-44 border relative">
                        <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704249657/kris-store/wnrcil5aok479mtzt1lj.png" alt="" />
                            <span className='text-center'>Laptops</span>
                            <span className='min-w-max p-1 text-center rounded-full bg-red-200 text-red-600 font-semibold'>-25%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDeal