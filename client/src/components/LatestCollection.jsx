import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    return (
        <div className='container' style={{ marginTop: '100px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <Title text1={'NEW'} text2={'ARRIVALS'} />
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', fontSize: '15px' }}>
                    Explore our latest seasonal highlights, meticulously crafted for the modern individual who values both form and function.
                </p>
            </div>

            {/* Rendering Products */}
            <div className='grid-cols' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '40px' }}>
                {latestProducts.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.images} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;
