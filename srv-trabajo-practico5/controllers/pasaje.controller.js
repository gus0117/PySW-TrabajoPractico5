const Pasaje = require('../models/pasaje');
const { json } = require('express');

const pasajeCtrl = {}

pasajeCtrl.getPasajes = async(req, res) => {
    const pasajes = await Pasaje.find().populate("adelantos");
    res.json(pasajes);
}

pasajeCtrl.createPasaje = async(req, res) => {
    const pasaje = new Pasaje(req.body);
    await pasaje.save();
    res.json({
        'status':'Pasaje Saved'
    });
}

pasajeCtrl.getPasaje = async(req, res) => {
    const pasaje = await Pasaje.findById(req.params.id).populate("adelantos");
    res.json(pasaje);
}

pasajeCtrl.editPasaje = async(req, res) => {
    const vpasaje = new Pasaje(req.body);
    await Pasaje.findByIdAndUpdate(req.params.id, { $set: vpasaje }, { new:true});
    res.json({
        'status': 'Pasaje updated'
    });
}

pasajeCtrl.deletePasaje = async(req, res) => {
    await Pasaje.findByIdAndRemove(req.params.id);
    res.json({
        'status' : 'Pasaje removed'
    });
}

module.exports = pasajeCtrl;