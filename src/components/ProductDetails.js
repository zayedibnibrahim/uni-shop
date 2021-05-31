import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct } from '../redux/actions/productActions';

const ProductDetails = () => {
    const { productId } = useParams();
    const productDtls = useSelector((state) => state.productDetails)
    const { title, price, category, description, image } = productDtls
    const dispatchDetails = useDispatch()
    const fetchProductDetails = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            dispatchDetails(selectedProduct(res.data))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProductDetails();
    }, [productId])
    return (
        <div className="container" style={{ backgroundColor: "#f1f2f6", borderRadius: "10px", marginTop: "20px", padding: "16px" }}>
            {
                Object.keys(productDtls).length === 0 ? <h2>Loading...</h2> : <div className="row">
                    <div className="col-md-6">
                        <img src={image} className="img-fluid w-75 mx-auto d-block" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2>{title}</h2>
                        <h5>Price: ${price}</h5>
                        <p>Category: {category}</p>
                        <p>Description: </p><br />
                        <p>{description}</p>

                    </div>
                </div>
            }

        </div>
    );
};

export default ProductDetails;