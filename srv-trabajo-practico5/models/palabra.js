const mongoose = require('mongoose');
const { Schema } = mongoose;

const PalabraSchema = new Schema({
    palabraEsp:{ type: String, required: true },
    palabraIng:{ type: String, required: true },
    ulrImagen: { type: String, required: true }
});

module.exports = mongoose.model('Palabra', PalabraSchema);