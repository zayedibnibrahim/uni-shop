import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductList = () => {
    const products = useSelector((state) => state.allProduct.products)
    const dispatchProduct = useDispatch();

    useEffect(() => {
        dispatchProduct(setProducts());
    }, [dispatchProduct])

    return (
        <div className="container" style={{ backgroundColor: "#f1f2f6", borderRadius: "10px", marginTop: "20px", padding: "16px" }}>
            <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: "20px"}}>
                {
                    products.map(pd => <ProductComponent key={pd.id} pd={pd}></ProductComponent>)
                }
            </div>
        </div>
    );
};

export default ProductList;