const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProduccionesCapitulosSchema = new Schema({
  idProduccion: {
    type: Schema.Types.ObjectId,
    ref: 'Producciones',
  },
  idCapitulo: {
    type: Schema.Types.ObjectId,
    ref: 'Capitulos',
  }
}, {
  timestamps: true,
});

const ProduccionesCapitulosModel = mongoose.model('ProduccionesCapitulos', ProduccionesCapitulosSchema);
module.exports = { ProduccionesCapitulosSchema, ProduccionesCapitulosModel };