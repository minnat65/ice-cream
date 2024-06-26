import { app } from './app';
import { mongoConnection } from './config/data-source';

const start = async () => {
  try {
    mongoConnection()
      .then(() => {
        console.log('DB Connected.');
      })
      .catch((err) => {
        console.log(`Error connecting to DB. ${err}`);
      })
  } catch(err) {
    console.log(err);
  }
  
  app.listen(3001, () => {
    console.log("Listening on port 3001!!!!!!!!");
  });  
}

start();