import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-row gap-5 h-12 w-full border sticky bottom-0 z-50 bg-white'>
            <div className="flex flex-col m-auto">
                <img className='h-4 w-14' src="/assets/icons/home.svg" alt="" />
                <span className='text-center text-sm'>Home</span>
            </div>
            <div className="flex flex-col m-auto">
                <img className='h-4 w-14' src="/assets/icons/grid_view.svg" alt="" />
                <span className='text-center text-sm'>Menu</span>
            </div>
            <div className="flex flex-col m-auto">
                <img className='h-4 w-14' src="/assets/icons/account_circle.svg" alt="" />
                <span className='text-center text-sm'>Account</span>
            </div>
            <div className="flex flex-col m-auto">
                <img className='h-4 w-14' src="/assets/icons/settings.svg" alt="" />
                <span className='text-center text-sm'>Settings</span>
            </div>
        </div>
    )
}

export default Footer