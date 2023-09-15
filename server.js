const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json()); 

const baseRouter = express.Router();

//get request to print hello world
baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello world!');
});

//post request that performs addition
baseRouter.post('/add', (req, res) => {
    const { first, second } = req.body;
    res.json({ "result": first + second });
});

//post request that performs subtraction
baseRouter.post('/subtract', (req, res) => {
    const {first, second} = req.body;
    res.json({ "result": first - second });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
