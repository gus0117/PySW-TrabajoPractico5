const mongoose = require('mongoose');
const { Schema } = mongoose;

const Adelanto = require('./adelanto');

const PasajeSchema = new Schema({
    dniPasajero: { type: Number, required: true},
    precioPasaje: { type: Number, required: true},
    categoriaPasajero: { type: String, required: true},
    fechaCompra: { type: Date, required: true},
    adelantos: [{ type: Adelanto.schema, required: false}]
});

module.exports = mongoose.model('Pasaje', PasajeSchema);