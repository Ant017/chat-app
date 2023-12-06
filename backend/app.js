const express = require('express');
const socketIO = require('socket.io');
const cors = require('cors');
const databaseConnection = require('./config/database');
const dotenv = require('dotenv');
dotenv.config();

const auth = require('./routes/authRoutes');
const user = require('./routes/userRoutes');
const chat = require('./routes/chatRoutes');
const message = require('./routes/messageRoutes');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', auth);
app.use('/user', user);
app.use('/chat', chat);
app.use('/message', message);

app.use((err, req, res, next) => {
    if (
        err instanceof SyntaxError &&
        err.status === 400 &&
        'body' in err
    ) {
        return res.status(400).send({ message: 'Invalid JSON syntax!' });
    }
    next();
});



// using route() method to get the invalid routes
app
    .route('*')
    .get((req, res) => {
        res.status(400).send('Invalid route!');
    })
    .put((req, res) => {
        res.status(400).send('Invalid route!');
    })
    .post((req, res) => {
        res.status(400).send('Invalid route!');
    })
    .delete((req, res) => {
        res.status(400).send('Invalid route!');
    });

databaseConnection(() => {
    const server = app.listen(3000, () => {
        console.log('Server is running on 3000...');
    });
    const io = socketIO(server, {
        cors: {
            origin: '*',
        },
    });

    // Socket.io connection handling
    io.on('connection', (socket) => {
        console.log('A user connected');

        // Handle messages from the client
        socket.on('message', (message) => {
            console.log('Received message:', message);

            // Broadcast the message to all connected clients
            io.emit('message', message);
        });

        // Handle disconnect
        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
});
