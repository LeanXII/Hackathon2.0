import express, {Request, Response} from 'express';
import { request } from 'http';
const generateGraph =  require('../dagre');
const router = express.Router();


router.get('/', (req: Request, res: Response) => {

  const nodes = generateGraph({outputType: "nodes"});
  res.status(200).send(nodes);

})

router.post('/create', (req: Request, res: Response) => {
  console.log(req.body)
  const {node} = req.body;
  const nodes = generateGraph({newNode: node, outputType: "nodes"})
  console.log(nodes)
  res.status(200).json(nodes);
})

module.exports = router;
