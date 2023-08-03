/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    const handleAddtocart = (product) => {
        console.log('clicked');
        const newCart = [...cart, product];
        setCart(newCart);

    }
    const clearCart = () => {
        setCart([]);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        handleAddtocart={handleAddtocart}
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    clearCart={clearCart}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;