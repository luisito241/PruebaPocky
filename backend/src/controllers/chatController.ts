import { Request, Response, NextFunction } from 'express';
import { fetch } from 'undici';

export const getChatResponse = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { input } = req.body;

  // Si no hay input, respondemos con el mensaje fijo
  if (!input || input.trim() === '') {
    res.json({ message: "¡Hola! ¿en qué puedo ayudarte hoy?" });
    return;
  }

  try {
    const response = await fetch('http://pocki-api-env-1.eba-pprtwpab.us-east-1.elasticbeanstalk.com/api/getOpenaiResponse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input }),
    });

    const data = (await response.json()) as {
      choices: { message: { content: string } }[];
    };

    const aiMessage = data?.choices?.[0]?.message?.content;

    res.json({ message: aiMessage });
  } catch (error) {
    next(error);
  }
};
