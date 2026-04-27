import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        // For now, just taking a slice, could be filtered by a 'bestseller' property
        setBestSeller(products.slice(0, 5));
    }, [products]);

    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <Title text1={'BEST'} text2={'SELLERS'} />
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', fontSize: '15px' }}>
                    A collection of our most coveted pieces, chosen by our global community for their exceptional quality and timeless appeal.
                </p>
            </div>

            <div className='grid-cols' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '40px' }}>
                {bestSeller.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.images} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default BestSeller;
