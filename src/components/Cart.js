import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/productActions';

const Cart = () => {
    const cartProducts = useSelector((state) => state.allProduct.cart)
    const removeDispatch = useDispatch()
    return (
        <div className="container" style={{ backgroundColor: "#f1f2f6", borderRadius: "10px", marginTop: "20px", padding: "16px" }}>
            {
                cartProducts.length === 0 && <h3>Cart Is empty!</h3>
            }
            {
                cartProducts.map((cartItem, index) => <div key={index + 1} className="row p-3" style={{ borderBottom: "1px solid #000" }}>
                    <div className="col-md-3">
                        <img src={cartItem.image} className="img-fluid w-25" alt="" />
                    </div>
                    <div className="col-md-7">
                        <h4>{cartItem.title}</h4>
                        <h5>Price: ${cartItem.price}</h5>
                    </div>
                    <div className="col-md-2">
                        <button onClick={() => removeDispatch(removeFromCart(cartItem.id))} className="btn btn-warning fw-bold">Remove</button>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Cart;