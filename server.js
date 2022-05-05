const express = require('express');
const app = express();
app.get('/', (req, res) =>{
    res.send('Long dep trai qua')
})
app.listen(3001);