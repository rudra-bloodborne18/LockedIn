import express, { json } from 'express';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT =  process.env.PORT || 3000;

// Middleware to parse JSON
app.use(json());

// Basic route
app.use(express.json());
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});