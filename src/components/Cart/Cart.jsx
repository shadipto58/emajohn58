/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = ({ cart, clearCart }) => {
    let total = 0;
    let quantity = 0;
    let shipping = 0;
    for (const cartProduct of cart) {
        quantity = quantity + cartProduct.quantity;
        total = total + cartProduct.price * cartProduct.quantity;
        shipping = shipping + cartProduct.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items:{quantity}</p>
            <p>Total Price: {total}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax: {tax}</p>
            <h3>Grand Total: {grandTotal}</h3>
            <button onClick={clearCart}>Clear Cart<FontAwesomeIcon className='cart-icon' icon={faTrash} /></button>
        </div>
    );
};

export default Cart;