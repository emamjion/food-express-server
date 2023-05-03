const express = require('express');
const app = express();
const port = process.env.port || 5000;

app.get('/', (req, res) => {
    res.send('food express running')
});


app.listen(port, () => {
    console.log(`food express running on port: ${port}`);
})