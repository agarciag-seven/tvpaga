const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CanalesSchema = new Schema({
  nombre: String,
  descripcion: String,
  logo: String,
}, {
  timestamps: true,
});

const CanalesModel = mongoose.model('Canales', CanalesSchema);
module.exports = { CanalesSchema, CanalesModel };