export default class CartService {
  constructor(db) {
    this.db = db;
  }

  createCart(cart) {
    return new Promise((resolve, reject) => {
      const carts = this.db.collection('carts');

      carts.insert(cart, (err, result) => {
        if (err) {
          reject(err);
        }
        else {
          cart._id = result.insertedIds[0];

          resolve(cart);
        }
      });
    });
  }
}
