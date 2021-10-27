const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CanalesProduccionesSchema = new Schema({
  idCanal: {
    type: Schema.Types.ObjectId,
    ref: 'Canales',
  },
  idProduccion: {
    type: Schema.Types.ObjectId,
    ref: 'Producciones',
  }
}, {
  timestamps: true,
});

const CanalesProduccionesModel = mongoose.model('CanalesProducciones', CanalesProduccionesSchema);
module.exports = { CanalesProduccionesSchema, CanalesProduccionesModel };