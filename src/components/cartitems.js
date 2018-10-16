import React from 'react';
import CartItem from './cartitem.js';

const CartItems = (props) => {
    console.log("props in cartitems", props.cartItemsList)
     var cartItemsDiv = props.cartItemsList.map(cartitem => {
        console.log("cartitem", cartitem) 
        return (
             <CartItem
                key={cartitem.id}
                name={cartitem.product.name}
                quantity={cartitem.quantity}
                price={cartitem.product.priceInCents} />
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
        </div>
    
    )
}

export default CartItems;
