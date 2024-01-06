import Link from 'next/link'
import React from 'react'
import { InputField } from '../elements/InputField'

const HeaderMobile = () => {
    return (
        <>
            <header className='sticky top-0 z-50 pb-2'>
                <div className="p-5 w-full h-16 flex items-center justify-between bg-white">
                    <div className="flex items-center gap-5">
                        <img src="/assets/icons/menu.svg" alt="" />
                        <img src="/assets/icons/logo.svg" alt="" />
                    </div>
                    <div className="flex items-center gap-5">
                        <Link href="/cart">
                            <img src="/assets/icons/shopping_cart.svg" alt="" />
                        </Link>
                        <img src="/assets/icons/person.svg" alt="" />
                    </div>
                </div>
            </header>
            <div className='px-5 relative'>
                <img src="/assets/icons/search.svg" alt="" className='absolute top-1/2 -translate-y-1/2 ml-3' style={{ filter: 'brightness(4) invert(1)' }} />
                <InputField
                    type="text"
                    name="search"
                    id="search"
                    placeholder='Search'
                    className="w-full h-12 rounded-lg border border-slate-300 bg-slate-100 pl-10"
                />
            </div>
        </>
    )
}

export default HeaderMobile