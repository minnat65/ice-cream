import { Router, Request, Response } from "express";
import { uploadData, deleteData } from "../services/helper";

const router = Router();

router.patch('/ice-creams', async (req: Request, res: Response) => {
  res.status(200).json(await uploadData());
});

router.delete('/ice-creams', async (req: Request, res: Response) => {
  res.status(200).json(await deleteData());
});

export { router as helperRouter };