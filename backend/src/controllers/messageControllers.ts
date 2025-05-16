import { Request, Response, NextFunction } from 'express';
import { getAllMessages, saveMessage } from '../services/dbService';

export const fetchMessages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const messages = await getAllMessages();
    res.json(messages);
  } catch (error) {
    next(error);
  }
};

export const createMessage = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const { content, sender } = req.body;
  
    if (!content || !sender) {
      res.status(400).json({ error: 'Content and sender are required' });
      return;
    }
  
    try {
      // Aquí tu lógica para guardar mensaje, ejemplo:
      const message = await saveMessage(content, sender);
      res.status(201).json(message);
    } catch (error) {
      next(error);
    }
  };
