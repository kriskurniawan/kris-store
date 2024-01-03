import React from 'react'

const HomeDeals = () => {
    return (
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
    )
}

export default HomeDeals