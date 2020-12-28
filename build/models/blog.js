"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const mongoose_1 = require("mongoose");
const ArticuloSchema = new mongoose_1.Schema({
    tutulo: { type: String, required: true },
    resumen: { type: String, required: true },
    like: { type: Number },
    imagePath: { type: String, required: true },
    categoria: { type: String, required: true },
    contenido: { type: String, required: true }
});
module.exports = mongoose.model('Articulo', ArticuloSchema);
