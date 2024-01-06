'use client'

import React, { useState } from 'react'

function NavLink({ to, children } : any) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({ open, setOpen } : any) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md`}>
            <div className="flex items-center justify-center filter bg-white h-20 shadow-sm md:hidden"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/">LOGO</a>
            </div>
            <div className="flex flex-col gap-2 p-4">
                <a className="text-xl font-medium" href="/about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    About
                </a>
                <a className="text-xl font-normal" href="/contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Contact
                </a>
            </div>
        </div>
    )
}

const HeaderMobile = () => {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter bg-white p-5 h-16 items-center sticky top-0 z-50">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="flex items-center">
                <div className="z-50 flex relative w-8 h-6 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "opacity-0" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/contact">
                        CONTACT
                    </NavLink>
                    <NavLink to="/about">
                        ABOUT
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default HeaderMobile