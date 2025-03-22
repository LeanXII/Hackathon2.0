import express, {Request, Response} from 'express';
const generateGraph =  require('../dagre');
const router = express.Router();


router.get('/', (req: Request, res: Response) => {

  const edges = generateGraph({outputType: "edges"});

  res.status(200).send(edges);

})

module.exports = router;