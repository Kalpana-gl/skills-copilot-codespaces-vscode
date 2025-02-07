//Create web server
const express = require('express');
const app = express();
//Use the static files in public folder
app.use(express.static('public'));
//Use the static files in node_modules folder
app.use('/modules', express.static('node_modules'));

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

//Create data
const comments = [
    {
        name: 'John',
        comment: 'Hello'
    },
    {
        name: 'Jane',
        comment: 'Hi'
    }
];

//Create routes
app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    const comment = {
        name: req.query.name,
        comment: req.query.comment
    };
    comments.push(comment);
    res.send(comment);
});