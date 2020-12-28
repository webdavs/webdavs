"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const articulo = require('../models/articulo.models');
class Articulo {
    addArticulo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, resumen, like, categoria, contenido } = req.body;
            const newArticulo = { titulo, resumen, like, categoria, contenido, imagePath: req.file.path };
            const article = new articulo(newArticulo);
            yield article.save();
            res.status(200).json({ article });
        });
    }
    listarArticulo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Articulos = yield articulo.find().sort({ date: 'desc' });
            res.json({ Articulos });
        });
    }
    eliminarArticulo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield articulo.findByIdAndDelete(req.params.id);
            res.send("ELIMINADO SATISFACTORIAMENTE");
        });
    }
    updateArticulo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield articulo.findByIdAndUpdate(req.params.id, req.body);
            res.send("ACTUALIZADO SATISFACTORIAMENTE");
        });
    }
    obtenerUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const unArticulo = yield articulo.findById(req.params.id);
            res.json({ unArticulo });
        });
    }
}
exports.article = new Articulo();
