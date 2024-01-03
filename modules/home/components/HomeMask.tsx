import { Button } from '@/common/components/elements/Button'
import React from 'react'

const HomeMask = () => {
    return (
        <div className='flex relative mb-3'>
            <img className='object-cover' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256593/kris-store/yyt9xxump5e4kwxr8huj.png" alt="" />
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
    )
}

export default HomeMask