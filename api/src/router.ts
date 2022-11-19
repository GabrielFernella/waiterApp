import {Router} from 'express';
import { createCategory } from './useCases/categories/createCategory';
import { listCategories } from './useCases/categories/listCategories';
import { createProduct } from './useCases/products/createProduct';
import { listProducts } from './useCases/products/listProducts';

export const router = Router();

// List Categories
router.get('/categories', (req, res) => listCategories);

// Create Categories
router.post('/categories', (req, res) => createCategory);

// List Product
router.get('/products', (req, res) => listProducts);

// Create Product
router.post('/products', (req, res) => createProduct);

//Get Product by Category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

// List Orders
router.get('/orders', (req, res) => {
  res.send('OK');
});

// Create Orders
router.post('/orders', (req, res) => {
  res.send('OK');
});

//Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// Delete/cancel order
router.delete('/categories', (req, res) => {
  res.send('OK');
});
