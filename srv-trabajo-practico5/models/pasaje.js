const mongoose = require('mongoose');
const { Schema } = mongoose;

const adelanto = require('./adelanto');

const PasajeSchema = new Schema({
    dniPasajero: { type: Number, required: true},
    precioPasaje: { type: Number, required: true},
    categoriaPasaje: { type: String, required: true},
    fechaCompra: { type: Date, required: true},
    adelantos: [{ type: Schema.Types.ObjectId, ref: adelanto}]
});

module.exports = mongoose.model('Pasaje', PasajeSchema);