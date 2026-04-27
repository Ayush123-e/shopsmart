import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: function() {
      return !this.googleId;
    }
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  cartData: {
    type: Object,
    default: {}
  },
  googleId: {
    type: String,
    sparse: true
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
