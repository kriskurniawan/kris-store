import { Button } from '@/common/components/elements/Button'
import React from 'react'

const HomeMask = () => {
    return (
        <>
            <div className='flex relative mb-3 lg:hidden'>
                <img className='absolute w-full h-[200px] lg:h-[300px] object-cover object-right' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256593/kris-store/yyt9xxump5e4kwxr8huj.png" alt="" />
                <div className='absolute w-full h-[200px] lg:h-[300px] z-10 bg-gradient-to-r from-blue-700 to-yellow-100 opacity-80' />
                <div className='w-full h-[200px] lg:h-[300px] z-40'>
                    <span className='absolute top-6 left-8 text-xl text-white h-[200px] lg:h-[300px]'>An easy way to send</span>
                    <span className='absolute top-12 left-8 text-xl font-semibold text-white'>requests to all suppliers</span>
                    <div className='absolute top-24 left-8'>
                        <Button
                            className='max-w-full h-10 bg-blue-600 px-2 rounded-lg text-white'
                        >
                            Send inquiry
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeMask