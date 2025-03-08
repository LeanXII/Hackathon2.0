"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log(`Listening on http://localhost:3000`);
});
