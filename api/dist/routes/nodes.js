"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const generateGraph = require('../dagre');
const router = express_1.default.Router();
router.get('/', (req, res) => {
    const nodes = generateGraph({ outputType: "nodes" });
    res.status(200).send(nodes);
});
router.post('/create', (req, res) => {
    console.log(req.body);
    const { node } = req.body;
    const nodes = generateGraph({ newNode: node, outputType: "nodes" });
    console.log(nodes);
    res.status(200).json(nodes);
});
module.exports = router;
