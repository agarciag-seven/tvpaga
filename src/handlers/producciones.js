const express = require('express');
const router = express.Router();
const { ProduccionesModel: Producciones } = require('../models/producciones');

// Find all categories
router.get('/', async (req, res) => {
  const productions = await Producciones.find().exec();

  return res.json({
    results: productions,
  });
});

// Find Producciones by id
router.get('/:id', async (req,res) => {
  const { id } = req.params;
  const productions = await Producciones.findById(id);

  if (!productions) {
    return res.status(404).json({
      message: 'Producciones not found',
    });
  }

  return res.json({
    data: productions,
  });
});

// Create a new Producciones
router.post('/', async (req, res) => {
  const {
    nombre,
    descripcion,
  } = req.body;

  // TODO: Validate fields

  const productionTab = new Producciones({
    nombre,
    descripcion,
  });

  await productionTab.save();
  return res.status(201).json();
});

// Delete Producciones by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Producciones.findByIdAndDelete(id);

  return res.json({
    message: 'Producciones deleted',
  });
});

// Modify Producciones by id
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    descripcion,
  } = req.body;

  const ProduccionesResult = await Producciones.findByIdAndUpdate(id, {
    nombre,
    descripcion,
  }, { new: true })

  if (!ProduccionesResult) {
    return res.status(404).json({
      message: 'Producciones not found',
    });
  }

  return res.json({
    data: ProduccionesResult,
  });
});

module.exports = router;