import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {

    const app = express();
    console.log('banco conectado');

    app.use(express.json());
    app.use(router);

    app.listen(3001, ()=>{
      console.log('Server is running http://localhost:3001');
    });
  })
  .catch(() => console.log('erro'));

