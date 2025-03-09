const express = require('express');
const cors = require('cors');
const nodeRouter = require('./routes/nodes');
const edgeRouter = require('./routes/edges');



const app = express();

app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:5174']
}))

app.use('/nodes', nodeRouter);
app.use('/edges', edgeRouter)



app.listen(3000, () => {
  console.log(`Listening on http://localhost:3000`)
})