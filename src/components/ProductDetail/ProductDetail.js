import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch('https://ema-john-as.herokuapp.com/product/' + productKey)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productKey]);
    console.log(product);

    return (
        <div>
            <h1 className="text-center my-3">Your product detail!</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;