"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const generateGraph = require('../dagre');
const router = express_1.default.Router();
router.get('/', (req, res) => {
    const nodes = generateGraph("nodes");
    res.status(200).send(nodes);
});
module.exports = router;
