import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container pt-3 pb-3" style={{ backgroundColor: "#f1f2f6", borderRadius: "10px", marginTop: "10px" }}>
            <Link style={{textDecoration: "none"}} to="/">
                <h2 className="fw-bold m-0" style={{ color: "#F79F1F" }}>Uni Shop</h2>
            </Link>

        </div>
    );
};

export default Header;