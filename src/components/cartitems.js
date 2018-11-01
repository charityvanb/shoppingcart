import React from 'react';
import CartItem from './cartitem.js';

const CartItems = (props) => {
     var cartItemsDiv = props.cartItemsList.map(cartitem => {
        return (
             <CartItem
                key={cartitem.id}
                name={cartitem.product.name}
                quantity={cartitem.quantity}
                price={'$' + parseFloat(cartitem.product.priceInCents/100)} />
         )
     })

    return (
        <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
            <div className="list-group-item">
            <div className="row">
                <div className="col-md-8">Product</div>
                <div className="col-md-2">Price</div>
                <div className="col-md-2">Quantity</div>
            </div>
            </div>
            {cartItemsDiv}
        </div>
        <div className="Total">Total: {props.total}</div>
        </div>
    
    )
}

export default CartItems;
