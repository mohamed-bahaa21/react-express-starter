const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello from the server</h1>')
    
})

let PORT = process.env.PORT || 9000
app.listen(PORT, console.log(`Server: ${PORT}`));