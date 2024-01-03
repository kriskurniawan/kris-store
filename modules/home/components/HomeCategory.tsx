import { Button } from '@/common/components/elements/Button'
import React from 'react'
import { CATEGORIES } from '@/common/constant/categories'

const HomeCategory = () => {
    return (
        <div className='ml-5 overflow-x-auto relative' style={{ scrollbarWidth: 'none' }}>
            <div className='inline-flex py-5 gap-3'>
                <Button
                    className='w-32 h-10 bg-slate-100 border border-slate-300 rounded-lg text-blue-400'>
                    All Categories
                </Button>
                {CATEGORIES.map((category, index) => (
                    <Button
                        key={index}
                        className='max-w-full h-10 bg-slate-100 border border-slate-300 rounded-lg text-blue-400 p-2'>
                        {category.name}
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default HomeCategory