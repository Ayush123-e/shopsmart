import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function ManageOrders({ token }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await axios.post('/api/order/list', {}, { headers: { token } });
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      }
    } catch (error) {
      toast.error('Failed to fetch orders');
    } finally {
      setLoading(false);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post('/api/order/status', { orderId, status: event.target.value }, { headers: { token } });
      if (response.data.success) {
        await fetchOrders();
        toast.success('Status updated');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  if (loading) {
    return <div className="loading">Loading orders...</div>;
  }

  return (
    <div className="orders-list">
      <h1>Orders</h1>
      
      {orders.length === 0 ? (
        <p className="no-orders">No orders found.</p>
      ) : (
        <div className="orders-container">
          {orders.map((order, index) => (
            <div key={index} className="order-card" style={{ display: 'grid', gridTemplateColumns: '0.5fr 2fr 1fr 1fr 1fr', gap: '12px', alignItems: 'start', border: '1px solid #ccc', padding: '15px', margin: '15px 0', fontSize: '13px', color: '#454545' }}>
              <img style={{ width: '40px' }} src="https://raw.githubusercontent.com/forever-buy/forever-buy-assets/main/parcel_icon.png" alt="" />
              <div>
                <div>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return <p key={index}>{item.name} x {item.quantity} <span>{item.size}</span></p>
                    } else {
                      return <p key={index}>{item.name} x {item.quantity} <span>{item.size}</span> ,</p>
                    }
                  })}
                </div>
                <p style={{ fontWeight: '600', marginTop: '12px', marginBottom: '4px' }}>{order.address.name}</p>
                <div>
                  <p>{order.address.address + ","}</p>
                  <p>{order.address.city + ", " + order.address.pincode}</p>
                </div>
                <p>{order.address.phone}</p>
              </div>
              <div>
                <p style={{ fontSize: '14px' }}>Items : {order.items.length}</p>
                <p>Method : {order.paymentMethod}</p>
                <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
                <p>Date : {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>
              <p style={{ fontSize: '14px', fontWeight: '600' }}>${order.amount}</p>
              <select onChange={(event) => statusHandler(event, order._id)} value={order.status} style={{ padding: '8px', fontWeight: '600', outline: 'none', border: '1px solid #ccc' }}>
                <option value="Placed">Placed</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageOrders;
