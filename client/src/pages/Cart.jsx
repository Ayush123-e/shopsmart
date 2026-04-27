import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';

const Cart = () => {
    const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            const tempData = [];
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        tempData.push({
                            _id: items,
                            size: item,
                            quantity: cartItems[items][item]
                        });
                    }
                }
            }
            setCartData(tempData);
        }
    }, [cartItems, products]);

    return (
        <div className='container' style={{ borderTop: '1px solid #e2e2e2', paddingTop: '56px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>
                <Title text1={'YOUR'} text2={'CART'} />
            </div>

            <div>
                {cartData.map((item, index) => {
                    const productData = products.find((product) => product._id === item._id);
                    return (
                        <div key={index} style={{ padding: '16px 0', borderTop: '1px solid #e2e2e2', borderBottom: '1px solid #e2e2e2', color: '#414141', display: 'grid', gridTemplateColumns: '4fr 0.5fr 0.5fr', sm: {gridTemplateColumns: '4fr 2fr 0.5fr'}, alignItems: 'center', gap: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'start', gap: '24px' }}>
                                <img style={{ width: '64px', sm: {width: '80px'} }} src={productData.images[0]} alt="" />
                                <div>
                                    <p style={{ fontSize: '14px', sm: {fontSize: '1.25rem'}, fontWeight: '500' }}>{productData.name}</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '8px' }}>
                                        <p>{currency}{productData.price}</p>
                                        <p style={{ padding: '2px 12px', border: '1px solid #e2e2e2', backgroundColor: '#f9f9f9' }}>{item.size}</p>
                                    </div>
                                </div>
                            </div>
                            <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} style={{ border: '1px solid #e2e2e2', maxWidth: '40px', sm: {maxWidth: '80px'}, padding: '4px 8px' }} type="number" min={1} defaultValue={item.quantity} />
                            <img onClick={() => updateQuantity(item._id, item.size, 0)} style={{ width: '16px', sm: {width: '20px'}, cursor: 'pointer', marginRight: '16px' }} src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/bin_icon.png" alt="" />
                        </div>
                    );
                })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '80px 0' }}>
                <div style={{ width: '100%', sm: {width: '450px'} }}>
                    <CartTotal />
                    <div style={{ width: '100%', textAlign: 'end' }}>
                        <button onClick={() => navigate('/place-order')} style={{ backgroundColor: '#1a1a1a', color: 'white', fontSize: '14px', margin: '32px 0', padding: '12px 32px' }}>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
