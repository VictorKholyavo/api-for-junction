const express = require('express');
const app = express();
const api = require('./api.json');

app.get('/', function(req,res) {
    res.sendFile('./index.html', { root : './'});
});

app.get('/all', function(req,res) {
    res.send(api)
});

app.get('/one/:id', function(req, res) {
    const id = req.params.id;
    if (id) {
        const oneIngrd = api.find((ingrd) => ingrd.id === +id);
        if (oneIngrd) {
            return res.send(oneIngrd);
        } 
        return res.send("Nothing was found");
    }
    return res.send("Nothing was found");
});
app.get('/count', function(req,res) {
    res.send(api.length.toString());
});
const port = 3000;
app.listen(port , () => console.log('App listening on port ' + port));