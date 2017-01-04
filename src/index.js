import MongoClient from 'mongodb';
import express from 'express';
import bodyParser from 'body-parser';
import checkout from './routes/checkout';

let database;

MongoClient.connect('mongodb://localhost:27017/store-example', (err, db) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }

  database = db;
});

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  req.database = database;
  next();
});

app.use(checkout);

app.listen(3000, () => {
  console.log('Server listening on port 3000!')
});
