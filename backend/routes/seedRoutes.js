import express from 'express';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';
import data from '../data.js';

const seedRouter = express.Router();
//wipe and reseed db
seedRouter.get('/', async (req, res) => {
  await Product.deleteMany();
  await User.deleteMany();
  const createdProjects = await Product.insertMany(data.products);
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProjects, createdUsers });
});

export default seedRouter;
