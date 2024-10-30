const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');

router.post('/', empresaController.agregarEmpresas);
router.get('/', empresaController.buscarEmpresas);
router.get('/:id', empresaController.mostrarEmpresas);
router.patch('/:id', empresaController.modificarEmpresas);
router.put('/:id', empresaController.actualizarEmpresas);
router.delete('/:id', empresaController.eliminarEmpresas);

module.exports = router;