var express = require('express')
var router = express.Router()
const { log } = require('console')

const FamilyModel = require('../db/modals/familyModal')
const FoodsModal = require('../db/modals/foodsModal')

/* GET home page. */
router.get('/', function (req, res, next) {
  FamilyModel.create({
    name: 'chengjunzhe',
    age: 25,
    gender: 'man',
  }).then(
    (data) => {
      log('插入成功', data)
      res.send('写入数据库成功' + data)
    },
    (err) => {
      log('插入失败', err)
    },
  )
})

/* GET home page. */
router.get('/foods', function (req, res, next) {
  FoodsModal.create({
    name: 'apple',
    color: 'red',
  }).then(
    (data) => {
      log('插入成功', data)
      res.send('写入数据库成功' + data)
    },
    (err) => {
      log('插入失败', err)
    },
  )
})

module.exports = router
