const express = require('express');
const { Router } = express;

let routerCar = new Router;

routerCar.get("/car", (req, res, next) => {
  res.sendStatus(200).send("Carrito");
});

module.exports = routerCar;
