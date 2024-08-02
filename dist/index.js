"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const index_1 = require("./db/index");
const port = process.env.PORT || 3000;
// after succesfull connection to the database, start the server
(0, index_1.connect)().then(() => {
    console.log('Connected to database');
    // index.ts is the entry point of the application and responsible for running the server
    app_1.app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}).catch((error) => {
    console.log(`error initializing app: ${error}`);
});
