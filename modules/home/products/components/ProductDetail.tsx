import Star from '@/common/components/elements/Star'
import React from 'react'

const ProductDetail = () => {
    return (
        <>
            <div className="flex w-full h-full overflow-x-auto gap-1 bg-white relative">
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
                <div className='flex absolute bottom-3 right-16'>
                    <button className='px-2 min-w-full h-8 rounded-l-full bg-black text-white opacity-30'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.3337 7.33329H5.22033L8.94699 3.60663L8.00033 2.66663L2.66699 7.99996L8.00033 13.3333L8.94033 12.3933L5.22033 8.66663H13.3337V7.33329Z" fill="white" />
                        </svg>
                    </button>
                </div>
                <div className='flex absolute bottom-3 right-8'>
                    <button className='px-2 min-w-full h-8 rounded-r-full bg-black text-white opacity-30'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8.00033 2.66663L7.06033 3.60663L10.7803 7.33329H2.66699V8.66663H10.7803L7.06033 12.3933L8.00033 13.3333L13.3337 7.99996L8.00033 2.66663Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="w-full h-96 bg-white">
                <div className="flex p-3 gap-2 items-center">
                    <div className="flex">
                        <Star count={3} />
                    </div>
                    <img className='flex' src="/assets/icons/dot.svg" alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3 3H15V12H3.8775L3 12.8775V3ZM3 1.5C2.175 1.5 1.5075 2.175 1.5075 3L1.5 16.5L4.5 13.5H15C15.825 13.5 16.5 12.825 16.5 12V3C16.5 2.175 15.825 1.5 15 1.5H3ZM4.5 9H13.5V10.5H4.5V9ZM4.5 6.75H13.5V8.25H4.5V6.75ZM4.5 4.5H13.5V6H4.5V4.5Z" fill="#BDC4CD" />
                    </svg>
                    <span className='font-sm text-slate-500'>32 reviews</span>
                    <img className='flex' src="/assets/icons/dot.svg" alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M16.5 7.11745H12.9075L9.6225 2.19745C9.48 1.98745 9.24 1.88245 9 1.88245C8.76 1.88245 8.52 1.98745 8.3775 2.20495L5.0925 7.11745H1.5C1.0875 7.11745 0.75 7.45495 0.75 7.86745C0.75 7.93495 0.7575 8.00245 0.78 8.06995L2.685 15.0224C2.8575 15.6524 3.435 16.1174 4.125 16.1174H13.875C14.565 16.1174 15.1425 15.6524 15.3225 15.0224L17.2275 8.06995L17.25 7.86745C17.25 7.45495 16.9125 7.11745 16.5 7.11745ZM9 3.96745L11.1 7.11745H6.9L9 3.96745ZM13.875 14.6174L4.1325 14.6249L2.4825 8.61745H15.525L13.875 14.6174ZM9 10.1174C8.175 10.1174 7.5 10.7924 7.5 11.6174C7.5 12.4424 8.175 13.1174 9 13.1174C9.825 13.1174 10.5 12.4424 10.5 11.6174C10.5 10.7924 9.825 10.1174 9 10.1174Z" fill="#BDC4CD" />
                    </svg>
                    <span className='font-sm text-slate-500'>154 sold</span>
                </div>
                <span className='font-semibold pl-3'>Product name goes here</span>
                <div className='flex pl-3 items-center'>
                    <span className='font-semibold text-lg text-red-500'>$129.95</span>
                    <span className='font-normal text-slate-500 ml-2'>(50-100 pcs)</span>
                </div>
                <div className="flex w-full justify-between px-3 gap-2 p-3">
                    <button className='flex w-full h-10 bg-blue-600 rounded-lg text-white items-center justify-center'>Send inquiry</button>
                    <button className='flex max-w-full h-10 bg-white border border-slate-300 rounded-lg text-white items-center justify-center px-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16.5 2.82495C14.76 2.82495 13.09 3.63495 12 4.91495C10.91 3.63495 9.24 2.82495 7.5 2.82495C4.42 2.82495 2 5.24495 2 8.32495C2 12.105 5.4 15.185 10.55 19.865L12 21.175L13.45 19.855C18.6 15.185 22 12.105 22 8.32495C22 5.24495 19.58 2.82495 16.5 2.82495ZM12.1 18.375L12 18.475L11.9 18.375C7.14 14.065 4 11.215 4 8.32495C4 6.32495 5.5 4.82495 7.5 4.82495C9.04 4.82495 10.54 5.81495 11.07 7.18495H12.94C13.46 5.81495 14.96 4.82495 16.5 4.82495C18.5 4.82495 20 6.32495 20 8.32495C20 11.215 16.86 14.065 12.1 18.375Z" fill="#0D6EFD" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col pl-3">
                    <table className="border border-none">
                        <tbody>
                            <tr>
                                <td className="w-[100px] text-slate-500">Condition</td>
                                <td>Brand new</td>
                            </tr>
                            <tr>
                                <td className="w-[100px] text-slate-500">Material</td>
                                <td>Plastic</td>
                            </tr>
                            <tr>
                                <td className="w-[100px] text-slate-500">Category</td>
                                <td>Electronics, gadget</td>
                            </tr>
                            <tr>
                                <td className="w-[100px] text-slate-500">Item num</td>
                                <td>23421</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span className='p-3 flex flex-wrap'>Info about edu item is an ideal companion for anyone engaged in learning. The drone provides precise and ...</span>
                <span className='font-semibold pl-3 text-blue-500'>Read more</span>
            </div>
            <div className='flex p-3'>
                <div className="h-40 w-full flex flex-col border rounded-lg bg-white">
                    <div className="w-full flex justify-between p-3">
                        <div className="flex gap-5">
                            <div className="h-16 w-16 flex justify-center items-center bg-green-100 rounded-lg">
                                <span className='text-5xl font-semibold text-green-300'>R</span>
                            </div>
                            <div className="h-16 max-w-full flex flex-col justify-center">
                                <span className='text-slate-500'>Supplier</span>
                                <span className='text-slate-500'>Gaunjoi Trading LLC</span>
                            </div>
                        </div>
                        <div className='h-16 max-w-full flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9.70492 6L8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6Z" fill="#8B96A5" />
                            </svg>
                        </div>
                    </div>
                    <hr className='ml-3 mr-3' />
                    <div className="flex gap-5">
                        <div className="flex gap-2 p-5 justify-center items-center">
                            <img className='w-7 h-5' src="/assets/icons/germany.png" alt="" />
                            <span className='text-slate-500'>Germany</span>
                        </div>
                        <div className="flex gap-2 p-5 justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 0.833374L2.5 4.16671V9.16671C2.5 13.7917 5.7 18.1167 10 19.1667C14.3 18.1167 17.5 13.7917 17.5 9.16671V4.16671L10 0.833374ZM15.8333 9.16671C15.8333 12.9334 13.35 16.4084 10 17.4417C6.65 16.4084 4.16667 12.9334 4.16667 9.16671V5.25004L10 2.65837L15.8333 5.25004V9.16671ZM6.175 9.65837L5 10.8334L8.33333 14.1667L15 7.50004L13.825 6.31671L8.33333 11.8084L6.175 9.65837Z" fill="#8B96A5" />
                            </svg>
                            <span className='text-slate-500'>Verified</span>
                        </div>
                        <div className="flex gap-2 p-5 justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M9.99199 1.66663C5.39199 1.66663 1.66699 5.39996 1.66699 9.99996C1.66699 14.6 5.39199 18.3333 9.99199 18.3333C14.6003 18.3333 18.3337 14.6 18.3337 9.99996C18.3337 5.39996 14.6003 1.66663 9.99199 1.66663ZM15.767 6.66663H13.3087C13.042 5.62496 12.6587 4.62496 12.1587 3.69996C13.692 4.22496 14.967 5.29163 15.767 6.66663ZM10.0003 3.36663C10.692 4.36663 11.2337 5.47496 11.592 6.66663H8.40866C8.76699 5.47496 9.30866 4.36663 10.0003 3.36663ZM3.55033 11.6666C3.41699 11.1333 3.33366 10.575 3.33366 9.99996C3.33366 9.42496 3.41699 8.86663 3.55033 8.33329H6.36699C6.30033 8.88329 6.25033 9.43329 6.25033 9.99996C6.25033 10.5666 6.30033 11.1166 6.36699 11.6666H3.55033ZM4.23366 13.3333H6.69199C6.95866 14.375 7.34199 15.375 7.84199 16.3C6.30866 15.775 5.03366 14.7166 4.23366 13.3333ZM6.69199 6.66663H4.23366C5.03366 5.28329 6.30866 4.22496 7.84199 3.69996C7.34199 4.62496 6.95866 5.62496 6.69199 6.66663ZM10.0003 16.6333C9.30866 15.6333 8.76699 14.525 8.40866 13.3333H11.592C11.2337 14.525 10.692 15.6333 10.0003 16.6333ZM11.9503 11.6666H8.05033C7.97533 11.1166 7.91699 10.5666 7.91699 9.99996C7.91699 9.43329 7.97533 8.87496 8.05033 8.33329H11.9503C12.0253 8.87496 12.0837 9.43329 12.0837 9.99996C12.0837 10.5666 12.0253 11.1166 11.9503 11.6666ZM12.1587 16.3C12.6587 15.375 13.042 14.375 13.3087 13.3333H15.767C14.967 14.7083 13.692 15.775 12.1587 16.3ZM13.6337 11.6666C13.7003 11.1166 13.7503 10.5666 13.7503 9.99996C13.7503 9.43329 13.7003 8.88329 13.6337 8.33329H16.4503C16.5837 8.86663 16.667 9.42496 16.667 9.99996C16.667 10.575 16.5837 11.1333 16.4503 11.6666H13.6337Z" fill="#8B96A5" />
                            </svg>
                            <span className='text-slate-500'>Shipping</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail