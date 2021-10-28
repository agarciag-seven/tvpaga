const express = require('express');
const router = express.Router();
const { CapitulosModel: Capitulos } = require('../models/capitulos');

// Find all categories
router.get('/', async (req, res) => {
  const chapters = await Capitulos.find().exec();

  return res.json({
    results: chapters,
  });
});

// Find Capitulos by id
router.get('/:id', async (req,res) => {
  const { id } = req.params;
  const CapitulosResult = await Capitulos.findById(id);

  if (!CapitulosResult) {
    return res.status(404).json({
      message: 'Capitulos not found',
    });
  }

  return res.json({
    data: CapitulosResult,
  });
});

// Create a new Capitulos
router.post('/', async (req, res) => {
  const {
    media,
    bloques,
    duracion,
    estado,
  } = req.body;

  // TODO: Validate fields

  const CapitulosTab = new Capitulos({
    media,
    bloques,
    duracion,
    estado,
  });

  await CapitulosTab.save();
  return res.status(201).json();
});

// Delete Capitulos by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Capitulos.findByIdAndDelete(id);

  return res.json({
    message: 'Capitulos deleted',
  });
});

// Modify Capitulos by id
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    media,
    bloques,
    duracion,
    estado,
  } = req.body;

  const CapitulosResult = await Capitulos.findByIdAndUpdate(id, {
    media,
    bloques,
    duracion,
    estado,
  }, { new: true })

  if (!CapitulosResult) {
    return res.status(404).json({
      message: 'Capitulos not found',
    });
  }

  return res.json({
    data: CapitulosResult,
  });
});

module.exports = router;