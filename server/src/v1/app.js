import express from 'express';
import routes from './routes';
import createAdmin from './middleware/admin';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send(`Welcome to Free Mentors!
Created by Jacqueline Binya, for Andela Bootcamp Cylcle 10;
Kigali, Rwanda`));

const port = process.env.PORT || 8001;

app.use('/api/v1', createAdmin);
app.use('/api/v1/auth', routes.authRoutes);
app.use('/api/v1/user', routes.userRoutes);
app.use('/api/v1/mentor', routes.mentorRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));

export default app;
