import React, { useState, useRef, useEffect } from 'react';
import { Message } from './types';
import { formatTime, saveMessage, scrollToBottom } from './utils';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import EmojiPicker from './EmojiPicker';
import '../styles/Chat.css';
 
const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      fromUser: false,
      text: '¡Hola! ¿en qué puedo ayudarte hoy?',
      time: formatTime(new Date()),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollToBottom(messagesEndRef);
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const currentTime = formatTime(new Date());

    setMessages((prev) => [
      ...prev,
      {
        fromUser: true,
        text: input,
        time: currentTime,
      },
    ]);

    saveMessage(input, 'user');

    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:3001/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();

      setIsTyping(false);

      const botReply = data.message || 'Error en la respuesta.';

      setMessages((prev) => [
        ...prev,
        {
          fromUser: false,
          text: botReply,
          time: formatTime(new Date()),
        },
      ]);

      saveMessage(botReply, 'bot');
    } catch (error) {
      setIsTyping(false);
      const errorMsg = 'Error al conectar con el servidor.';
      setMessages((prev) => [
        ...prev,
        {
          fromUser: false,
          text: errorMsg,
          time: formatTime(new Date()),
        },
      ]);
      saveMessage(errorMsg, 'bot');
    }

    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-header-title">
          <i className="fas fa-comments"></i>
          <span>Chat Pocki</span>
        </div>
      </div>

      <MessageList messages={messages} isTyping={isTyping} messagesEndRef={messagesEndRef} />

      {showEmojiPicker && (
        <EmojiPicker
          onSelectEmoji={(emoji) => setInput(input + emoji)}
          onClose={() => setShowEmojiPicker(false)}
        />
      )}

      <MessageInput
        input={input}
        setInput={setInput}
        onSend={handleSend}
        onEmojiToggle={() => setShowEmojiPicker(!showEmojiPicker)}
      />
    </div>
  );
};

export default Chat;
