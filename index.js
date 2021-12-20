let express = require('express');
let app = express();
let { Router } = express;
let router = new Router;

//Puerto
const PORT = 5000;

router.get("/", (req, res, next) => {
    res.send("It's Alive 👽")
})




// Aplicacion escuchando y regresando un console log
app.listenerCount(PORT, () => {
    console.log("Listening: P5000")
})