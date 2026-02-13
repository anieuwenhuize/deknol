import express from 'express';

let PORT_NUM = 8080;

const service = express();

service.use(express.json());

service.get('/api/ping', (req, res) => {

    res.json({time: Date.now(), msg: 'pong'})
});

service.listen(PORT_NUM, () => {

});