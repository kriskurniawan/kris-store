import React from 'react'

const ProductFilter = () => {
    return (
        <>
            <div className='h-12 w-full flex border bg-white'>
                <div className='px-3 w-full flex justify-between'>
                    <div className="flex items-center gap-2">
                        <button className='min-w-max h-7 px-3 border rounded-md'>
                            <div className="flex gap-5">
                                <span className='text-normal'>Sort:Newest</span>
                                <img src="/assets/icons/sort.svg" alt="" />
                            </div>
                        </button>
                        <button className='min-w-max h-7 px-3 border rounded-md'>
                            <div className="flex gap-7">
                                <span className='text-normal'>Filter (3)</span>
                                <img src="/assets/icons/filter_alt.svg" alt="" />
                            </div>
                        </button>
                    </div>
                    <div className="flex items-center">
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
            <div className="p-3 flex gap-2 items-center">
                <button className='min-w-max h-10 px-3 border border-blue-500 rounded-md bg-white'>
                    <div className="flex gap-2 items-center">
                        <span className='text-slate-600'>Huawei</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.8337 5.34163L14.6587 4.16663L10.0003 8.82496L5.34199 4.16663L4.16699 5.34163L8.82533 9.99996L4.16699 14.6583L5.34199 15.8333L10.0003 11.175L14.6587 15.8333L15.8337 14.6583L11.1753 9.99996L15.8337 5.34163Z" fill="#8B96A5" />
                        </svg>
                    </div>
                </button>
                <button className='min-w-max h-10 px-3 border border-blue-500 rounded-md bg-white'>
                    <div className="flex gap-2 items-center">
                        <span className='text-slate-600'>Apple</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.8337 5.34163L14.6587 4.16663L10.0003 8.82496L5.34199 4.16663L4.16699 5.34163L8.82533 9.99996L4.16699 14.6583L5.34199 15.8333L10.0003 11.175L14.6587 15.8333L15.8337 14.6583L11.1753 9.99996L15.8337 5.34163Z" fill="#8B96A5" />
                        </svg>
                    </div>
                </button>
                <button className='min-w-max h-10 px-3 border border-blue-500 rounded-md bg-white'>
                    <div className="flex gap-2 items-center">
                        <span className='text-slate-600'>64GB</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.8337 5.34163L14.6587 4.16663L10.0003 8.82496L5.34199 4.16663L4.16699 5.34163L8.82533 9.99996L4.16699 14.6583L5.34199 15.8333L10.0003 11.175L14.6587 15.8333L15.8337 14.6583L11.1753 9.99996L15.8337 5.34163Z" fill="#8B96A5" />
                        </svg>
                    </div>
                </button>
            </div>
        </>
    )
}

export default ProductFilter