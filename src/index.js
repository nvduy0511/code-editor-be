import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routerApi from './routes';
import mongodb from './configs/mongodb.config';
import dotenv from 'dotenv';
import typeDefs from './gql/types';
import resolvers from './gql/resolver';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

// Load schema & resolvers

app.get('/', (req, res) => {
    res.send('Wellcome to Compile-Run-Code App!');
});

app.use('/api/', routerApi);

// var server = require('http').createServer(app);

let server_grapql = null;
async function startServer() {
    server_grapql = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await server_grapql.start();
    server_grapql.applyMiddleware({ app });
}
startServer();

mongodb
    .config()
    .then(() => {
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
