const db = require("./../model/index");

const Books = db.books;
const Cart = db.cart;
const Op = db.sequelize.Op;

exports.create_Cart = async (req, res, next) => {
  const cart = {
    userId: req.userId,
    cost: 0,
    // this we will get from middleware
  };

  const itemIds = req.body.items;

  Cart.create(cart)
    .then((cart) => {
      res.status(201).send(JSON.stringify(cart, null, 2));
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({
        message: "Some internal server error happened",
      });
    });
};
