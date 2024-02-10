const express = require('express');
const app = express();


app.get('/api/hello', (req, resp) => {
    resp.send('Hello Geeta')
});

app.listen(2821, () => {
    console.log('Server started on 2821 port');
})