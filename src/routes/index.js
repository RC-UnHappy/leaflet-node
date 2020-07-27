// PARA QUE LAS RUTAS FUNCIONEN SE REQUIERE DE EXPRESS PERO EN ESTE CASO SOLO EL ROUTER
const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;