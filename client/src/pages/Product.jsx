import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';

import './Product.css';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage(item.images[0]);
                return null;
            }
        });
    };

    useEffect(() => {
        fetchProductData();
    }, [productId, products]);

    return productData ? (
        <div className='container product-container'>
            {/* Product Data */}
            <div className='product-display'>
                
                {/* Product Images */}
                <div className='product-images-section'>
                    <div className='thumbnail-list'>
                        {productData.images.map((item, index) => (
                            <img onClick={() => setImage(item)} key={index} src={item} className={`thumbnail-img ${item === image ? 'active' : ''}`} alt="" />
                        ))}
                    </div>
                    <div className='main-img-container'>
                        <img className='main-img' src={image} alt="" />
                    </div>
                </div>

                {/* Product Info */}
                <div className='product-info-section'>
                    <h1 className='product-title'>{productData.name}</h1>
                    <div className='rating-stars'>
                        <img className='star-icon' src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/star_icon.png" alt="" />
                        <img className='star-icon' src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/star_icon.png" alt="" />
                        <img className='star-icon' src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/star_icon.png" alt="" />
                        <img className='star-icon' src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/star_icon.png" alt="" />
                        <img className='star-icon' src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/star_dull_icon.png" alt="" />
                        <p style={{ paddingLeft: '8px', fontSize: '13px' }}>(122 Reviews)</p>
                    </div>
                    <p className='product-price'>{currency}{productData.price}</p>
                    <p className='product-desc'>{productData.description}</p>
                    <div className='size-selection'>
                        <p style={{ fontWeight: '600', marginBottom: '15px' }}>Select Size</p>
                        <div className='size-list'>
                            {productData.sizes.map((item, index) => (
                                <button onClick={() => setSize(item)} key={index} className={`size-item-btn ${item === size ? 'selected' : ''}`}>
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => addToCart(productData._id, size)} className='add-cart-btn'>ADD TO CART</button>
                    
                    <div className='policy-list'>
                        <p>✓ 100% Original product.</p>
                        <p>✓ Cash on delivery is available on this product.</p>
                        <p>✓ Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>

            {/* Description & Review Section */}
            <div className='tabs-section'>
                <div className='tabs-header'>
                    <b className='tab-btn'>Description</b>
                    <p className='tab-btn'>Reviews (122)</p>
                </div>
                <div className='tab-content'>
                    <p>An e-commerce website is an online platform that facilitates the buying and selling of goods or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
                    <p style={{ marginTop: '15px' }}>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
                </div>
            </div>

            {/* Display Related Products */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

        </div>
    ) : <div style={{ opacity: 0 }}></div>;
};

export default Product;
