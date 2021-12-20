let express = require('express');
let app = express();
let { Router } = express;
let routerPro = new Router;
let routerCar = new Router;

//Productos

let productos = [];
let carrito = [];


//CRUD Productos
//Get productos
routerPro.get("/", (req, res, next) => {
    res.json(productos);
});

//Post productos
routerPro.post("/", (req, res, next) => {
    productos.push(req.query.agregar)
    res.json(productos);
})


//CRUD Carrito


//Puerto
const PORT = 8080;

//Router Productos
routerPro.get("/", (req, res, next) => {
    res.send("Productos")
});

//Router Carrito
routerCar.get("/", (req, res, next) => {
    res.send("Carrito")
})

//Router Home
app.get("/", (req, res, next) => {
    res.send("Home")
})


//Router
app.use("/producto", routerPro);
app.use("/carrito", routerCar);

// Aplicacion escuchando y regresando un console log
app.listen(PORT, () => {
    console.log(`Listening http://localhost:${PORT}`);
})