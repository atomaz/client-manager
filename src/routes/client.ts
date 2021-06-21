import { Router, Request, Response } from 'express'

const router = Router();

router.get('/client', (req: Request, res: Response) => {
  res.send([]);
});

router.get('/client/:id', (req: Request, res: Response) => {
  res.send({});
});

router.post('/client', (req: Request, res: Response) => {
  res.send({});
});

router.put('/client/:id', (req: Request, res: Response) => {
  res.send({});
});

router.delete('/client/:id', (req: Request, res: Response) => {
  res.send();
});


export default router;
