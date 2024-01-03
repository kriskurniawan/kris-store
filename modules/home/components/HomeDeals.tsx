import React from 'react'

const HomeDeals = () => {
    return (
        <>
            <div className='flex justify-between p-4'>
                <div className="flex flex-col justify-items-center">
                    <span className='font-semibold'>Deals and Offers</span>
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
                <div className="inline-flex">
                    <div className="flex h-56 w-44 border relative">
                        <div className="px-7 py-4 gap-2 flex flex-col absolute">
                            <img src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704249255/kris-store/piqoxfsxygjong30kmfh.png" alt="" />
                            <span className='text-center'>Clothes</span>
                            <span className='min-w-max p-1 text-center rounded-full bg-red-200 text-red-600 font-semibold'>-25%</span>
                        </div>
                    </div>
                    <div className="flex h-56 w-44 border justify-center items-center">
                        test
                    </div>
                    <div className="flex h-56 w-44 border justify-center items-center">
                        test
                    </div>
                    <div className="flex h-56 w-44 border justify-center items-center">
                        test
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeDeals