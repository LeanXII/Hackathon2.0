import express, {Request, Response} from 'express';
const generateGraph =  require('../dagre');
const router = express.Router();


router.get('/', (req: Request, res: Response) => {

  const nodes = generateGraph();
  console.log(nodes);
  res.status(200).send(nodes);

})

module.exports = router;
