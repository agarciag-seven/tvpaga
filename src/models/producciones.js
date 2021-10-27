const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProduccionesSchema = new Schema({
  nombre: String,
  descripcion: String,
}, {
  timestamps: true,
});

const ProduccionesModel = mongoose.model('Producciones', ProduccionesSchema);
module.exports = { ProduccionesSchema, ProduccionesModel };