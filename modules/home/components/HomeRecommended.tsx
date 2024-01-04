import React from 'react'

const HomeRecommended = () => {
    return (
        <div className='mb-3'>
            <div className='flex'>
                <span className='p-4 font-semibold'>Recommended</span>
            </div>
            <div className='flex flex-wrap gap-2 justify-center'>
                <div className="h-56 w-48 border rounded-lg relative bg-white">
                    <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256590/kris-store/wupq5u2k4ixo6s7sx5ex.png" alt="" />
                        <span className='text-center'>Clothes</span>
                        <span className='text-center font-normal text-sm text-slate-500'>Form USD 19</span>
                    </div>
                </div>
                <div className="h-56 w-48 border rounded-lg relative bg-white">
                    <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256589/kris-store/gtyqf7qtqzu0brfjrdtn.jpg" alt="" />
                        <span className='text-center'>Clothes</span>
                        <span className='text-center font-normal text-sm text-slate-500'>Form USD 19</span>
                    </div>
                </div>
                <div className="h-56 w-48 border rounded-lg relative bg-white">
                    <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256590/kris-store/swq84uwgmd9125bmwcxo.png" alt="" />
                        <span className='text-center'>Clothes</span>
                        <span className='text-center font-normal text-sm text-slate-500'>Form USD 19</span>
                    </div>
                </div>
                <div className="h-56 w-48 border rounded-lg relative bg-white">
                    <div className="gap-2 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <img className='w-24 h-24' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256589/kris-store/eequ2k8q0iu342a4fxlk.png" alt="" />
                        <span className='text-center'>Clothes</span>
                        <span className='text-center font-normal text-sm text-slate-500'>Form USD 19</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeRecommended