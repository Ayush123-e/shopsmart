import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

import './Orders.css';

const Orders = () => {
    const { backendUrl, token, currency } = useContext(ShopContext);
    const [orderData, setOrderData] = useState([]);

    const loadOrderData = async () => {
        try {
            if (!token) {
                return null;
            }
            const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });
            if (response.data.success) {
                let allOrdersItem = [];
                response.data.orders.map((order) => {
                    order.items.map((item) => {
                        item['status'] = order.status;
                        item['payment'] = order.payment;
                        item['paymentMethod'] = order.paymentMethod;
                        item['date'] = order.createdAt;
                        allOrdersItem.push(item);
                    });
                });
                setOrderData(allOrdersItem.reverse());
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadOrderData();
    }, [token]);

    return (
        <div className='container orders-container'>
            <div className='orders-title'>
                <Title text1={'MY'} text2={'ORDERS'} />
            </div>

            <div className='orders-list'>
                {orderData.map((item, index) => (
                    <div key={index} className='order-item'>
                        <div className='order-details'>
                            <img className='order-img' src={item.images[0]} alt="" />
                            <div className='order-info'>
                                <h3>{item.name}</h3>
                                <div className='order-meta'>
                                    <p>{currency}{item.price}</p>
                                    <p>Qty: {item.quantity}</p>
                                    <p>Size: {item.size}</p>
                                </div>
                                <p style={{ marginTop: '8px', fontSize: '13px' }}>Date: <span style={{ color: '#6d6d6d' }}>{new Date(item.date).toDateString()}</span></p>
                                <p style={{ marginTop: '4px', fontSize: '13px' }}>Payment: <span style={{ color: '#6d6d6d' }}>{item.paymentMethod}</span></p>
                            </div>
                        </div>
                        <div className='order-status-group'>
                            <div className='status-indicator'>
                                <p className='dot'></p>
                                <p>{item.status}</p>
                            </div>
                            <button onClick={loadOrderData} className='track-btn'>Track Order</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
