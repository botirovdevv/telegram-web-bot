import React from 'react'
import '../cart/cart.css'
import Button from '../button/button'
import { totalPrice } from '../../unites/total-price'

const Cart = ({ cartItems, onCheckout }) => {
    return (
        <div className='cart-container'>
            <p>Umumiy narx: {totalPrice(cartItems).toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}
            </p>

            <Button disable={cartItems.length === 0 ? true : false} title={`${cartItems.length === 0 ? "Buyurtma berish" : "To'lov"}`} type={'checkout'} onclick={onCheckout} />
        </div>
    )
}

export default Cart