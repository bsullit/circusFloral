import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();
//console.log(process.env);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('**++** connected to db **++**');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

//error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

///old api routes to be removed
//------------------------------------------------------
// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });

// app.get('/api/products/slug/:slug', (req, res) => {
//   const product = data.products.find((x) => x.slug === req.params.slug);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'product not found' });
//   }
// });

// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'product not found' });
//   }
// });
//--------------------------------------------------------------
