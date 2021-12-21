let express = require('express');
let app = express();
let { Router } = express;
let routerPro = new Router;
let routerCar = new Router;

//Puerto
const PORT = 8080;

let productos = ["Arroz", "Leche"];
let carrito = ["Lentejas"];

//######## CRUD Productos
//Get productos
routerPro.get("/", (req, res, next) => {
    res.json(productos);
})
// Post productos
routerPro.post("/", (req, res, next) => {
    productos.push(req.query.add)
    res.json(productos);
});


//####### CRUD Carrito
//Get Carrito
routerCar.get("/", (req, res, next) => {
    res.json(carrito)
});

//Post Carrito
routerCar.post("/", (req, res, next) => {
    carrito.push(req.query.add)
    res.json(carrito);
});

//Router
app.use("/productos", routerPro);
app.use("/carrito", routerCar);

//Router Home
app.get("/", (req, res, next) => {
    res.send("Home")
})

// Aplicacion escuchando y regresando un console log
app.listen(PORT, () => {
    console.log(`Listening http://localhost:${PORT} 👽`);
    })