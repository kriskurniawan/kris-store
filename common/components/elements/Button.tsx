import React from 'react'

interface ButtonProps {
    children?: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
    id?: string
    className?: string
    onClick?: () => void
    disabled?: boolean
}

export const Button = (props: ButtonProps) => {
    return (
        <button
            type={props.type}
            id={props.id}
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled} >
            {props.children}
        </button>
    )
}
