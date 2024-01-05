import React from 'react'

interface CardProps {
    children?: React.ReactNode
    className?: string
    onClick?: () => void
    image?: string
    name?: string
    price?: string
    description?: string
    rating?: string
}

const Card = (props: CardProps) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default Card