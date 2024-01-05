import React from 'react'

const CartItem = () => {
    return (
        <>
            <div className="flex w-full h-52 bg-white border">
                <div className="w-full flex justify-between">
                    <div className="flex p-3 gap-3">
                        <div className='flex w-20 h-20 border rounded-lg bg-slate-100 justify-center items-center p-3'>
                            <img src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256590/kris-store/wupq5u2k4ixo6s7sx5ex.png" alt="" />
                        </div>
                        <div className="w-full flex flex-col">
                            <span className='font-semibold flex flex-wrap'>T-shirts with multiple colors for men</span>
                            <span className='font-normal flex flex-wrap text-slate-400'>Size: medium, Color: blue Seller: Artel Market</span>
                        </div>
                    </div>
                    <div className="flex p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#8B96A5" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem