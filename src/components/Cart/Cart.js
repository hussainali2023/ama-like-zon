import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    let gTotal = total + shipping + tax;
   
    
    return (
        <div className='cart'>
             <h1>Order Summary</h1>
            <h3>Selected Item: {quantity}</h3>
            <p>Total Prices: ₹ {total}</p>
            <p>Total Shipping: ₹ {shipping}</p>
            <p>Tax: ₹ {tax}</p>
            <h5>Grand Total: ₹ {gTotal.toFixed(2)}</h5>

        </div>
    );
};

export default Cart;