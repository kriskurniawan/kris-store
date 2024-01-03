import React from 'react'

interface CardProps {
    children?: React.ReactNode
    className?: string
    onClick?: () => void
}

const Card = (props: CardProps) => {
    return (
        <div className="flex h-56 w-44 border relative">
            <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img className='w-[98px] h-[98px]' src="https://res.cloudinary.com/dnbel4bdy/image/upload/v1704249255/kris-store/piqoxfsxygjong30kmfh.png" alt="" />
                <span className='text-center'>Clothes</span>
                <span className='min-w-max p-1 text-center rounded-full bg-red-200 text-red-600 font-semibold'>-25%</span>
            </div>
        </div>
    )
}

export default Card