import React from 'react'
import CartHeader from './CartHeader'
import CartItem from './CartItem'
import CartSavedLater from './CartSavedLater'

const Cart = () => {
    return (
        <>
            <CartHeader />
            <CartItem />
            <CartSavedLater />
        </>
    )
}

export default Cart