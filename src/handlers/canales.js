const express = require('express');
const router = express.Router();
const { CanalesModel: Canales } = require('../models/Canales');
//const permissions = require('../middlewares/permissions');

// Find all categories
router.get('/'/*, permissions('admin', 'customer')*/, async (req, res) => {
  const categories = await Canales.find().exec();

  return res.json({
    results: categories,
  });
});

// Find Canales by id
router.get('/:id'/*, permissions('admin')*/, async (req,res) => {
  const { id } = req.params;
  const Canales = await Canales.findById(id);

  if (!Canales) {
    return res.status(404).json({
      message: 'Canales not found',
    });
  }

  return res.json({
    data: Canales,
  });
});

// Create a new Canales
router.post('/'/*, permissions('admin')*/, async (req, res) => {
  const {
    nombre,
    descripcion,
    logo,
  } = req.body;

  // TODO: Validate fields

  const Canales = new Canales({
    nombre,
    descripcion,
    logo,
  });

  await Canales.save();
  return res.status(201).json();
});

// Delete Canales by id
router.delete('/:id' /*, permissions('admin')*/, async (req, res) => {
  const { id } = req.params;
  await Canales.findByIdAndDelete(id);

  return res.json({
    message: 'Canales deleted',
  });
});

// Modify Canales by id
router.put('/:id', /*permissions('admin'),*/ async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    descripcion,
    logo,
  } = req.body;

  const Canales = await Canales.findByIdAndUpdate(id, {
    nombre,
    descripcion,
    logo,
  }, { new: true })

  if (!Canales) {
    return res.status(404).json({
      message: 'Canales not found',
    });
  }

  return res.json({
    data: Canales,
  });
});

module.exports = router;