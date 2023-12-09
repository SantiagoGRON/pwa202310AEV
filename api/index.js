const express = require('express');
const cors = require('cors');
const routerApi= require('./routes');
const {config} = require('./config/config');

const port = config.apiPort;
const app = express();

app.use(express.json());

const whitelist=[
    'http://8.8.8.8',
    '1.1.1.1:5171',
    `${config.corsIp}`,
    'https://www.algunasamjdnjkasd.com'
];

const options={
    origin: (origin,callback) =>{
        if (whitelist.includes(origin) || !origin){
            callback(null,true);
        } else {
            callback(new Error('no permitido'));
        }
    }
}

app.use(cors(options));

app.get('/', (req,res) => {
    res.json(
        {
            "Equipo": "Equipo 3",
            "Integrantes":"Marco A. y Santiago",
            "Proyecto": "Proyecto ARCI"
        }
    );
}) 

routerApi(app);

app.listen(port, () => {
    console.log(`Api escuchando en el puerto ${port}`);
});