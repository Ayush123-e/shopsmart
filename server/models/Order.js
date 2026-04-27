import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required']
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    name: String,
    price: Number,
    size: String,
    quantity: {
      type: Number,
      required: true,
      min: 1
    }
  }],
  amount: {
    type: Number,
    required: [true, 'Order amount is required'],
    min: 0
  },
  address: {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    pincode: {
      type: String,
      required: true
    }
  },
  status: {
    type: String,
    enum: ['Placed', 'Shipped', 'Delivered'],
    default: 'Placed'
  }
}, {
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
