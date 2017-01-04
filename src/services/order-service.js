export default class OrderService {
  constructor(db) {
    this.db = db;
  }

  createOrder(cart) {
    return new Promise((resolve, reject) => {
      const orders = this.db.collection('orders');

      console.log(`Cart ID: ${cart._id}`);

      orders.update(
        {cart: cart._id},
        {
          $set: {
            cart: cart._id,
            orderDate: new Date(),
            items: cart.items
          }
        },
        { upsert: true },
        (err, result) => {
          if (err) {
            return reject(err);
          }

          if (result.nModified === 0) {
            reject(new Error('Cannot update the order'));
          } else {
            resolve();
          }
        }
      );
    });
  }
}
