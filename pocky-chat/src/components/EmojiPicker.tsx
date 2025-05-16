import React from 'react';

const commonEmojis = [
  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃',
  '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😚', '😙',
  '😋', '😛', '😜', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐',
  '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔',
  '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵',
  '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '💔', '❣️', '💕',
  '💞', '💓', '💗', '💖', '💘', '💝', '💟', '👍', '👎', '✌️'
];

interface EmojiPickerProps {
  onSelectEmoji: (emoji: string) => void;
  onClose: () => void;
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ onSelectEmoji, onClose }) => (
  <div className="emoji-picker">
    <div className="emoji-picker-header">
      <span>Emojis</span>
      <button className="emoji-close-button" onClick={onClose}>
        <i className="fas fa-times"></i>
      </button>
    </div>
    <div className="emoji-list">
      {commonEmojis.map((emoji, idx) => (
        <button
          key={idx}
          className="emoji-item"
          onClick={() => onSelectEmoji(emoji)}
          type="button"
        >
          {emoji}
        </button>
      ))}
    </div>
  </div>
);

export default EmojiPicker;
