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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const articulo = require('../models/articulo');
class Articulo {
    addArticulo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, resumen, like, imagePath, categoria, contenido } = req.body;
            const newArticulo = new articulo({ titulo, resumen, like, imagePath: req.file.path, categoria, contenido });
            yield newArticulo.save();
            res.status(200).json({ newArticulo });
        });
    }
    listarArticulo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userList = yield articulo.find().sort({ date: 'desc' });
            res.json({ userList });
        });
    }
    eliminarArticulo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const eliminarArticulo = yield articulo.findByIdAndDelete(req.params.id);
            if (eliminarArticulo) {
                yield fs_extra_1.default.unlink(path_1.default.resolve(eliminarArticulo.imagePath));
            }
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
