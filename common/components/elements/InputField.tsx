import React from 'react'

interface InputProps {
    type: string
    name: string
    id: string
    className?: string
    placeholder?: string
    defaultValue?: string
}

export const InputField = (props: InputProps) => {
    return (
        <input
            type={props.type}
            name={props.name}
            id={props.id}
            className={props.className}
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
        />
    )
}
