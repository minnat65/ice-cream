import fs from 'fs';
import path from 'path';
import { IceCream } from "../models/ice-cream";

export const uploadData = async () => {
  const dir = path.join(__dirname, './ice-cream-data.json');
  const iceCreamData = JSON.parse(fs.readFileSync(dir, 'utf-8'));

  await IceCream.insertMany(iceCreamData);

  return {};
}

export const deleteData = async () => {
  await IceCream.deleteMany();

  return {};
}