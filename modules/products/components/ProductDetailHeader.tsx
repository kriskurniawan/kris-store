import Link from 'next/link'
import React from 'react'

const ProductDetailHeader = () => {
    return (
        <>
            <header className='sticky top-0 z-50'>
                <div className="p-5 w-full h-16 flex items-center justify-between bg-white">
                    <div className="flex items-center gap-5">
                        <Link href="/products">
                            <img src="/assets/icons/arrow_back.svg" alt="" />
                        </Link>
                        <span className='font-semibold'>Clothes detail</span>
                    </div>
                    <div className="flex items-center gap-5">
                        <img src="/assets/icons/shopping_cart.svg" alt="" />
                        <img src="/assets/icons/person.svg" alt="" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default ProductDetailHeader