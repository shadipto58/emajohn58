/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, handleAddtocart }) => {
    const { img, ratings, price, seller, name } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h4> {name}</h4>
                <h6>Price: {price}</h6>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={() => handleAddtocart(product)} className='cart-button'>Add to cart
                <FontAwesomeIcon className='cart-icon' icon={faCartShopping} /></button>
        </div>
    );
};

export default Product;