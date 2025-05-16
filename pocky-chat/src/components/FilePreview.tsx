import React from 'react';
import { Message } from './types';

const FilePreview: React.FC<{ file: Message['file'] }> = ({ file }) => {
  if (!file) return null;
  switch (file.type) {
    case 'image':
      return <img src={file.url} alt={file.name} />;
    case 'video':
      return <video src={file.url} controls />;
    case 'audio':
      return <audio src={file.url} controls />;
    default:
      return <div><i className="fas fa-file"></i> {file.name}</div>;
  }
};

export default FilePreview;
