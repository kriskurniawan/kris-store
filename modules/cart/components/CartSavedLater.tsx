import React from 'react'

const CartSavedLater = () => {
    return (
        <div className='p-3'>
            <div className="mb-2 w-full max-h-full bg-white border border-slate-300 rounded-lg">
                <div className="flex gap-3 items-center">
                    <div className="justify-center">
                        <img className="w-28 h-28 p-3" src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704489443/kris-store/qyrpkzirehqdjoqzvg0b.png" alt="" />
                    </div>
                    <div className="flex flex-col py-3">
                        <div className="flex flex-col">
                            <span className='flex flex-wrap'>Regular Fit Resort Shirt</span>
                            <span className='font-semibold'>$57.70</span>
                        </div>
                        <div className="flex gap-3 py-3">
                            <button className='max-w-full px-3 h-10 border border-slate-300 rounded-md text-sky-600 shadow-sm'>Move to cart</button>
                            <button className='max-w-full px-3 h-10 border border-slate-300 rounded-md text-red-600 shadow-sm'>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-2 w-full max-h-full bg-white border border-slate-300 rounded-lg">
                <div className="flex gap-3 items-center">
                    <div className="justify-center">
                        <img className="w-28 h-28 p-3" src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256590/kris-store/kyfbnsl6sch5ophxz445.png" alt="" />
                    </div>
                    <div className="flex flex-col py-3">
                        <div className="flex flex-col">
                            <span className='flex flex-wrap'>Regular Fit Resort Shirt</span>
                            <span className='font-semibold'>$57.70</span>
                        </div>
                        <div className="flex gap-3 py-3">
                            <button className='max-w-full px-3 h-10 border border-slate-300 rounded-md text-sky-600 shadow-sm'>Move to cart</button>
                            <button className='max-w-full px-3 h-10 border border-slate-300 rounded-md text-red-600 shadow-sm'>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-2 w-full max-h-full bg-white border border-slate-300 rounded-lg">
                <div className="flex gap-3 items-center">
                    <div className="justify-center">
                        <img className="w-28 h-28 p-3" src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704419192/kris-store/pjaahaibhrswqzsdwhtc.png" alt="" />
                    </div>
                    <div className="flex flex-col py-3">
                        <div className="flex flex-col">
                            <span className='flex flex-wrap'>Regular Fit Resort Shirt</span>
                            <span className='font-semibold'>$57.70</span>
                        </div>
                        <div className="flex gap-3 py-3">
                            <button className='max-w-full px-3 h-10 border border-slate-300 rounded-md text-sky-600 shadow-sm'>Move to cart</button>
                            <button className='max-w-full px-3 h-10 border border-slate-300 rounded-md text-red-600 shadow-sm'>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartSavedLater