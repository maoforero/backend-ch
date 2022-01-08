const e = require('express');
const { response } = require('express');
const express = require('express');
const { send } = require('express/lib/response');
const routerCar = require('./router/rutasCar');
let app = express();
let { Router } = express;
let routerC =  new Router;

//Puerto
const PORT = 8080;

let carrito = [
  {id: 1, name: "maleta", price: 100},
  {id: 2, name: "keyboard", price: 50}
];

routerC.get("/", (req, res, next) => {
  res.send({
    carrito
  })
});

routerC.get("/:id", (req, res, next) => {
  const { id } = require.params;
  const carItem = carrito.find((carItem) => carItem.id === id);
  if(carItem) res.send(carItem)
  else res.send('Not Encontrado');
})

app.use(express.static(__dirname + 'public'));

//Router
app.use("/productos", require('./router/rutasPro'));
app.use("/carrito", require('./router/rutasCar'));
app.use("/car", routerC);


//Router Home
app.get("/", (req, res) => {
  res.sendStatus(200)
})



// Router error
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(404).render('404', {
    title: "404",
    description: "Not found"
  })
})

// Aplicacion escuchando y regresando un console log
app.listen(PORT, () => {
  console.log(`It's Alive http://localhost:${PORT} 👽`);
  })
