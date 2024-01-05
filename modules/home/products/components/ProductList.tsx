import Card from '@/common/components/elements/Card'
import React from 'react'
import { PRODUCTS } from '@/common/constant/products'
import Star from '@/common/components/elements/Star'

const ProductList = () => {
    return (
        <div className="p-3">
            {PRODUCTS.map((product, index) => (
                <Card key={index} className='w-full h-28 border bg-white rounded-lg mb-2'>
                    <div className="w-full h-full flex flex-row items-center justify-center">
                        <div className="flex w-28 h-24 mx-3 items-center">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="w-full ml-3">
                            <div className="flex flex-col">
                                <span className='font-nomral'>{product.name}</span>
                                <span className='font-semibold'>${product.price}</span>
                                <div className="flex gap-2">
                                    <div className="flex item items-start">
                                        <Star count={product.rating} />
                                    </div>
                                    <div className="flex item items-start gap-1">
                                        <span className='font-sm text-orange-400'>{product.rating}</span>
                                        <img className='m-auto' src="/assets/icons/dot.svg" alt="" />
                                        <span className='font-sm text-slate-400'>154 orders</span>
                                    </div>
                                </div>
                                <span className='font-sm text-green-500'>Free shipping</span>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default ProductList