import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location]);

    return showSearch && visible ? (
        <div style={{ borderTop: '1px solid #e2e2e2', borderBottom: '1px solid #e2e2e2', backgroundColor: '#f9f9f9', textAlign: 'center', padding: '20px 0' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #c0c0c0', padding: '10px 20px', borderRadius: '50px', width: '75%', maxWidth: '600px', backgroundColor: 'white' }}>
                <input value={search} onChange={(e) => setSearch(e.target.value)} style={{ flex: 1, outline: 'none', backgroundColor: 'inherit', fontSize: '14px' }} type="text" placeholder='Search' />
                <img style={{ width: '16px' }} src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/search_icon.png" alt="" />
            </div>
            <img onClick={() => setShowSearch(false)} style={{ display: 'inline', width: '12px', cursor: 'pointer', marginLeft: '12px' }} src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/cross_icon.png" alt="" />
        </div>
    ) : null;
};

export default SearchBar;
