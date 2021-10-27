const express = require('express');
const router = express.Router();
const { ProduccionesModel: Producciones } = require('../models/producciones');
//const permissions = require('../middlewares/permissions');

// Find all categories
router.get('/'/*, permissions('admin', 'customer')*/, async (req, res) => {
  const categories = await Producciones.find().exec();

  return res.json({
    results: categories,
  });
});

// Find Producciones by id
router.get('/:id'/*, permissions('admin')*/, async (req,res) => {
  const { id } = req.params;
  const Producciones = await Producciones.findById(id);

  if (!Producciones) {
    return res.status(404).json({
      message: 'Producciones not found',
    });
  }

  return res.json({
    data: Producciones,
  });
});

// Create a new Producciones
router.post('/'/*, permissions('admin')*/, async (req, res) => {
  const {
    nombre,
    descripcion,
  } = req.body;

  // TODO: Validate fields

  const Producciones = new Producciones({
    nombre,
    descripcion,
  });

  await Producciones.save();
  return res.status(201).json();
});

// Delete Producciones by id
router.delete('/:id' /*, permissions('admin')*/, async (req, res) => {
  const { id } = req.params;
  await Producciones.findByIdAndDelete(id);

  return res.json({
    message: 'Producciones deleted',
  });
});

// Modify Producciones by id
router.put('/:id', /*permissions('admin'),*/ async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    descripcion,
  } = req.body;

  const Producciones = await Producciones.findByIdAndUpdate(id, {
    nombre,
    descripcion,
  }, { new: true })

  if (!Producciones) {
    return res.status(404).json({
      message: 'Producciones not found',
    });
  }

  return res.json({
    data: Producciones,
  });
});

module.exports = router;