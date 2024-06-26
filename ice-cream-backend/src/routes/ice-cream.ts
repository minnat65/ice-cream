import { Router, Request, Response } from "express";
import { 
  getMonthlyRevenue, 
  getAllItems,
  getRevenueContribution,
} from "../services/ice-cream";

const router = Router();

// router.post('/ice-creams', async (req: Request, res: Response) => {
//   const data = req.body;

//   res.status(201).json(await addIceCream(data));
// });

router.get('/ice-creams', async (req: Request, res: Response) => {
  res.status(200).json(await getAllItems());
});

router.get('/ice-creams/revenue/percentage', async (req: Request, res: Response) => {
  res.status(200).json(await getRevenueContribution());
});

router.get('/ice-creams/revenue/month', async (req: Request, res: Response) => {
  res.status(200).json(await getMonthlyRevenue());
});

export { router as iceCreamRoute };
