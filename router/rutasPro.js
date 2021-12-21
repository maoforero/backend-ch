const express = require('express');
const { Router } = express;
let routerProducts = new Router;

let productList = require('../public/product.json')


routerProducts.get('/', (req, res, next) => {
  res.send({
    msg: "Product List",
    productList
  });
});

// Get ID productos
routerProducts.get('/:id', (req, res, next) => {
  const { id } = req.params;
  const product = productList.find((product) => product.id === id);
  if (product) res.send(product);
  else res.send(404).send('Producto no listado')
});

routerProducts.post('/new', (req, res, next) => {
  const body = req.body;
  res.json({
    msg: 'Creating',
    data: body
  })
})


module.exports = routerProducts
