import { Button } from '@/common/components/elements/Button'
import React from 'react'

const HomeBanner = () => {
    return (
        <div className='relative'>
            <img src="/assets/images/banner.png" alt="" />
            <span className='absolute top-4 left-8 text-xl'>Latest trending</span>
            <span className='absolute top-10 left-8 text-xl font-semibold'>Electronic items</span>
            <div className='absolute top-1/2 left-8 -translate-y-1/2'>
                <Button
                    className='max-w-full h-10 bg-slate-100 border border-slate-600 p-2 rounded-lg font-semibold text-blue-400'
                >
                    Learn more
                </Button>
            </div>
        </div>
    )
}

export default HomeBanner