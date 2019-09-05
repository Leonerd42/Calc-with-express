const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/adicao', (req, res) => {
    var num1 = parseFloat(req.body.numero1);
    var num2 = parseFloat(req.body.numero2);
    var Resultado = num1 + num2;
    console.log(num1, num2);
    if(isNaN(Resultado)){
        res.send('NaN');
    } else {
        res.send(`${Resultado}`);
    }
});

app.post('/subtracao', (req, res) => {
    var num1 = parseFloat(req.body.numero1);
    var num2 = parseFloat(req.body.numero2);
    var Resultado = num1 - num2;
    console.log(num1, num2);
    if(isNaN(Resultado)){
        res.send('NaN');
    } else {
        res.send(`${Resultado}`);
    }
});

app.post('/multiplicacao', (req, res) => {
    var num1 = parseFloat(req.body.numero1);
    var num2 = parseFloat(req.body.numero2);
    var Resultado = num1 * num2;
    console.log(num1, num2);
    if(isNaN(Resultado)){
        res.send('NaN');
    } else {
        res.send(`${Resultado}`);
    }
});

app.post('/divisao', (req, res) => {
    var num1 = parseFloat(req.body.numero1);
    var num2 = parseFloat(req.body.numero2);
    if(num2 != 0){
        var Resultado = num1 / num2;
        if(isNaN(Resultado) ){
            res.send('NaN');
        } else {
            res.send(`${Resultado}`);
        }
    }else {
        res.send('divBy0');
    }
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))