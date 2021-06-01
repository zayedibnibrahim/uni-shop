import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const cartProducts = useSelector((state) => state.allProduct.cart)
    return (
        <header className="container pt-3 pb-3" style={{ backgroundColor: "#f1f2f6", borderRadius: "10px", marginTop: "10px" }}>
            <div className="row">
                <div className="col-md-6">
                    <Link style={{ textDecoration: "none" }} to="/">
                        <h2 className="fw-bold m-0" style={{ color: "#F79F1F" }}>Uni Shop</h2>
                    </Link>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <nav>
                        <Link to="/cart" style={{color: "#079992", textDecoration: "none", fontWeight: "600"}}>CART: {cartProducts.length}</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;