import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            // productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products]);

    return (
        <div style={{ margin: '60px 0' }}>
            <div style={{ textAlign: 'center', fontSize: '1.875rem', padding: '8px 0' }}>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>

            <div className='grid-cols' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '30px' }}>
                {related.map((item, index) => (
                    <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.images} />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
