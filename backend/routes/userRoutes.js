import express from 'express';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';
import expressAsyncHandler from 'express-async-handler';

const userRouter = express.Router();

//sign in post route being hit
userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    //console.log(user);
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        console.log('userRoutes success');
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    //console.log('userRoutes 401');
    res.status(401).send({ message: 'Invalid email or password ' });
  })
);

export default userRouter;
