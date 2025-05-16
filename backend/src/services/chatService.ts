import fetch from 'node-fetch';

const OPENAI_ENDPOINT = 'http://pocki-api-env-1.eba-pprtwpab.us-east-1.elasticbeanstalk.com/api/getOpenaiResponse';

export const getAIResponse = async (userInput: string): Promise<string> => {
  const response = await fetch(OPENAI_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ input: userInput }),
  });

  if (!response.ok) {
    throw new Error('Error al obtener respuesta del modelo de IA');
  }

  interface OpenAIResponse {
    choices: { message: { content: string } }[];
  }

  const data = await response.json() as OpenAIResponse;
  const aiMessage = data.choices[0].message.content;

  if (!aiMessage) {
    throw new Error('La IA no devolvió una respuesta válida');
  }

  return aiMessage;
};
