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
routerProducts.get('/all/:id', (req, res, next) => {
  const { id } = req.params;
  const product = productList.find((product) => product.id === id);
  if (product) res.send(product);
  else res.send(404).send('Producto no listado')
});

routerProducts.post('/all', (req, res, next) => {
  const body = req.body;
  productList.push(body);
  res.json({
    msg: 'Creating',
    data: body
  })
});

routerProducts.put("/all/:id",(req, res) => {
  const { idItem } = req.params;
  const item = productList.find((item) => item.id === idItem);
  if(item){
    const {id, timestamp, name, description, code, img, price, stock} = req.body;
    item.id = id;
    item.timestamp = timestamp;
    item.name = name;
    item.description = description;
    item.code = code;
    item.img = img;
    item.price = price;
    item.stock = stock;
    res.json({msg: `Item ${id} Updated`});
    return;
  }
  res.json({msg:`Item unknow`})
});

routerProducts.delete("all/:id", (req, res) => {
  const idItem = productList.findIndex((idItem) => (idItem.id = req.params.id));
  if(idItem){
    idItem.splice(idItem, 1);
    res.json({msg:`Item ${idItem} deleted`});
  }
  res.json({msg:`Item ${idItem} unknow`})
})



module.exports = routerProducts
