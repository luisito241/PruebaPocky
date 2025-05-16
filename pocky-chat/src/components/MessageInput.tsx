import React from 'react';

interface MessageInputProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  onSend: (e: React.FormEvent) => void;
  onEmojiToggle: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ input, setInput, onSend, onEmojiToggle }) => (
  <form className="input-container" onSubmit={onSend}>
    <input
      type="text"
      className="input-text"
      placeholder="Escribe tu mensaje..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <div className="input-actions">
      <button type="button" className="action-button action-button-emoji" onClick={onEmojiToggle}>
        <i className="fas fa-smile"></i>
      </button>
      <button type="submit" className="send-button">
        <i className="fas fa-paper-plane"></i>
      </button>
    </div>
  </form>
);

export default MessageInput;
