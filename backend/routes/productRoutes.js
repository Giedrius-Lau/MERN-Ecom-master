import express from 'express';
const router = express.Router();
import { getProducts, getProductById, deleteProduct } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts);
router.route('/:id').delete(protect, admin, deleteProduct).get(getProductById);

export default router;
