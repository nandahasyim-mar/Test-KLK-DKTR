const { Product } = require('../models/index')

class ProductController {

  static createProduct(req, res, next) {
    let obj = {
      code_sku: req.body.code_sku,
      name: req.body.name,
      image: req.body.image,
      quantity: req.body.quantity,
      price: req.body.price
    }


    Product.create(obj)
      .then(data => {
        // console.log(data, '<<<<< data create product');
        res.status(201).json({
          id: data.id,
          code_sku: data.code_sku,
          name: data.name,
          image: data.image,
          quantity: data.quantity,
          price: data.price
        })
      })
      .catch(err => {
        next(err);
      })
  }


  static fetchProduct(req, res, next) {
    Product.findAll()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err);
      })
  }


  static fetchProductById(req, res, next) {
    let id = req.params.id
    Product.findByPk(id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err);
      })
  }


  static updateProduct(req, res, next) {
    let id = req.params.id
    let obj = {
      code_sku: req.body.code_sku,
      name: req.body.name,
      image: req.body.image,
      quantity: req.body.quantity,
      price: req.body.price
    }
    Product.update(obj, {
      where: {
        id: +id
      },
      returing: true
    })
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        next(err);
      })
  }


  static deleteProduct(req, res, next) {
    let id = req.params.id
    Product.destroy({
      where: {
        id: +id
      }
    })
    .then(() => {
      res.status(200).json({ message: "Success delete product"})
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = ProductController