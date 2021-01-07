const { User } = require('../models/index')
const { comparePassword, signToken } = require('../helpers/index')

class UserController {
  static login(req, res, next) {
    let obj = {
      email: req.body.email,
      // number_phone: req.body.number_phone,
      password: req.body.password
    }
    if(obj.email == '') {
      throw { name: 'Authentication Failed', message: "Password is required"}
    }
    User.findOne({
      where: {
        email: obj.email
        // number_phone: obj.number_phone
      }
    })
    .then(data => {
      if(!data) {
        throw { name: 'Authentication Failed', message: "Wrong email/password"}
      } else if(!comparePassword(obj.password, data.password)) {
        throw{ name: 'Authentication Failed', message: "Wrong email/password"}
      } 
      // else if(!data.email && data.number_phone) {
      //   const access_token = signToken({
      //     id: data.id,
      //     number_phone: data.number_phone
      //   })
      //   res.status(200).json({access_token})
      // } 
      else {
        const access_token = signToken({
          id: data.id,
          email: data.email
        })
        res.status(200).json({access_token})
      }
    })
    .catch(err => {
      next(err)
    })
  }


  static register(req, res, next) {
    let obj = {
      name: req.body.name,
      email: req.body.email,
      number_phone: 62 + req.body.number_phone,
      password: req.body.password
    }
    User.create(obj)
    .then(data => {
      res.status(201).json({
        id: data.id,
        name: data.name,
        email: data.email
      })
    })
    .catch(err => {
      next(err);
    })
  }
}

module.exports = UserController