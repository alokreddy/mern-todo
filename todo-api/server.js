const express = require('express');
const todoRouter = require('./routes/todo');

const app = express();

app.use('/todos', todoRouter);

app.get('/test', (req, res) => res.json({ msg: 'Test Passed' }));

app.listen(5000, () => {
    console.log('App listening on port 5000');
});
