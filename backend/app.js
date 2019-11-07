const express = require('express');
const bodyParser = require('body-parser');
const db = require('./controllers/users');
const port = 3002;
const app = express();
const usersRoutes = require('./routes/users')


app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use('/users', usersRoutes);

// app.get('/users', db.getUsers);
// app.get('/users/:id', db.getUserById);
// app.post('/users', db.createUser);


// app.put('/users/:id', db.updateUser);
// app.delete('/users/:id', db.deleteUser);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});