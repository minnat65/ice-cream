Guide to run the project on your local machine.

Clone it from Github with the git clone command.

Run **cd ice-cream** to go to the root folder.

**Backend**
1. Go to ice-cream-backend directory by **cd ice-cream-backend** command from root folder.
2. Run **npm install** to install all dependecies.
3. **OPTIONAL** - run cd src/utils and run node csv-json.js to read the txt file and convert it into JSON.
4. Run **ts-node adhoc.ts --delete** to delete all existing data from DB.
5. Run **ts-node adhoc.ts --import** to import all data into DB.
6. Finally, run **npm start** from _ice-cream-backend_ directory to start the server.

**Frontend**
1. Now open another terminal, and go to ice-cream-client directory with **cd ice-cream-client** command.
2. Run **npm install** to install all dependecies.
3. Now run **npm run dev** to start the development server of the client app.

Finally, open _http://localhost:5173/_ in any browser.

In case of this error: _'ts-node' is not recognized as an internal or external command_, run **npm install -g ts-node** and then run the Backend number **4** command.
