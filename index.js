const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;

const chefs = require('./data/chefs.json');
const chefDetails = require('./data/chefDetails.json');

app.use(cors());
app.get('/', (req, res) => {
    res.send('food express running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
});

app.get('/chefDetails', (req, res) => {
    res.send(chefDetails);
});


app.get('/chefDetails/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedChef = chefDetails.find(n => n.id === id);
    res.send(selectedChef);
});

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const chefAndDetails = chefDetails.filter(n => n.id == id);
    res.send(chefAndDetails);
})


app.listen(port, () => {
    console.log(`food express running on port: ${port}`);
})