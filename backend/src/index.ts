import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', require('./routes/authRoutes'));
app.use('/car', require('./routes/carRoutes'));
app.use('/rental', require('./routes/rentalRoutes'));

app.listen(process.env.PORT);