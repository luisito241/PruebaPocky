import cors from 'cors';
import messageRoutes from './routes/messageRoutes';
import chatRoutes from './routes/chatRoutes';
import express, { Request, Response, NextFunction } from 'express';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/messages', messageRoutes);
app.use('/chat', chatRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err); // para debug
    res.status(500).json({ error: err.message || 'Internal Server Error' });
  });
export default app;
