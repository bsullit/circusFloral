import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';

const seedRouter = express.Router();
//wipe and reseed db
seedRouter.get('/', async (req, res) => {
  await Product.deleteMany();
  const createdProjects = await Product.insertMany(data.products);
  res.send(createdProjects);
});

export default seedRouter;
