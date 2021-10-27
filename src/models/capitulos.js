const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CapitulosSchema = new Schema({
  media: String,
  bloques: Number,
  duracion: Number,
  estado: String,
}, {
  timestamps: true,
});

const CapitulosModel = mongoose.model('Capitulos', CapitulosSchema);
module.exports = { CapitulosSchema, CapitulosModel };