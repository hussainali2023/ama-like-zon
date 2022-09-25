import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
        <div className='products-container'>
           {
            products.map(product => <Product product={product} key={product.id}></Product>)
           }
        </div>
        <div className='cart-container'>
            Carts
        </div>
        </div>
    );
};

export default Shop;