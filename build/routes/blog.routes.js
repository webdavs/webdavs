"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const articulo_controllers_1 = require("../controllers/articulo.controllers");
const multer_1 = __importDefault(require("../libs/multer"));
class RutaInicial {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get("/", articulo_controllers_1.article.listarArticulo);
        this.router.get("/:id", articulo_controllers_1.article.obtenerUno);
        this.router.post("/", multer_1.default.single('image'), articulo_controllers_1.article.addArticulo);
        this.router.put("/:id", articulo_controllers_1.article.updateArticulo);
        this.router.delete("/:id", articulo_controllers_1.article.eliminarArticulo);
    }
}
const rutaInicial = new RutaInicial();
exports.default = rutaInicial.router;
