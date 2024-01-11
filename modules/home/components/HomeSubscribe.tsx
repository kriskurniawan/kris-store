'use client'

import { InputField } from '@/common/components/elements/InputField'
import React from 'react'
import { Icon } from '@iconify/react';
import { Button } from '@/common/components/elements/Button';

const HomeSubscribe = () => {
    return (
        <>
            <div className='hidden lg:block w-full h-56 bg-gray-200'>
                <div className='flex flex-col justify-center items-center p-10 gap-3'>
                    <span className='text-4xl font-semibold'>Subscribe to our newsletter</span>
                    <span className='text-lg font-normal'>Get all the latest information on sales, offers and more</span>
                    <div className="flex relative gap-3">
                        <InputField 
                        type="text" 
                        name="subscribe" 
                        id="subscribe" 
                        placeholder='Email' 
                        className="w-96 h-12 rounded-lg border border-slate-300 bg-slate-100 pl-12" />
                        <Icon icon="lucide:mail" width="24" height="24" className="absolute left-3 top-3 text-slate-400"/>
                        <Button className="w-36 h-12 bg-blue-600 rounded-lg text-white">Subscribe</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSubscribe