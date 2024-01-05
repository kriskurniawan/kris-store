import Link from 'next/link'
import React from 'react'

const CartHeader = () => {
    return (
        <>
            <header className='sticky top-0 z-50'>
                <div className="p-5 w-full h-16 flex items-center justify-between bg-white">
                    <div className="flex items-center gap-5">
                        <Link href="/products">
                            <img src="/assets/icons/arrow_back.svg" alt="" />
                        </Link>
                        <span className='font-semibold'>Shopping cart</span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default CartHeader