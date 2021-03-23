const express = require('express');


const app = express();

const rootCall = (req, res) => {
    res.send('Thank you very much')
}

app.get('/', rootCall)
app.listen(3000, () => console.log('Listenting to port 3000'));