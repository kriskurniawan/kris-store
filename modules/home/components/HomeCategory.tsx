import { Button } from '@/common/components/elements/Button'
import React from 'react'
import { CATEGORIES } from '@/common/constant/categories'
import Link from 'next/link'

const HomeCategory = () => {
    return (
        <div className='ml-5 overflow-x-auto relative'>
            <div className='inline-flex py-3 gap-3'>
                <Link href='/products'>
                    <Button
                        className='w-32 h-10 bg-slate-100 border border-slate-300 rounded-lg text-blue-400'>
                        All Categories
                    </Button>
                </Link>
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