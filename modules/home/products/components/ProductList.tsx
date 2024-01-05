import React from 'react'

const ProductList = () => {
    return (
        <div className="p-3">
            <div className='w-full h-28 border bg-white rounded-lg'>
                <div className="w-full h-full flex flex-row items-center justify-center">
                    <div className="flex w-28 h-24 mx-3 items-center">
                        <img src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256589/kris-store/sxev2grn5nyhtnqqaucp.png" alt="" />
                    </div>
                    <div className="w-full ml-3">
                        <div className="flex flex-col">
                            <span className='font-nomral'>Regular Fit Resort Shirt</span>
                            <span className='font-semibold'>$57.70</span>
                            <div className="flex gap-2">
                                <div className="flex item items-start">
                                    <img src="/assets/icons/star.svg" alt="" />
                                    <img src="/assets/icons/star.svg" alt="" />
                                    <img src="/assets/icons/star.svg" alt="" />
                                    <img src="/assets/icons/star.svg" alt="" />
                                    <img src="/assets/icons/star_border.svg" alt="" />
                                </div>
                                <div className="flex item items-start gap-3">
                                    <span className='font-sm text-orange-400'>7.5</span>
                                    <img className='m-auto' src="/assets/icons/dot.svg" alt="" />
                                    <span className='font-sm text-slate-300'>154 orders</span>
                                </div>
                            </div>
                            <span className='font-sm text-green-500'>Free shipping</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList