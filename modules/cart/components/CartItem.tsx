import React from 'react'

const CartItem = () => {
    return (
        <>
            <div className="flex flex-col w-full h-50 bg-white border">
                <div className="w-full flex justify-between">
                    <div className="flex p-3 gap-3">
                        <div className='flex w-28 h-24 border rounded-lg bg-slate-100 justify-center items-center p-3'>
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
                <div className="w-full flex justify-between items-center">
                    <div className="flex p-3">
                        <button className='w-12 h-10 border border-slate-300 rounded-l-md font-semibold'>-</button>
                        <input type="text" className="w-24 h-10 border text-center border-slate-300" defaultValue="2" />
                        <button className='w-12 h-10 border border-slate-300 rounded-r-md font-semibold'>+</button>
                    </div>
                    <div className="flex p-3">
                        <span className='font-semibold'>$ 78.99</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full h-50 bg-white border">
                <div className="w-full flex justify-between">
                    <div className="flex p-3 gap-3">
                        <div className='flex w-28 h-24 border rounded-lg bg-slate-100 justify-center items-center p-3'>
                            <img src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704488183/kris-store/okxjuom3qcykmyzu1sae.png" alt="" />
                        </div>
                        <div className="w-full flex flex-col">
                            <span className='font-semibold flex flex-wrap'>Solid Backpack blue jeans large size</span>
                            <span className='font-normal flex flex-wrap text-slate-400'>Size: medium, Color: blue Seller: Artel Market</span>
                        </div>
                    </div>
                    <div className="flex p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#8B96A5" />
                        </svg>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="flex p-3">
                        <button className='w-12 h-10 border border-slate-300 rounded-l-md font-semibold'>-</button>
                        <input type="text" className="w-24 h-10 border text-center border-slate-300" defaultValue="1" />
                        <button className='w-12 h-10 border border-slate-300 rounded-r-md font-semibold'>+</button>
                    </div>
                    <div className="flex p-3">
                        <span className='font-semibold'>$ 78.99</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full h-50 bg-white border">
                <div className="w-full flex justify-between">
                    <div className="flex p-3 gap-3">
                        <div className='flex w-28 h-24 border rounded-lg bg-slate-100 justify-center items-center p-3'>
                            <img src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704488182/kris-store/cigdjslok7ysi8dbyntd.png" alt="" />
                        </div>
                        <div className="w-full flex flex-col">
                            <span className='font-semibold flex flex-wrap'>Water boiler black for kitchen, 1200 Watt</span>
                            <span className='font-normal flex flex-wrap text-slate-400'>Size: medium, Color: blue Seller: Artel Market</span>
                        </div>
                    </div>
                    <div className="flex p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#8B96A5" />
                        </svg>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="flex p-3">
                        <button className='w-12 h-10 border border-slate-300 rounded-l-md font-semibold'>-</button>
                        <input type="text" className="w-24 h-10 border text-center border-slate-300" defaultValue="2" />
                        <button className='w-12 h-10 border border-slate-300 rounded-r-md font-semibold'>+</button>
                    </div>
                    <div className="flex p-3">
                        <span className='font-semibold'>$ 78.99</span>
                    </div>
                </div>
            </div>
            <div className="flex w-full h-52 bg-white border">
                <div className='w-full flex flex-col p-3'>
                    <div className="w-full flex justify-between">
                        <span className='text-slate-400'>Items (3):</span>
                        <span className='font-semibold'>$32.00</span>
                    </div>
                    <div className="w-full flex justify-between">
                        <span className='text-slate-400'>Shipping:</span>
                        <span className='font-semibold'>$10.00</span>
                    </div>
                    <div className="w-full flex justify-between">
                        <span className='text-slate-400'>Tax:</span>
                        <span className='font-semibold'>$7.00</span>
                    </div>
                    <div className="w-full flex justify-between py-3">
                        <span className='font-semibold text-lg'>Total:</span>
                        <span className='font-semibold text-lg'>$220.00</span>
                    </div>
                    <button className='py-3 w-full h-12 bg-[#00B517] text-white rounded-lg text-lg'>Checkout (3 items)</button>
                </div>
            </div>
        </>
    )
}

export default CartItem