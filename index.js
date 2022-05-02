const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from my smarty app and welcome all')
});

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '017088888' },
    { id: 2, name: 'Shabnur', email: 'shabnur@gmail.com', phone: '017088888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '017088888' },
    { id: 4, name: 'Suchonda', email: 'Suchonda@gmail.com', phone: '017088888' },
    { id: 5, name: 'Sraboni', email: 'Sraboni@gmail.com', phone: '017088888' },
    { id: 6, name: 'Srabonty', email: 'Srabonty@gmail.com', phone: '017088888' },
    { id: 7, name: 'Sumona', email: 'Sumona@gmail.com', phone: '017088888' },
]


app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users)
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('Welcome to my new app', port);
})