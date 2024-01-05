import React from 'react'

const ProductFilter = () => {
    return (
        <div className='h-12 w-full flex border bg-white'>
            <div className='w-full flex justify-between'>
                <div className="flex m-auto gap-2">
                    <button className='min-w-max h-7 px-3 border rounded-md'>
                        <div className="flex justify-between gap-5">
                            <span className='text-normal'>Sort:Newest</span>
                            <img src="/assets/icons/sort.svg" alt="" />
                        </div>
                    </button>
                    <button className='min-w-max h-7 px-3 border rounded-md'>
                        <div className="flex justify-between gap-5">
                            <span className='text-normal'>Filter (3)</span>
                            <img src="/assets/icons/filter_alt.svg" alt="" />
                        </div>
                    </button>
                </div>
                <div className="flex m-auto gap-0">
                    <button className='min-w-max h-7 px-2 border rounded-l-md'>
                        <div className="flex gap-5">
                            <img src="/assets/icons/gridview.svg" alt="" />
                        </div>
                    </button>
                    <button className='min-w-max h-7 px-2 border rounded-r-md bg-slate-200'>
                        <div className="flex gap-5">
                            <img src="/assets/icons/listview.svg" alt="" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductFilter