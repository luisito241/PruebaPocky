export function formatTime(date: Date): string {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  }
  
  export async function saveMessage(content: string, sender: 'user' | 'bot') {
    try {
      const response = await fetch('http://localhost:3001/messages/guardar_contexto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, sender }),
      });
      if (!response.ok) {
        console.error('Error al guardar el mensaje:', await response.text());
      }
    } catch (error) {
      console.error('Error al conectar con el backend para guardar mensaje:', error);
    }
  }
  
  export function scrollToBottom(ref: React.RefObject<HTMLDivElement | null>) {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  
  