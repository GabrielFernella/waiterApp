import { Request, Response } from 'express';
import { Product } from '../../app/models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const {name, icon} = req.body;
    const product = await Product.create({name, icon});
    res.status(201).json(product);

  } catch (error) {
    res.status(500).json({
      error: 'Internal server error'
    });
  }
}
