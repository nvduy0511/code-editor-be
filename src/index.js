const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routerApi = require('./routes');
const mongodb = require('./configs/mongodb.config');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Wellcome to Compile-Run-Code App!');
});

app.use('/api/', routerApi);

var server = require('http').createServer(app);

server.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

// mongodb
//     .config()
//     .then(() => {})
//     .catch((err) => {
//         console.log(err);
//     });
