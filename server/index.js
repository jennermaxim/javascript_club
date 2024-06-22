import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import applicationRoutes from './routes/application.js';

const app = express();

app.use('/application', applicationRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://cuujavascript:Mpmc9WcmGmRmJgWR@javascript.tl0gp4f.mongodb.net/?retryWrites=true&w=majority&appName=JavaScript';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('findOneAndUpdate', false);
// cuujavascript
// Mpmc9WcmGmRmJgWR

// mongodb+srv://cuujavascript:Mpmc9WcmGmRmJgWR@javascript.tl0gp4f.mongodb.net/?retryWrites=true&w=majority&appName=JavaScript