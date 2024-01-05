import React from 'react'

const ProductDetail = () => {
    return (
        <div className="flex w-full h-full overflow-x-auto gap-1 bg-white">
            <div className='w-64 h-64 border shrink-0 bg-slate-100'>
                <div className="justify-center items-center">
                    <img className='w-60 h-60 p-3' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704431216/kris-store/sbr21yibdsxidywfb86t.png" alt="" />
                </div>
            </div>
            <div className='w-64 h-64 border shrink-0 bg-slate-100'>
                <div className="justify-center items-center">
                    <img className='w-60 h-60 p-3' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704256590/kris-store/wupq5u2k4ixo6s7sx5ex.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProductDetail