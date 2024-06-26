import fs from 'fs';
import path from 'path';

import { mongoConnection } from '../config/data-source';
import { IceCream } from '../models/ice-cream';

process.env.DBURL = 'mongodb+srv://minnatali65:CX3RMNARklI4obiy@cluster0.mgzaaj1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const dir = path.join(__dirname, './files/ice-cream-data.json');
const iceCreamData = JSON.parse(fs.readFileSync(dir, 'utf-8'));

const importData = async () => {
  await mongoConnection();
  console.log('Connected to DB');

  await IceCream.insertMany(iceCreamData);
  console.log('Data inserted into DB.');

  process.exit(0);
}

const deleteData = async () => {
  await mongoConnection();
  console.log('Connected to DB');

  await IceCream.deleteMany({});
  console.log('Data deleted from DB');

  process.exit(0);  
}

if(process.argv[2]==='--import'){
  importData();
} else if(process.argv[2]==='--delete'){
  deleteData();
}