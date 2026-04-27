import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

import './PlaceOrder.css';

const PlaceOrder = () => {
    const [method, setMethod] = useState('cod');
    const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            let orderItems = [];

            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items));
                        if (itemInfo) {
                            itemInfo.size = item;
                            itemInfo.quantity = cartItems[items][item];
                            orderItems.push(itemInfo);
                        }
                    }
                }
            }

            let orderData = {
                address: {
                    name: formData.firstName + ' ' + formData.lastName,
                    phone: formData.phone,
                    address: formData.street,
                    city: formData.city,
                    pincode: formData.zipcode
                },
                items: orderItems,
                amount: getCartAmount() + delivery_fee
            };

            switch (method) {
                // API Calls for COD
                case 'cod':
                    const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });
                    if (response.data.success) {
                        setCartItems({});
                        navigate('/orders');
                    } else {
                        toast.error(response.data.message);
                    }
                    break;

                default:
                    break;
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='container place-order-container'>
            {/* Left Side */}
            <div className='shipping-info'>
                <div style={{ marginBottom: '20px' }}>
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>
                <div className='input-group'>
                    <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='checkout-input' type="text" placeholder='First name' />
                    <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='checkout-input' type="text" placeholder='Last name' />
                </div>
                <input required onChange={onChangeHandler} name='email' value={formData.email} className='checkout-input' type="email" placeholder='Email address' />
                <input required onChange={onChangeHandler} name='street' value={formData.street} className='checkout-input' type="text" placeholder='Street' />
                <div className='input-group'>
                    <input required onChange={onChangeHandler} name='city' value={formData.city} className='checkout-input' type="text" placeholder='City' />
                    <input required onChange={onChangeHandler} name='state' value={formData.state} className='checkout-input' type="text" placeholder='State' />
                </div>
                <div className='input-group'>
                    <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='checkout-input' type="number" placeholder='Zipcode' />
                    <input required onChange={onChangeHandler} name='country' value={formData.country} className='checkout-input' type="text" placeholder='Country' />
                </div>
                <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='checkout-input' type="number" placeholder='Phone' />
            </div>

            {/* Right Side */}
            <div className='checkout-right'>
                <div style={{ marginTop: '20px' }}>
                    <CartTotal />
                </div>

                <div style={{ marginTop: '50px' }}>
                    <Title text1={'PAYMENT'} text2={'METHOD'} />
                    {/* Payment Method Selection */}
                    <div className='payment-methods'>
                        <div onClick={() => setMethod('stripe')} className='method-card'>
                            <p className={`method-dot ${method === 'stripe' ? 'selected' : ''}`}></p>
                            <img className='payment-logo' src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/stripe_logo.png" alt="" />
                        </div>
                        <div onClick={() => setMethod('razorpay')} className='method-card'>
                            <p className={`method-dot ${method === 'razorpay' ? 'selected' : ''}`}></p>
                            <img className='payment-logo' src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/razorpay_logo.png" alt="" />
                        </div>
                        <div onClick={() => setMethod('cod')} className='method-card'>
                            <p className={`method-dot ${method === 'cod' ? 'selected' : ''}`}></p>
                            <p style={{ color: '#6d6d6d', fontSize: '13px', fontWeight: '600', marginLeft: '10px' }}>CASH ON DELIVERY</p>
                        </div>
                    </div>

                    <div style={{ width: '100%', textAlign: 'end', marginTop: '40px' }}>
                        <button type='submit' className='place-order-btn'>PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
