import React from 'react';
import { Link } from 'react-router-dom';

const ProductComponent = ({ pd }) => {
    const { id, title, image, price } = pd
    return (
        <div className="card h-100 pt-2">
            <img src={image} className="img-fluid card-img-top w-50 mx-auto d-block" alt={title} />
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <Link to={`/product/${id}`} className="btn" style={{backgroundColor: "#F79F1F", color: "#fff"}}>View Product</Link>
                <p className="card-text">Price: ${price}</p>
            </div>
        </div>
    );
};

export default ProductComponent;