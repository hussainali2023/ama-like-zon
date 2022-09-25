import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {name, img, category, seller, price, ratings} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price: ₹{price}</p>
            <p className='product-seller'>Manufacturer: {seller}</p>
            <p className='product-ratings'>Rating: {ratings} star</p>
            </div>
            <button className='btn-add-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;