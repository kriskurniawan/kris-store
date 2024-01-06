'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { InputField } from '../elements/InputField'
import { Icon } from '@iconify/react'; // Import Icon dari pustaka yang Anda gunakan

const HeaderMobile = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        const navLinks = document.querySelector('.nav-links');
        setIsMenuOpen(!isMenuOpen);

        // Lakukan perubahan yang diperlukan pada kelas CSS atau properti elemen ketika menu diubah
        if (navLinks) {
            navLinks.classList.toggle('top-[7%]');
            // Lakukan perubahan lain jika diperlukan pada elemen atau kelas lainnya
        }
    };

    return (
        <>
            {/* <header classNameName='sticky top-0 z-50 pb-2'>
                <div classNameName="p-5 w-full h-16 flex items-center justify-between bg-white">
                    <div classNameName="flex items-center gap-5">
                        <img src="/assets/icons/menu.svg" alt="" />
                        <img src="/assets/icons/logo.svg" alt="" />
                    </div>
                    <div classNameName="flex items-center gap-5">
                        <Link href="/cart">
                            <img src="/assets/icons/shopping_cart.svg" alt="" />
                        </Link>
                        <img src="/assets/icons/person.svg" alt="" />
                    </div>
                </div>
            </header> */}
            <header className="bg-white">
                <nav className="flex justify-between items-center w-[92%] mx-auto h-16">
                    <div className='flex items-center gap-5 sticky'>
                        <Icon
                            icon="ion:menu"
                            onClick={toggleMenu}
                            className="text-3xl cursor-pointer md:hidden" />
                        <img className='cursor-pointer' src="/assets/icons/logo.svg" alt="" />
                    </div>
                    <div
                        className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 z-10">
                        <ul className="flex md:flex-row flex-col md:items-center md:gap-3 gap-5">
                            <li>
                                <a className="hover:text-gray-500" href="#">Products</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-500" href="#">Solution</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-500" href="#">Resource</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-500" href="#">Developers</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-500" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-5">
                        <Link href="/cart">
                            <img src="/assets/icons/shopping_cart.svg" alt="" />
                        </Link>
                        <img src="/assets/icons/person.svg" alt="" />
                    </div>
                </nav>
            </header >
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
