const Mensaje = require('../models/mensaje');

const mensajeCtrl = {}

mensajeCtrl.getMensajes = async(req, res) => {
    mensajes = await Mensaje.find().populate("empresa");
    res.json(mensajes);
}

mensajeCtrl.createMensaje = async(req, res) => {
    const mensaje = new Mensaje(req.body);
    await mensaje.save();
    res.json({
        'status': 'Mensaje saved'
    });
}

mensajeCtrl.getMensaje = async(req, res) => {
    const mensaje = await Mensaje.findById(req.params.id).populate("empresa");
    res.json(mensaje);
}

mensajeCtrl.editMensaje = async(req,res) => {
    const vmensaje = new Mensaje(req.body);
    await Mensaje.findByIdAndUpdate(req.params.id, { $set: vmensaje }, { new:true});
    res.json({
        'status': 'Mensaje updated'
    });
}

mensajeCtrl.deleteMensaje = async(req, res) => {
    await Mensaje.findByIdAndRemove(req.params.id);
    res.json({
        'status' : 'Mensaje removed'
    });
}

module.exports = mensajeCtrl;