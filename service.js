import express from 'express';

let PORT_NUM = 8080;

const service = express();

service.use(express.json());

service.get('api/ping', (req, res) => {

    res.json({id: Date.now(), msg: 'All is good.'})
});

service.listen(PORT_NUM, () => {

});