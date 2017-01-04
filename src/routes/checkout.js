import {Router} from 'express';
import CartService from '../services/cart-service';
import OrderService from '../services/order-service';

const router = new Router();

router.post('/checkout', (req, res) => {
  const cart = req.body;
  cart.status = 'CREATED';

  const cartService = new CartService(req.database);
  const orderService = new OrderService(req.database);

  cartService.createCart(cart)
    .then((cart) => {
      return orderService.createOrder(cart);
    })
    .then(() => {

    })
    .catch(err => res.status(500).send(err.message));
});

export default router;
