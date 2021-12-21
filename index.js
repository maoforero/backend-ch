const express = require('express');
let app = express();
let { Router } = express;
let routerPro = new Router;
let routerCar = new Router;

//Puerto
const PORT = 8080;

let productos = [
  {
    name:"iphone 13",
    price: "800"
  },
  {
    name:"Samsumg flip",
    prince:"1200"
  },
  {
    name:"One Plus 9 pro",
    price:"900"
  },
  {
    name:"Huawei Mate 30 pro",
    price:"1000"
  }
];
let carrito = ["Lentejas"];

//######## CRUD Productos
//Get productos
routerPro.get("/", (req, res) => {
    res.json(productos);
});

// Post productos
routerPro.post("/", (req, res) => {
    productos.push(req.query.add)
    res.json(productos);
});

routerPro.get('/', (req, res) => {

})

//####### CRUD Carrito
//Get Carrito
routerCar.get("/", (req, res) => {
    res.json(carrito)
});

//Post Carrito
routerCar.post("/", (req, res) => {
    carrito.push(req.query.add)
    res.json(carrito);
});

//Router
app.use("/productos", routerPro);
app.use("/productos/:id", routerPro);
app.use("/carrito", routerCar);


//Router Home
app.get("/", (req, res) => {
    res.send("Home")
})

// Aplicacion escuchando y regresando un console log
app.listen(PORT, () => {
    console.log(`It's Alive http://localhost:${PORT} 👽`);
    })
