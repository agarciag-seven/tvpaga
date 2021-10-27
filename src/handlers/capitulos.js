const express = require('express');
const router = express.Router();
const { CapitulosModel: Capitulos } = require('../models/capitulos');
//const permissions = require('../middlewares/permissions');

// Find all categories
router.get('/'/*, permissions('admin', 'customer')*/, async (req, res) => {
  const categories = await Capitulos.find().exec();

  return res.json({
    results: categories,
  });
});

// Find Capitulos by id
router.get('/:id'/*, permissions('admin')*/, async (req,res) => {
  const { id } = req.params;
  const Capitulos = await Capitulos.findById(id);

  if (!Capitulos) {
    return res.status(404).json({
      message: 'Capitulos not found',
    });
  }

  return res.json({
    data: Capitulos,
  });
});

// Create a new Capitulos
router.post('/'/*, permissions('admin')*/, async (req, res) => {
  const {
    media,
    bloques,
    duracion,
    estado,
  } = req.body;

  // TODO: Validate fields

  const Capitulos = new Capitulos({
    media,
    bloques,
    duracion,
    estado,
  });

  await Capitulos.save();
  return res.status(201).json();
});

// Delete Capitulos by id
router.delete('/:id' /*, permissions('admin')*/, async (req, res) => {
  const { id } = req.params;
  await Capitulos.findByIdAndDelete(id);

  return res.json({
    message: 'Capitulos deleted',
  });
});

// Modify Capitulos by id
router.put('/:id', /*permissions('admin'),*/ async (req, res) => {
  const { id } = req.params;
  const {
    media,
    bloques,
    duracion,
    estado,
  } = req.body;

  const Capitulos = await Capitulos.findByIdAndUpdate(id, {
    media,
    bloques,
    duracion,
    estado,
  }, { new: true })

  if (!Capitulos) {
    return res.status(404).json({
      message: 'Capitulos not found',
    });
  }

  return res.json({
    data: Capitulos,
  });
});

module.exports = router;