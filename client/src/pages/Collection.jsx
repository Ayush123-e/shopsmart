import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

import './Collection.css';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relavent');

    // High-quality dummy products in case database is empty
    const dummyProducts = [
        { _id: '1', name: 'Premium Cotton Tee', price: 45, images: ['https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800'], category: 'Men' },
        { _id: '2', name: 'Elegant Silk Blouse', price: 85, images: ['https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800'], category: 'Women' },
        { _id: '3', name: 'Vintage Denim Jacket', price: 120, images: ['https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=800'], category: 'Men' },
        { _id: '4', name: 'Cashmere V-Neck', price: 150, images: ['https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800'], category: 'Women' },
        { _id: '5', name: 'Tailored Wool Trousers', price: 95, images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800'], category: 'Men' },
        { _id: '6', name: 'Bohemian Summer Dress', price: 75, images: ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800'], category: 'Women' },
        { _id: '7', name: 'Leather Chelsea Boots', price: 180, images: ['https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800'], category: 'Men' },
        { _id: '8', name: 'Structured Blazer', price: 210, images: ['https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800'], category: 'Women' },
    ];

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setCategory(prev => [...prev, e.target.value]);
        }
    };

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setSubCategory(prev => [...prev, e.target.value]);
        }
    };

    const applyFilter = () => {
        // Use real products if available, otherwise use dummy products
        let productsCopy = products.length > 0 ? products.slice() : dummyProducts.slice();

        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }

        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        setFilterProducts(productsCopy);
    };

    const sortProduct = () => {
        let fpCopy = filterProducts.slice();

        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
                break;
            default:
                applyFilter();
                break;
        }
    };

    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch, products]);

    useEffect(() => {
        sortProduct();
    }, [sortType]);

    return (
        <div className='container collection-container'>
            
            {/* Filter Sidebar */}
            <div className='filter-sidebar'>
                <p onClick={() => setShowFilter(!showFilter)} className='filter-title'>
                    FILTERS
                    <img style={{ height: '12px', transform: showFilter ? 'rotate(90deg)' : '' }} className='sm:hidden' src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/dropdown_icon.png" alt="" />
                </p>

                {/* Category Filter */}
                <div className={`filter-box ${showFilter ? '' : 'hidden'} md:block`}>
                    <p className='filter-box-title'>CATEGORIES</p>
                    <div className='filter-options'>
                        {['Men', 'Women', 'Kids'].map(cat => (
                            <label key={cat} className='filter-option'>
                                <input type="checkbox" value={cat} onChange={toggleCategory} /> {cat}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Subcategory Filter */}
                <div className={`filter-box ${showFilter ? '' : 'hidden'} md:block`}>
                    <p className='filter-box-title'>TYPE</p>
                    <div className='filter-options'>
                        {['Topwear', 'Bottomwear', 'Winterwear'].map(type => (
                            <label key={type} className='filter-option'>
                                <input type="checkbox" value={type} onChange={toggleSubCategory} /> {type}
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Display Area */}
            <div className='collection-right'>
                <div className='collection-header'>
                    <Title text1={'ALL'} text2={'COLLECTIONS'} />
                    {/* Product Sort */}
                    <select onChange={(e) => setSortType(e.target.value)} className='sort-select'>
                        <option value="relavent">Sort by: Relavent</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>

                {/* Product Grid */}
                <div className='product-grid'>
                    {filterProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.images} name={item.name} price={item.price} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
