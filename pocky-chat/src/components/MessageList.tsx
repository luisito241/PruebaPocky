import React from 'react';
import { Message } from './types';
import FilePreview from './FilePreview';

interface Props {
  messages: Message[];
  isTyping: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

const MessageList: React.FC<Props> = ({ messages, isTyping, messagesEndRef }) => (
  <div className="messages-container">
    {messages.map((msg, idx) => (
      <div key={idx} className={`message-wrapper ${msg.fromUser ? 'from-user' : 'from-pocki'}`}>
        {!msg.fromUser && <div className="avatar"><i className="fas fa-robot"></i></div>}
        <div className="message-content">
          <div className={`message-bubble ${msg.fromUser ? 'from-user' : 'from-pocki'}`}>
            {msg.text}
            {msg.file && <FilePreview file={msg.file} />}
          </div>
          <div className="message-time">{msg.time}</div>
        </div>
      </div>
    ))}

    {isTyping && (
      <div className="message-wrapper from-pocki">
        <div className="avatar"><i className="fas fa-robot"></i></div>
        <div className="typing-indicator"><span></span><span></span><span></span></div>
      </div>
    )}

    <div ref={messagesEndRef} />
  </div>
);

export default MessageList;
