const Palabra = require('./../models/palabra');

const palabraCtrl = {}

 palabraCtrl.getPalabras = async(req,res)=>{
     const palabras = await Palabra.find();
     res.json(palabras);
 }

 palabraCtrl.createPalabra = async(req,res)=>{
     const palabra = new Palabra(req.body);
     await palabra.save();
     res.json({
         'status':'Palabra Saved'
     });
 }

 palabraCtrl.getPalabra = async(req,res)=>{
     const palabra = await Palabra.findById(req.params.id);
     res.json(palabra);
 }

 palabraCtrl.editPalabra = async(req,res)=>{
     const vpalabra = new Palabra(req.body);
     await Palabra.findByIdAndUpdate(req.params.id, { $set:vpalabra }, { new:true });
     res.json({
         'status':'Palabra Updated'
     });
 }

 palabraCtrl.deletePalabra = async(req,res)=>{
     await Palabra.findByIdAndRemove(req.params.id);
     res.json({
         'status':'Palabra Removed'
     });
 }

 module.exports = palabraCtrl;