import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {

	res.send({
		message: "Hello World!"
	});
});

router.get('/healthCheck', (req: Request, res: Response) => {

	res.send('Ok');
});

export default router;
