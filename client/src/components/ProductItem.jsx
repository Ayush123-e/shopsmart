import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import './ProductItem.css';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link className='product-item fade-in' to={`/product/${id}`}>
            <div className='product-img-container'>
                <img className='product-img' src={image[0]} alt={name} />
            </div>
            <p className='product-name'>{name}</p>
            <p className='product-price'>{currency}{price}</p>
        </Link>
    );
};

export default ProductItem;
