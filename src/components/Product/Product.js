import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {name, img, category, seller, price, ratings} = props.product
// const {handleAddToCart} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price: ₹{price}</p>
            <p className='product-seller'>Manufacturer: {seller}</p>
            <p className='product-ratings'>Rating: {ratings} star</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-add-cart'>
                 <p>Add to Cart
                 <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                 </p>
                
            </button>
        </div>
    );
};

export default Product;