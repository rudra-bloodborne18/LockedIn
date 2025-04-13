import express, { json } from 'express';

const app = express();
const PORT =  process.env.PORT || 3000;

// Middleware to parse JSON
app.use(json());

// Basic route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});