import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Product description is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0
  },
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  sizes: {
    type: [String],
    default: []
  },
  stock: {
    type: Number,
    required: [true, 'Stock is required'],
    min: 0,
    default: 0
  },
  images: {
    type: [String],
    default: []
  }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;
