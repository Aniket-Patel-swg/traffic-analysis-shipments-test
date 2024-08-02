import { app } from './app';
import { connect } from './db/index';

const port = process.env.PORT || 3000;

// after succesfull connection to the database, start the server
connect().then(() => {
    console.log('Connected to database');
    // index.ts is the entry point of the application and responsible for running the server
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}).catch((error) => {
    console.log(`error initializing app: ${error}`);
})


