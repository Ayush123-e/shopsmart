import express from 'express';
import { upload } from '../middleware/upload.js';
import { addProduct, listProducts, deleteProduct, singleProduct } from '../controllers/productController.js';
import adminAuth from '../middleware/adminAuth.js';

const router = express.Router();

router.post('/add', adminAuth, upload.array('images', 5), addProduct);
router.get('/list', listProducts);
router.post('/remove', adminAuth, deleteProduct);
router.post('/single', singleProduct);

export default router;
